cd

rm -rfv /var/www/html/forums/*
cp -r /home/_theforge/_git/TheForge/website/forums/* /var/www/html/forums
echo "Deleted old, and Transfered forums files."

echo "Sync complete."
