Hello, Node.

Use Dinghy! (https://github.com/codekitchen/dinghy)

Assuming from this point forward that dinghy is up and running.

Base Image is here: https://registry.hub.docker.com/_/node/

Right now, this is just a hello world webapp in a docker container.

To build the image:

```bash
$> docker build -t hello-node
```

Once the image exists, startup the server with:

```bash
$> docker run --publish 6061:8080 --rm --name test-node hello-node
```

Find your address with

```bash
$> dinghy ip
```

You should be able to see json output containing "hello world" returned in the browser by
visiting "http://dinghy-ip:6061".

You should also be able to sum some numbers by running something like this:

```bash
$> curl -i -H 'Content-Type: application/json' -d '{"numbers": [1,2,3,4,5,6,7,8,9,10]}' http://192.168.42.10:6061/sum
```

where that IP address is your dinghy IP.
