FROM node:16
# 특정 버전 node 이미지를 받아옵니다.  
MAINTAINER taehee<klimes888@gmail.com>
# 작성자의 이름을 적습니다. 
WORKDIR /server
# 만들 이미지에 작업할 디렉토리로 이동합니다.  
COPY package*.json /server/
# 현재 디렉토리에 package로 시작하는 파일들을 복사하여 이미지에서 작업할 디렉토리로 복사합니다. 
RUN yarn install
 
COPY . .
  
EXPOSE 3000

CMD ["yarn", "start"]
# typescript로 작성된 node이므로 build를 하여 javascript 파일로 컴파일 해줍니다.  
# CMD ["npm", "run", "serve"] 
