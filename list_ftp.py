import ftplib
import os

server = os.environ.get('FTP_SERVER')
username = os.environ.get('FTP_USERNAME')
password = os.environ.get('FTP_PASSWORD')

print(f"Connecting to FTP Server: {server} as {username}...")
try:
    if '://' in server:
        server = server.split('://')[1]
    if ':' in server:
        server = server.split(':')[0]
        
    ftp = ftplib.FTP(server)
    ftp.login(username, password)
    print("Logged in successfully!")
    
    print("\n--- Exploring 'domains' folder ---")
    try:
        ftp.cwd('domains')
        print("Entered 'domains' folder.")
        ftp.retrlines('LIST')
        
        # Check inside the first folder in domains (which should be the domain)
        subdirs = []
        ftp.dir(subdirs.append)
        for line in subdirs:
            parts = line.split()
            if len(parts) > 8:
                name = parts[-1]
                if name not in ['.', '..']:
                    print(f"\nFound domain folder: {name}")
                    try:
                        target_dir = f"{name}/public_html"
                        ftp.cwd(target_dir)
                        print(f"Successfully entered: domains/{target_dir}")
                        print(f"Listing contents of domains/{target_dir}:")
                        ftp.retrlines('LIST')
                    except Exception as e:
                        print(f"Could not enter domains/{target_dir}: {e}")
    except Exception as e:
        print(f"Could not check domains folder: {e}")
        
    ftp.quit()
except Exception as e:
    print(f"FTP Debug Error: {e}")
