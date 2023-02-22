FROM node:11.8 AS base

# Install Docker

RUN apt-get update && \
    apt-get -y install apt-transport-https \
        ca-certificates \
        curl \
        gnupg2 \
        software-properties-common && \
    curl -fsSL https://download.docker.com/mac/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
    add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
    $(lsb_release -cs) \
    stable" && \
    apt-get update && \
    apt-get -y install docker-ce

# Log versions

RUN set -x \
    && node -v \
    && npm -v \
    && docker --version

# App specific commands

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD yarn storybook:build && yarn loki --requireReference --reactUri file:./dist/storybook
