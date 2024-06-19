# 🖥️️ DevOps Self-Service webapp

## Setup

```bash
git clone git@github.com:skydropx/devops-webapp.git
cd devops-webapp

npm i # This also sets up git hooks

cp .env.example .env
cp client/.env.example client/.env
cp server/.env.example server/.env
```

## Database

```bash
docker-compose up -d postgres
```

## Migrations

```bash
# Create
npm run migration:create "add users table"

# Status
npm run migration:status

# Up a migration
npm run migration:up

# Down a migration
npm run migration:down
```

## Backend

```bash
npm run back
```

## Frontend

```bash
npm run front
```
