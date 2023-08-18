# Node.js imajını kullanın
FROM node:14-alpine

# Çalışma dizinini belirtin
WORKDIR /app

# Uygulamanızın dosyalarını kopyalayın
COPY package*.json ./

# Gerekli modülleri yükleyin
RUN npm install

# Uygulama dosyalarını kopyalayın
COPY . .

# Uygulamayı başlatın
CMD ["npm", "run", "start:dev"]
