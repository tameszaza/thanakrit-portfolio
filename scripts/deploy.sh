#!/usr/bin/env bash
# Run on the Ubuntu server from the portfolio checkout after reviewing out/.
set -euo pipefail
cd "$(dirname "$0")/.."

container=thanakrit-portfolio
local_port=8787
https_port=8844
release="$(date -u +%Y%m%dT%H%M%SZ)"
test -s out/index.html
test -s out/404.html
mkdir -p deploy/releases
mkdir "deploy/releases/$release"
cp -a out/. "deploy/releases/$release/"
ln -s "releases/$release" "deploy/.current-$release"
mv -Tf "deploy/.current-$release" deploy/current

if ! docker container inspect "$container" >/dev/null 2>&1; then
  docker run --detach --name "$container" --restart unless-stopped \
    --memory 96m --cpus 0.5 --security-opt no-new-privileges \
    --publish "127.0.0.1:$local_port:80" \
    --mount "type=bind,src=$PWD/deploy,dst=/portfolio,readonly" \
    httpd:2.4 httpd-foreground -f /portfolio/httpd.conf
fi

curl --fail --silent --show-error --retry 3 --retry-connrefused \
  --output /dev/null "http://127.0.0.1:$local_port/"
if [[ "${PORTFOLIO_TAILNET:-1}" == 1 ]]; then
  tailscale serve --bg --https "$https_port" "http://127.0.0.1:$local_port"
fi
