# 使用 Node.js 22 作為基礎映像
FROM node:22

RUN mkdir -p /app/eadai

# 設置工作目錄
WORKDIR /app/eadai

COPY . .

# 安裝依賴
RUN npm install