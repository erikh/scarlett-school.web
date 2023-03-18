PORT=80
NAME=scarlett-school
IMAGE=scarlett-school

all: down
	docker build -t scarlett-school .
	docker run -d --name $(NAME) -p $(PORT):80 $(IMAGE)

down:
	docker rm -f $(NAME)

test:
	make PORT=8000 all
