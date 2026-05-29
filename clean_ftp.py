import ftplib
import os

server = os.environ.get('FTP_SERVER')
username = os.environ.get('FTP_USERNAME')
password = os.environ.get('FTP_PASSWORD')

def remove_dir_recursive(ftp, path):
    try:
        ftp.cwd(path)
        files = []
        ftp.dir(files.append)
        for line in files:
            parts = line.split()
            if len(parts) > 8:
                name = parts[-1]
                if name not in ['.', '..']:
                    if line.startswith('d'):
                        remove_dir_recursive(ftp, name)
                    else:
                        try:
                            ftp.delete(name)
                        except Exception as e:
                            print(f"Failed to delete file {name}: {e}")
        ftp.cwd('..')
        ftp.rmd(path)
        print(f"Successfully deleted directory: {path}")
    except Exception as e:
        print(f"Error deleting directory {path}: {e}")

print(f"Connecting to FTP Server: {server} as {username}...")
try:
    if '://' in server:
        server = server.split('://')[1]
    if ':' in server:
        server = server.split(':')[0]
        
    ftp = ftplib.FTP(server)
    ftp.login(username, password)
    print("Logged in successfully!")
    
    # 1. Clean up accidental deployment in primary domain's public_html (initial login directory)
    target_dir = "./"
    print(f"Navigating to primary directory for cleanup: {target_dir}...")
    ftp.cwd(target_dir)
    
    try:
        ftp.delete(".ftp-deploy-sync-state.json")
        print("Deleted .ftp-deploy-sync-state.json in primary.")
    except Exception as e:
        print("No .ftp-deploy-sync-state.json found in primary.")
        
    items_primary = ftp.nlst()
    print("Files/folders in primary before cleanup:", items_primary)
    
    nextjs_folders = [
        '_next',
        '_not-found',
        'contact-us',
        'about-us',
        'logistics',
        'products',
        'onion-exporter-from-nashik',
        'tomato-supplier-from-nashik',
        'pomegranate-supplier-from-nashik',
        'domains'
    ]
    for folder in nextjs_folders:
        if folder in items_primary:
            print(f"Deleting directory in primary: {folder}")
            remove_dir_recursive(ftp, folder)
            
    for item in items_primary:
        if item.endswith('.html') and item not in ['.', '..']:
            print(f"Deleting HTML file in primary: {item}")
            try:
                ftp.delete(item)
            except Exception as e:
                print(f"Failed to delete HTML file in primary {item}: {e}")

    # 2. Go to the actual website target directory and clean it
    actual_target = "../domains/nashikfruitandvegetable.com/public_html"
    print(f"Navigating to actual website directory: {actual_target}...")
    ftp.cwd(actual_target)
    
    try:
        ftp.delete(".ftp-deploy-sync-state.json")
        print("Deleted .ftp-deploy-sync-state.json in actual website directory.")
    except Exception as e:
        print("No .ftp-deploy-sync-state.json found in actual website directory.")
        
    items_actual = ftp.nlst()
    print("Files/folders in actual website directory before cleanup:", items_actual)
    
    for folder in nextjs_folders:
        if folder in items_actual:
            print(f"Deleting directory in actual website folder: {folder}")
            remove_dir_recursive(ftp, folder)
            
    for item in items_actual:
        if item.endswith('.html') and item not in ['.', '..']:
            print(f"Deleting HTML file in actual website folder: {item}")
            try:
                ftp.delete(item)
            except Exception as e:
                print(f"Failed to delete HTML file in actual website folder {item}: {e}")
                
    ftp.quit()
    print("Cleanup completed successfully!")
except Exception as e:
    print(f"FTP Cleanup Error: {e}")


