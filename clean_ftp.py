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
    
    # Go to the target directory (FTP root is already public_html)
    target_dir = "./"
    print(f"Navigating to {target_dir}...")
    ftp.cwd(target_dir)
    
    # Delete sync state file
    try:
        ftp.delete(".ftp-deploy-sync-state.json")
        print("Deleted .ftp-deploy-sync-state.json on server.")
    except Exception as e:
        print("No .ftp-deploy-sync-state.json found, or could not delete.")
        
    # Delete _next folder recursively
    print("Deleting _next folder recursively...")
    remove_dir_recursive(ftp, "_next")
    
    # Delete accidentally created domains folder recursively if it exists
    print("Deleting nested domains folder recursively...")
    remove_dir_recursive(ftp, "domains")
    
    ftp.quit()
    print("Cleanup completed successfully!")
except Exception as e:
    print(f"FTP Cleanup Error: {e}")

