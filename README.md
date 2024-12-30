# Hamid Template

A monorepo project using Yarn Workspaces, Docker, and Prisma with Neon for full-stack development (frontend & backend).

## Overview
- This setup utilizes Yarn Workspaces to manage a monorepo with separate packages for frontend, backend. 
- Docker is used for containerization, ensuring consistent development.

## Key Features
- Yarn Workspaces enables a single node_modules folder for all dependencies.
- Separate packages for frontend, backend code promote modularity and reusability.

## Benefits
- Simplified dependency management with Yarn Workspaces.
- Consistent environments across development using Docker avoiding run of my machine issue.
- Improved modularity and reusability with separate packages for frontend, backend.

## Why this setup
- I am learning docker container
- I want to host it as a single repo.
- I want to learn postgresql(neon) and deployment on vercel

## Projects Structure

```
root/
├── node_modules/                 # Shared dependencies (via Yarn workspace)
├── packages/                     # package all the directories
│   ├── backend/                  # Express server (3000)
│   |   ├── prisma/               # Prisma setting up PostgreSQL (Neon)
│   |   ├── src/                  # All backend files (Typescript)
│   |   |   ├── controllers/      # Controllers
│   |   |   ├── public/           # Public folder for vite build files
│   |   |   ├── routes/           # Routes
│   |   |   ├── index.tsx         # Server starter file
│   |   ├── package.json          # @scope/backend
│   |   ├── tsconfig.json         # typescript sconfiguration file
│   ├── frontend/                 # Vite-React (5173)
│   |   ├── node_modules/         # Temporarily created when running vite
│   |   ├── public/               # Easily accessible media folder
│   |   ├── src/                  # All source files of frontend
│   |   |   ├── api/              # APIs
│   |   |   ├── components/       # Componenets
│   |   |   ├── context/          # Context
│   |   |   ├── pages/            # Pages
│   |   |   ├── routes/           # React-Routes
│   |   |   ├── styles/           # Styling files
│   |   |   ├── utils/            # Reusable functions
│   |   |   ├── main.tsx          # Server starter file
│   |   |   ├── vite-env.d.ts     # Type reference file
│   |   ├── index.html            # @scope/frontend
│   |   ├── package.json          # @scope/frontend
│   |   ├── tsconfig.json         # typescript sconfiguration file
│   |   ├── postcss.config.js     # postcss sconfiguration file
│   |   ├── tailwind.config.js    # Tailwind sconfiguration file
│   |   ├── vite.config.js        # vite configuration file
│── .dockerignore                  # Files to exclude from Docker builds
├── .env                          # All env variables file
├── .env.example                  # All env variables example file
├── .gitignore                    # ignore to exclude from git
├── docker-compose.yml            # Docker-compose configuration
├── Dockerfile                    # Dockerfile
├── yarn.lock                     # Yarn lock file for dependency management
├── package.json                  # Root package.json for monorepo
├── vercel.json                   # configuration for vercel deployment
├── README.md                     # Provide details of repo

```

---

##  Prerequisites

### 1. Node.js (>= 16.0.0)
```
winget install OpenJS.NodeJS
node -v
```

### 2. Yarn
```
npm install -g yarn
yarn -v
```

### 3. Docker
```
winget install Docker.DockerDesktop
docker -v 
```
It may not pass in the first try so...

### 4. Docker Setup

- Turn on virtualization in BIOS
- Enable Hyper-V and Containers in windows
```
dism.exe /online /enable-feature /featurename:Microsoft-Hyper-V -All /featurename:Containers
```
- Enable WSL2
```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
- Set WSL as default
```
wsl --set-default-version 2
```

- Restart PC
- Docker -v

### 5. Install Image(commonly ubuntu)

- Pull a Docker image (e.g., Ubuntu):
```
docker pull ubuntu
```

- Run the Docker image to test:
```
docker run -it ubuntu
```

### 6. WSL2 + DOCKER

- Install the Docker WSL2 backend:
```
sudo apt update
sudo apt install docker.io
```
- Configure Docker to use the WSL2 backend:
```
docker context create wsl
docker context use wsl
```

### Alternatively

```
cd /mnt/path/to/project/hamid-template
docker-compose up
```

### UPDATING

After installing first and then want to update the containers with changes
- Stop the containers: Run docker-compose stop to stop the running containers.
- Rebuild the images: Run docker-compose build to rebuild the images with your updated code and configuration.
- Restart the containers: Run docker-compose up again to restart the containers with the updated images.

### KEEP IN MIND

Do this if the docker is not running.

- Lauch WSL from start menu
- Lauch Ubuntu from start menu
- Launch Docker from start menu


## Template Installation

### Step 1: Clone the repository
Clone this repository to your local machine:
```
git clone https://github.com/Hamid6426/hamid-template
cd hamid-template
```

### Step 2: Install dependencies
Run Yarn to install all dependencies for the monorepo:
```
yarn install
```

### Step 3: Set up environment variables
You will need to configure environment variables in the global .env.

### Step 4: Running Docker
Use the following Docker Compose command to start the development containers:
```
docker compose up
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
- To build the frontend code which will also move it to the public directory.
- After frontend, we need to build the backend code which compile ts to js in the dist folder
```
build:frontend
build:backend
```

### Step 7: Database Setup (Prisma)

1. Init: Run the prisma
```
yarn db:init
```

2. Migrations: Run Prisma migrations to set up your database schema.
```
yarn db:migrate
```

3. Seed Database (if necessary, seeding actually mean adding dummy data):
```
yarn db:seed
```

## Testing

Nothing is added at the moment so...
Add your tests (unit, integration, etc.) and run them with:
```
yarn test
```
For more advanced configurations, you can integrate with CI/CD pipelines.

---

## Hosting on Vercel

Vercel is a platform for hosting web applications, and it supports Docker containers. However, Vercel has some specific requirements for Docker containers:

- The container must expose port 80 (HTTP) or 443 (HTTPS).
- The container must be built from a public Docker Hub repository or a private repository with Vercel's Docker Hub integration.

To host your Docker container on Vercel, follow these steps:

### Step 1: Push the Docker image to Docker Hub
- Create a Docker Hub account, create a new repository, and push your Docker image to it:
```
docker tag hamid-template <your-docker-hub-username>/hamid-template
docker push <your-docker-hub-username>/hamid-template
```

### Step 2: Create a new Vercel project
- Create a new Vercel project and link it to your Docker Hub repository.

### Step 3: Configure the Vercel project
- Configure the Vercel project to use the Docker container:
- Set the "Build and Development Settings" to "Docker".
- Set the "Docker Image" to your Docker Hub repository.

### Step 4: Deploy the Vercel project
- Deploy the Vercel project to production.
- That's it! Your Docker container should now be hosted on Vercel.

## Package.json view

{
  "name": "hamid-template",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "type": "module",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "start:frontend": "yarn workspace @scope/frontend dev",
    "start:backend": "yarn workspace @scope/backend dev",
    "build:frontend": "yarn workspace @scope/frontend build",
    "build:backend": "yarn workspace @scope/backend build",
    "db:init": "yarn workspace @scope/backend db:init",
    "db:migrate": "yarn workspace @scope/backend db:migrate",
    "db:seed": "yarn workspace @scope/backend db:seed",
    "start": "concurrently \"yarn workspace @scope/backend dev\" \"yarn workspace @scope/frontend dev\""
  },
  "dependencies": {
    "@neondatabase/serverless": "^0.10.4",
    "@prisma/adapter-neon": "^6.1.0",
    "@prisma/client": "^6.1.0",
    # Check package.json for full list
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.0",
    # Check package.json for full list
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
