### 部署 SSL 使用 HTTPS

#### 文件位置

服务器端 nginx.conf 文件 /etc/nginx/

SSL 证书 /root/SSL/

#### 操作

nginx.conf 设置 80 转发为 443，同时支持 443 即可

restart 一下服务



