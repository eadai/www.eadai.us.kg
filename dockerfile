# 使用 Node.js 22 作為基礎映像
FROM node:22

# 設置工作目錄
WORKDIR /app

COPY ./eadai .

WORKDIR /app/eadai

# 安裝依賴
RUN npm install 