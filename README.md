# UNICESUMAR LANDINGPAGE

--- -

## HOW TO
- install nodejs v16.17.1
- yarn 
- yarn start
- yarn build

--- 

## CONFIGURE .ENV for EMAIL SERVERJS
- REACT_APP_TEMPLATE_ID
- REACT_APP_SERVICE_ID
- REACT_APP_PUBLIC_KEY

--- 

## FOR RUNNING ON FIREBASE
- npm install -g firebase-tools
- npm build yarn build  EXCPT: npm run-script build
- firebase login
- firebase init
- path build
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
- File build/index.html already exists. Overwrite? (y/N) N
- firebase deploy
- ssh -i "domreality.pem" ec2-user@ec2-15-229-93-212.sa-east-1.compute.amazonaws.com

--- 

## FOR RUNNING WITH PM2
- sudo apt install nodejs
- sudo apt install npm
- npm install pm2@latest -g  # for server project
- pip3 install requirements.txt
- pm2 start "yarn start" --exp-backoff-restart-delay=100
- pm2 list, pm2 start, pm2 stop
--- 


