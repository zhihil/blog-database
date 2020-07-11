FROM postgres
WORKDIR /database
COPY . .
CMD ["./setup.sh"]