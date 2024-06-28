# pull official base image
FROM python:3.12-slim

# set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# set working directory
WORKDIR /backend

# install dependencies
RUN pip install --upgrade pip
COPY requirements.txt requirements.txt

RUN apt-get update && apt-get install -y \
  libpq-dev \
  postgresql-client \
  && apt-get clean

RUN pip install --no-cache-dir -r requirements.txt

# copy entrypoint
COPY ./entrypoint.sh .

# copy project
COPY . .

# run entrypoint sh
ENTRYPOINT [ "/backend/entrypoint.sh" ]