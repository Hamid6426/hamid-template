# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package*.json files
COPY package*.json ./

# Install the dependencies
RUN yarn install

# Copy the application code
COPY . .

# Build the frontend
RUN yarn build:frontend

# Build the frontend
RUN yarn build:backend

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["yarn", "workspace", "@scope/backend", "dev"]