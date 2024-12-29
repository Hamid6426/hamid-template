# Base image for node.js
FROM node:20

# Set the working directory
WORKDIR /app

# Install dependencies for the project
COPY package.json yarn.lock ./

# Production dependencies only
RUN yarn install --production --frozen-lockfile

# Copy the application code
COPY . .

# Build frontend for production 
RUN yarn workspace @scope/frontend build

# Expose ports for backend and frontend
EXPOSE 443
EXPOSE 80

# Start backend server
CMD ["yarn", "workspace", "@scope/backend", "start"]
