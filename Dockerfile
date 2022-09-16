FROM node:18.9.0 as l3l0-profile-page-base

WORKDIR /home/l3l0-profile-page/project
ENTRYPOINT npm ci && npm run start
