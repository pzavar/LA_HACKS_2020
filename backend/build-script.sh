# call in backend working dir 

# -v : verbose
# -r : copies data recursively (but don’t preserve timestamps and permission while transferring data
# -a : archive mode, archive mode allows copying files recursively and it also preserves symbolic links, file permissions, user & group ownerships and timestamps
# -P : show progress
# Make sure the current directories CONTENTS are the same as the CONTENTS within backend on the remote account
rsync -avrP --exclude 'node_modules' . forkandspatula@daken.dreamhost.com:/home/forkandspatula/forkandspatula.com/backend/
