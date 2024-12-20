FROM denoland/deno:2.1.1

WORKDIR /app

ADD . /app

RUN deno install --entrypoint apps/api/main.ts

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "apps/api/main.ts"]
