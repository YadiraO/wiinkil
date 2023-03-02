FROM ubuntu/nginx:1.18-20.04_beta as builder

RUN	apt update \
    apt upgrade -y \
	apt install golang-go -y

WORKDIR /var/www/board

# RUN go build ./cmd/go
RUN go build
RUN ./go_server
