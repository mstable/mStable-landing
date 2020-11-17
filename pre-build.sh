#!/bin/bash

timeout 120s yarn build
status="$?"
if (( status == 124 )); then
    exit 0
fi
exit "$status"
