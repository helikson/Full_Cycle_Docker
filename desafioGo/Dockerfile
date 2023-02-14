FROM golang:1.7.3 AS golang
WORKDIR /go/src/app
COPY index.go .
RUN CGO_ENABLED=0 \
    GOOS=linux \
    go build -ldflags="-s -w" -a -installsuffix cgo -o app .

FROM busybox:stable-uclibc
WORKDIR /root/
COPY --from=golang /go/src/app/app .
CMD [ "./app" ]