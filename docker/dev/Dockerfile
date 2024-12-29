# Base image for node.js
FROM node:20

# Set the working directory
WORKDIR /app

# Install dependencies for the project
COPY package.json yarn.lock ./

# Install all dependencies for this monorepo (both frontend and backend)
RUN yarn install --frozen-lockfile

# Copy the application code
COPY . .

# Expose port for backend and frontend
EXPOSE 5000
EXPOSE 5173

# Start development servers
CMD ["yarn", "start"]
