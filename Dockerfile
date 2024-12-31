FROM denoland/deno:2.1.1

ARG SIMULON_VERSION

WORKDIR /app

ADD . /app

RUN deno install --entrypoint apps/api/main.ts

ENV SIMULON_VERSION=${SIMULON_VERSION}

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "apps/api/main.ts"]
