FROM fusuf/whatsasena:latest

RUN git clone https://SkueletorTlg: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@github.com/SkueletorTlg/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=America/New_York
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
