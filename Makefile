PORT=80
NAME=scarlett-school
IMAGE=scarlett-school

all: sync
	docker build --build-arg PORT=80 -t scarlett-school .
	make down
	docker run -d --name $(NAME) -p $(PORT):80 $(IMAGE)

down:
	docker rm -f $(NAME) || :

test:
	make PORT=8000 all

sync:
	docker pull nginx
	docker pull node
