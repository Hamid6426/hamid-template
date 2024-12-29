# Hamid Template

A monorepo project using Yarn Workspaces, Docker, and Prisma with Neon for full-stack development (frontend, backend, database, and shared utilities).

## Project Structure

```
├── docker/                       # Docker-related files
│   ├── .dockerignore             # Files to exclude from Docker builds
│   ├── .env.dev                  # Environment variables for development
│   ├── .env.prod                 # Environment variables for production
│   ├── .env.staging              # Environment variables for staging
│   ├── compose.yml               # Main docker-compose configuration
│   ├── dev/                      # Development environment configurations
│   │   ├── docker-compose.dev.yml
│   │   └── Dockerfile
│   ├── prod/                     # Production environment configurations
│   │   ├── docker-compose.prod.yml
│   │   └── Dockerfile
│   └── staging/                  # Staging environment configurations
│       ├── docker-compose.staging.yml
│       └── Dockerfile
├── packages/                     # Code for frontend, backend, shared, and database
│   ├── frontend/                 # React app
│   ├── backend/                  # Express server
│   ├── database/                 # Prisma setup
│   └── shared/                   # Shared utilities and types
├── yarn.lock                     # Yarn lock file for dependency management
├── package.json                  # Root package.json for monorepo
└── README.md                     # This file
```

##  Prerequisites

- Node.js (>= 20.0.0)
- Yarn (for managing packages and running scripts)
- Docker (for containerization and consistent environments)
- Docker Compose (to manage multi-container Docker applications)

## Installation

### Step 1: Clone the repository
Clone this repository to your local machine:
```
git clone https://github.com/Hamid6426/hamid-template
cd cd hamid-template
```

### Step 2: Install dependencies
Run Yarn to install all dependencies for the monorepo:
```
yarn install
```

### Step 3: Set up environment variables
You will need to configure environment variables for each environment (development, staging, production).

1. Development: Create .env.dev file in the root directory, or copy the template from .env.dev.sample.
#### .env.dev
```
DATABASE_URL="your-development-database-url"
PORT=3000
```
2. Staging: Similarly, create .env.staging for staging setup.
3. Production: Create .env.prod for production.

### Step 4: Docker Setup

#### Docker Containers
The docker/ directory contains environment-specific Docker configurations for development, staging, and production.

1. Development: Use the following Docker Compose command to start the development containers:
```
docker-compose -f docker/compose.yml -f docker/dev/docker-compose.dev.yml up
```
This will use docker-compose.dev.yml to run the development environment.

2. Staging: To start the staging environment:
```
docker-compose -f docker/compose.yml -f docker/staging/docker-compose.staging.yml up
```

3. Production: For the production setup:
```
docker-compose -f docker/compose.yml -f docker/prod/docker-compose.prod.yml up
```

### Step 5: Running the Project
You can start the frontend and backend servers concurrently using Yarn:
```
yarn start
```
This command will start both the frontend and backend development servers.

Alternatively, you can start each server separately:

#### Frontend:
```
yarn start:frontend
```

#### Backend:
```
yarn start:backend
```

### Step 6: Build the Frontend
To build the frontend code and copy it to the public directory, use:
```
yarn build
```

### Step 7: Database Setup (Prisma)

1. Migrations: Run Prisma migrations to set up your database schema.
```
yarn workspace @scope/database prisma migrate dev
```
2. Seed Database (if necessary):
```
yarn workspace @scope/database prisma db seed
```

## Docker Compose Configuration

The `docker-compose.yml` file serves as the base file, and each environment-specific configuration (`dev`, `staging`, `prod`) extends the base one. This modular setup allows for different services, databases, or configurations per environment.

## Scripts
Here are some useful Yarn scripts to run during development:

- Start both frontend and backend:
```
yarn start
```

- Start frontend:
```
yarn start:frontend
```

- Start backend:
```
yarn start:backend
```

- Build the frontend:
```
yarn build:frontend
```

- Copy the built frontend code:
```
yarn copy:frontend
```

## Testing
Add your tests (unit, integration, etc.) and run them with:
```
yarn test
```
For more advanced configurations, you can integrate with CI/CD pipelines.

## Deployment

1. Vercel:

To deploy the frontend (React) app on Vercel, follow the Vercel deployment documentation for configuring a monorepo setup.

2. Docker:

You can deploy the Docker containers to your preferred cloud service (AWS, Azure, GCP, etc.) using the appropriate Docker Compose or Docker CLI commands.

## The Package.json View

{
  "name": "hamid-template",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "start:frontend": "yarn workspace @scope/frontend dev",
    "start:backend": "yarn workspace @scope/backend dev",
    "build:frontend": "yarn workspace @scope/frontend build",
    "copy:frontend": "cp -r packages/frontend/dist/* public/",
    "build": "yarn build:frontend && yarn copy:frontend",
    "start": "concurrently \"yarn workspace @scope/backend dev\" \"yarn workspace @scope/frontend dev\""
  },
  "dependencies": {
    "@neondatabase/serverless": "^0.10.4",
    "@prisma/adapter-neon": "^6.1.0",
    "express": "^4.21.2",
    "pg": "^8.13.1",
    "tailwindcss": "^3.4.17",
    /* OTHER PACKAGES */
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/react": "^19.0.2",   
    "concurrently": "^7.0.0",
    /* OTHER PACKAGES */
  },
  "engines": {
    "node": ">=20.0.0"
  }
}
