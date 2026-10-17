<?php
/**
 * Nashik Fruit and Vegetable Company - B2B Executive Lead Storage API
 * Protected Lead Storage for Form Submissions, WhatsApp & Phone Inquiries
 */

error_reporting(0);
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$DATA_FILE = __DIR__ . '/leads_vault.json';
$ADMIN_PIN = '2026';
$MAGIC_PREFIX = "/* NFV_VAULT_PROTECTED */\n";

function read_leads($file, $prefix) {
    if (!file_exists($file)) {
        return [];
    }
    $raw = @file_get_contents($file);
    if (!$raw) {
        return [];
    }
    if (strpos($raw, $prefix) === 0) {
        $raw = substr($raw, strlen($prefix));
    }
    $data = @json_decode(trim($raw), true);
    return is_array($data) ? $data : [];
}

function save_leads($file, $leads, $prefix) {
    $json = json_encode(array_values($leads), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    return @file_put_contents($file, $prefix . $json, LOCK_EX) !== false;
}

$method = $_SERVER['REQUEST_METHOD'];

// 1. GET: Retrieve leads for Dashboard (PIN protected)
if ($method === 'GET') {
    $pin = isset($_GET['pin']) ? trim($_GET['pin']) : '';
    if ($pin !== $ADMIN_PIN && $pin !== 'admin') {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Unauthorized. Invalid PIN.']);
        exit;
    }

    $leads = read_leads($DATA_FILE, $MAGIC_PREFIX);
    echo json_encode([
        'success' => true,
        'count' => count($leads),
        'leads' => $leads
    ]);
    exit;
}

// 2. POST: Save a new lead OR Clear leads
if ($method === 'POST') {
    // Check if clear action requested by admin
    if (isset($_GET['action']) && $_GET['action'] === 'clear') {
        $pin = isset($_GET['pin']) ? trim($_GET['pin']) : '';
        if ($pin !== $ADMIN_PIN && $pin !== 'admin') {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Unauthorized.']);
            exit;
        }
        save_leads($DATA_FILE, [], $MAGIC_PREFIX);
        echo json_encode(['success' => true, 'message' => 'Lead store cleared successfully.']);
        exit;
    }

    // Otherwise, parse incoming lead payload
    $rawInput = @file_get_contents('php://input');
    $payload = @json_decode($rawInput, true);

    if (!is_array($payload)) {
        $payload = $_POST;
    }

    $type = isset($payload['type']) ? trim($payload['type']) : 'form';
    $commodity = isset($payload['commodity']) ? trim($payload['commodity']) : 'General Produce';
    $destination = isset($payload['destination']) ? trim($payload['destination']) : '';
    $volume = isset($payload['volume']) ? trim($payload['volume']) : '';
    $placement = isset($payload['placement']) ? trim($payload['placement']) : '/contact-us/';
    $name = isset($payload['name']) ? trim($payload['name']) : '';
    $company = isset($payload['company']) ? trim($payload['company']) : '';
    $phone = isset($payload['phone']) ? trim($payload['phone']) : '';
    $message = isset($payload['message']) ? trim($payload['message']) : '';

    $newLead = [
        'id' => 'LEAD-' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 8)),
        'timestamp' => gmdate('Y-m-d\TH:i:s\Z'),
        'type' => in_array($type, ['form', 'whatsapp', 'call']) ? $type : 'form',
        'commodity' => $commodity,
        'destination' => $destination,
        'volume' => $volume,
        'placement' => $placement,
        'name' => $name,
        'company' => $company,
        'phone' => $phone,
        'message' => $message,
        'ip' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : ''
    ];

    $leads = read_leads($DATA_FILE, $MAGIC_PREFIX);
    array_unshift($leads, $newLead);
    $leads = array_slice($leads, 0, 200);

    $saved = save_leads($DATA_FILE, $leads, $MAGIC_PREFIX);

    if ($saved) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'lead_id' => $newLead['id'],
            'message' => 'Lead registered successfully in executive vault.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to write lead to vault.']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method Not Allowed']);
