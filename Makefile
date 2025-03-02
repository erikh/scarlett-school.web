PORT=80
NAME=scarlett-school
IMAGE=scarlett-school

all: sync build

build:
	docker build -t scarlett-school .

start:
	docker run -d --name $(NAME) -p 80:80 -p 443:443 $(IMAGE)

down:
	docker rm -f $(NAME) || :

test: all down
	make start

sync:
	docker pull caddy
	docker pull node

ship:
	docker save scarlett-school >scarlett-school.img
	scp scarlett-school.img root@107.170.250.26:~
	ssh root@107.170.250.26 "bash -c 'docker load <scarlett-school.img && rm scarlett-school.img'"
	rm scarlett-school.img

.PHONY: build
