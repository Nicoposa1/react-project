FROM NODE:10-ALPINE
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 3000
ENV NODE_ENV=peoduction
CMD ["node", "index.js"]
