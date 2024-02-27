import os

def get_latest_file(folder_path):
    # List all files in the folder
    files = os.listdir(folder_path)
    # Filter out directories, if any
    files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]
    # Sort files based on modification time
    files.sort(key=lambda x: os.path.getmtime(os.path.join(folder_path, x)), reverse=True)
    # Return the first (latest) file
    if files:
        return files[0]
    else:
        return None


