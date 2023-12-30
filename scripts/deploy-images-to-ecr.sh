#!/bin/bash
AWS_PROFILE=jesus
AWS_ECS_URI_PREFFIX=public.ecr.aws
AWS_ECR_URI_BACK=$AWS_ECS_URI_PREFFIX/u1h6l3v5/ms-dating-match

docker tag ms-dating-match:latest $AWS_ECR_URI_BACK

aws ecr-public get-login-password --profile $AWS_PROFILE | docker login --username AWS --password-stdin $AWS_ECS_URI_PREFFIX

docker push $AWS_ECR_URI_BACK