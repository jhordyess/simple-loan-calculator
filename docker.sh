#!/bin/bash
#TODO Add info messages
IMAGE_NAME="jhordyess/simloc"
PC_HOST_PORT="80-90"
docker build -t ${IMAGE_NAME} . &&
  docker run -d --rm -p ${PC_HOST_PORT}:80 ${IMAGE_NAME}