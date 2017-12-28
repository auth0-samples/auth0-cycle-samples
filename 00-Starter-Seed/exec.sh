#!/usr/bin/env bash
docker build -t auth0-cycle-00-starter-seed .
docker run -p 3000:3000 -it auth0-cycle-00-starter-seed
