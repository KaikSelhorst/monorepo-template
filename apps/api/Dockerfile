# I use this Docker setup in this way because when I tried to install dependencies
# using bun install, the process failed to resolve external libraries located in the monorepo packages.
# This happens because the Dockerfile is executed inside the project directory rather
# than at the root of the monorepo, which prevents Bun from properly accessing shared dependencies.

# To work around this issue, it’s necessary to first build the project using the build:alpine
# command at the monorepo root. Only after that can the Dockerfile be executed correctly within
# the project context.

FROM oven/bun:1-alpine
WORKDIR /app
COPY api .
RUN chmod +x api
EXPOSE 3000
CMD ["./api"]
