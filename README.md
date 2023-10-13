# Blackhole

Versatile HTTP server for penetration testing.

## Features

- Logs all GET/POST requests to `/`
- Saves uploaded files in `file` parameter to `files/` directory

## How to Use

You can run the server directly using the following commands

```bash
npm ci # Install all dependencies
npm start # Starts the server, binds to localhost
HOST="0.0.0.0" npm start # or you can use HOST to specify the bind host
```
