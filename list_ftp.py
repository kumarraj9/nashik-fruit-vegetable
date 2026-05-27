import ftplib
import os

server = os.environ.get('FTP_SERVER')
username = os.environ.get('FTP_USERNAME')
password = os.environ.get('FTP_PASSWORD')

print(f"Connecting to FTP Server: {server} as {username}...")
try:
    # Remove port or protocol if they exist
    if '://' in server:
        server = server.split('://')[1]
    if ':' in server:
        server = server.split(':')[0]
        
    ftp = ftplib.FTP(server)
    ftp.login(username, password)
    print("Logged in successfully!")
    
    print("\n--- Listing FTP Root Directory Contents ---")
    ftp.retrlines('LIST')
    
    print("\n--- Checking if public_html exists ---")
    try:
        ftp.cwd('public_html')
        print("Successfully entered public_html directory.")
        print("\n--- Listing public_html Contents ---")
        ftp.retrlines('LIST')
    except Exception as e:
        print(f"Could not enter public_html: {e}")
        
    ftp.quit()
except Exception as e:
    print(f"FTP Operations Error: {e}")
