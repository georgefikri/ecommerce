# Use the official Node.js 21 image as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./

# Install the project dependencies
RUN npm install
RUN npm install -g nx

# Expose the default port for the Nx project
EXPOSE 4200

# Start the development server with polling enabled
CMD ["nx", "serve", "app", "--watch"]
