# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN yarn install

# Copy the application code to the working directory
COPY . .

# Expose the port the application will use
EXPOSE 3000

# Run the command to start the development server
CMD ["yarn", "start"]