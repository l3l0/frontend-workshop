SHELL := /bin/bash
EXEC_COMMAND ?= docker-compose exec application
RUN_COMMAND ?= docker-compose run application

help: ## show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
start:
	docker-compose up -d
stop:
	docker-compose down
bash:
	${EXEC_COMMAND} bash
run_server:
	${RUN_COMMAND} npm run start
