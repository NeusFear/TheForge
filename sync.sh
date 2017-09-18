cd

shopt -s extglob
rm -rf !(forums)
cp -r /home/_theforge/_git/website/* /var/www/html
echo "Deleted old, and Transfered website files."

rm /home/_theforge/_discord/_bots/bot.js
cp -r /home/_theforge/_git/discord/bot.js /home/_theforge/_discord/_bots
echo "Updated bot."

rm -rfv /home/_theforge/_servers/minecraft/lobby/plugins/Skript/scripts/*
rm -rfv /home/_theforge/_servers/minecraft/RPG/plugins/Skript/scripts/*
rm -rfv /home/_theforge/_servers/minecraft/survival/plugins/Skript/scripts/*
cp -r /home/_theforge/_git/minecraft/scripts/global/* /home/_theforge/_servers/minecraft/lobby/plugins/Skript/scripts
cp -r /home/_theforge/_git/minecraft/scripts/global/* /home/_theforge/_servers/minecraft/RPG/plugins/Skript/scripts
cp -r /home/_theforge/_git/minecraft/scripts/global/* /home/_theforge/_servers/minecraft/survival/plugins/Skript/scripts
cp -r /home/_theforge/_git/minecraft/scripts/lobby/* /home/_theforge/_servers/minecraft/lobby/plugins/Skript/scripts
cp -r /home/_theforge/_git/minecraft/scripts/RPG/* /home/_theforge/_servers/minecraft/RPG/plugins/Skript/scripts
cp -r /home/_theforge/_git/minecraft/scripts/survival/* /home/_theforge/_servers/minecraft/survival/plugins/Skript/scripts
echo "Replaced all scripts on all servers."

echo "Sync complete."
