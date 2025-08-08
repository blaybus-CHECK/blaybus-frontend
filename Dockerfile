FROM nginx
COPY dist/ /usr/share/nginx/blaybus
COPY nginx.conf /etc/nginx/conf.d/default.conf