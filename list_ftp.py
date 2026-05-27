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
    
    print(f"Current working directory (PWD): {ftp.pwd()}")
    
    print("\nListing current folder contents:")
    ftp.retrlines('LIST')
    
    print("\nAttempting to go up one directory (..):")
    try:
        ftp.cwd('..')
        print(f"New PWD: {ftp.pwd()}")
        print("Listing parent folder contents:")
        ftp.retrlines('LIST')
        
        print("\nAttempting to go up another directory (../..):")
        try:
            ftp.cwd('..')
            print(f"New PWD: {ftp.pwd()}")
            print("Listing parent-parent folder contents:")
            ftp.retrlines('LIST')
        except Exception as e:
            print(f"Could not go up further: {e}")
            
    except Exception as e:
        print(f"Could not go up: {e}")
        
    ftp.quit()
except Exception as e:
    print(f"FTP Debug Error: {e}")
