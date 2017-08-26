cd

rm -rfv /var/www/html/*
cp -r /home/_theforge/_git/TheForge/website/* /var/www/html
echo "Deleted old, and Transfered website files."

rm /home/_theforge/_discord/_bots/TheForge/bot.js
cp -r /home/_theforge/_git/TheForge/discord/bot.js /home/_theforge/_discord/_bots/TheForge
echo "Updated bot."

rm -rfv /home/_theforge/_servers/minecraft/lobby/plugins/Skript/scripts/*
rm -rfv /home/_theforge/_servers/minecraft/RPG/plugins/Skript/scripts/*
rm -rfv /home/_theforge/_servers/minecraft/survival/plugins/Skript/scripts/*
cp -r /home/_theforge/_git/TheForge/minecraft/scripts/global/* /home/_theforge/_servers/minecraft/lobby/plugins/Skript/scripts
cp -r /home/_theforge/_git/TheForge/minecraft/scripts/global/* /home/_theforge/_servers/minecraft/RPG/plugins/Skript/scripts
cp -r /home/_theforge/_git/TheForge/minecraft/scripts/global/* /home/_theforge/_servers/minecraft/survival/plugins/Skript/scripts
cp -r /home/_theforge/_git/TheForge/minecraft/scripts/lobby/* /home/_theforge/_servers/minecraft/lobby/plugins/Skript/scripts
cp -r /home/_theforge/_git/TheForge/minecraft/scripts/RPG/* /home/_theforge/_servers/minecraft/RPG/plugins/Skript/scripts
cp -r /home/_theforge/_git/TheForge/minecraft/scripts/survival/* /home/_theforge/_servers/minecraft/survival/plugins/Skript/scripts
echo "Replaced all scripts on all servers."

echo "Sync complete."
