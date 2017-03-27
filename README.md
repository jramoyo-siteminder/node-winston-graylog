# node-winston-graylog

Sample code for Node.js logging to Graylog via Winston

### Run Graylog
1. `docker compose up`
1. Login: `admin:admin` (http://localhost:9000/)
1. System -> Inputs -> Launch new input -> GELF UDP (defaults)

### Run Node.js app
1. `yarn install`
1. `node index`