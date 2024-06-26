# Variables
template := $(shell find ./_scaffolds | grep .md)
usage := "Usage:\tctl\tpush/fetch/stat/add/new/open <fname_reg>/find <fname_reg>/lines"
greeting := "Welcome back to blog, write something?"

.PHONY: push pull stat add new open find lines words recent deploy image_url_proc new_post line_count knote open recent welcome

# Functions
push:
	git add . && git commit -m "Vault backup $$(date)" && git push

pull:
	git pull --rebase && echo "pull completed"

stat:
	git status

add:
	git add . && git status

new:
	new_post "$(filter-out $@,$(MAKECMDGOALS))" && vim "_inbox/$(filter-out $@,$(MAKECMDGOALS)).md"

open:
	open "$(filter-out $@,$(MAKECMDGOALS))"

find:
	find . -type f -not -path './git/*' -name $(filter-out $@,$(MAKECMDGOALS))

lines:
	line_count

words:
	echo "You have wrote $$(find _* -type f -name *.md | xargs cat 2>/dev/null | wc -m) words"

recent:
	recent

deploy:
	cd .. && \
	rm -rf deploy && cp -r blog deploy && \
	cd deploy && git checkout deploy && \
	cp -r blog deploy/source && \
	cd deploy && pnpm i && pnpm run server

image_url_proc:
	find . -type f -name "*.md" -exec sed -i 's/\!\[\[\(.*\)\/\(.*\)\]\]/\!\[\2\]\(\/img\/\2\)/gi' {} \;

new_post:
	content=$$(cat $(template) | sed -e "s/{{title}}/$1/" -e "s/{{date}} {{time}}/$$(date '+%Y-%m-%d %H:%M:%S')/g"); \
	fname="_inbox/$1.md"; \
	if [ -e $$fname ]; then \
		echo "File already exists"; \
	else \
		echo -e "$$content" > "$$fname"; \
	fi

line_count:
	echo "You have wrote $$(find _* -type f -name *.md | xargs cat 2>/dev/null | wc -l) lines in total!"

knote:
	datetime=$$(date '+%Y-%m-%d-%H:%M:%S'); \
	echo -e $$(sed -e "s/{{title}}/$$datetime/" -e "s/{{date}} {{time}}/$$(date '+%Y-%m-%d %H:%M:%S')/" $(template)) > "_inbox/$$datetime.md"; \
	vim "_inbox/$$datetime.md"

open:
	vim $$(find . -type f -not -path './git/*' -name $(filter-out $@,$(MAKECMDGOALS)))

recent:
	count=$(word 1,$(MAKECMDGOALS)); \
	order=$(word 2,$(MAKECMDGOALS)); \
	find . -type f -name "*.md" -print0 | \
	xargs -0 stat -c "%w %n" | \
	sort -n "$$order" | \
	cut -d' ' -f4 | \
	head -n "$$count"

welcome:
	echo -e $(greeting)
	recent 5


