#!/bin/bash

timeout 120 yarn build
if [ $? = 124 ] ; then
    yarn build
else
    exit 0
fi

exit 0
