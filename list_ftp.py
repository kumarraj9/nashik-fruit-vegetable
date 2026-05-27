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
    print(f"Start PWD: {ftp.pwd()}")
    
    # Force navigate to FTP root "/" first
    ftp.cwd('/')
    print(f"Navigated to root. Current PWD: {ftp.pwd()}")
    
    print("\n--- Exploring 'domains' folder from root ---")
    try:
        ftp.cwd('domains')
        print("Entered 'domains' folder.")
        ftp.retrlines('LIST')
        
        # Get list of files/folders in domains
        subdirs = []
        ftp.dir(subdirs.append)
        for line in subdirs:
            parts = line.split()
            if len(parts) > 8:
                name = parts[-1]
                if name not in ['.', '..']:
                    print(f"\nChecking domain folder: {name}")
                    try:
                        ftp.cwd(name)
                        print(f"Entered domains/{name}. Current directory listing:")
                        ftp.retrlines('LIST')
                        
                        try:
                            ftp.cwd('public_html')
                            print(f"Entered domains/{name}/public_html. Listing:")
                            ftp.retrlines('LIST')
                            
                            # Navigate back to domains folder
                            ftp.cwd('../..')
                        except Exception as e:
                            print(f"Could not enter public_html: {e}")
                            ftp.cwd('..')
                    except Exception as e:
                        print(f"Could not enter domains/{name}: {e}")
    except Exception as e:
        print(f"Could not check domains folder: {e}")
        
    ftp.quit()
except Exception as e:
    print(f"FTP Debug Error: {e}")
