PORT=80
NAME=scarlett-school
IMAGE=scarlett-school

all: sync
	docker build -t scarlett-school .
	make down
	docker run -d --name $(NAME) -p $(PORT):80 $(IMAGE)

down:
	docker rm -f $(NAME) || :

test:
	make PORT=8000 all

sync:
	git pull --rebase
	git submodule init
	git submodule update
