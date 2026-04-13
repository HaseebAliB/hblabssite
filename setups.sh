#!/bin/bash

set -e

echo "🚀 Updating system..."
apt update && apt upgrade -y

echo "📦 Installing dependencies..."
apt install -y git curl nginx ufw

echo "🟢 Installing Node.js LTS..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

echo "⚙️ Installing PM2..."
npm install -g pm2

echo "🔥 Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "📁 Cloning project..."
REPO_URL="https://github.com/HaseebAliB/hblabssite.git"
APP_DIR="/var/www/app"

rm -rf $APP_DIR
git clone $REPO_URL $APP_DIR
cd $APP_DIR

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building React app..."
npm run build

echo "🧠 Starting Node API (PM2)..."
pm2 delete app || true
pm2 start "node --loader tsx server.ts" --name app
pm2 save
pm2 startup

echo "🌐 Configuring Nginx for main.hblabs.tech..."

cat > /etc/nginx/sites-available/hblabs <<EOF
server {
    listen 80;
    server_name main.hblabs.tech;

    # React frontend (Vite build output)
    location / {
        root /var/www/app/dist;
        index index.html;
        try_files \$uri /index.html;
    }

    # Node API (email service)
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOF

ln -sf /etc/nginx/sites-available/hblabs /etc/nginx/sites-enabled/

nginx -t && systemctl restart nginx

echo "✅ Deployment complete!"
echo "👉 Open: http://main.hblabs.tech"



nslookup main.hblabs.com
Server:  UnKnown
Address:  192.168.100.1

Non-authoritative answer:
Name:    main.hblabs.com
Address:  76.13.179.171