# Use an official Node.js runtime as a parent image
FROM node:21

# Set the working directory
WORKDIR /app

# Set environment variable
ENV MONGO_HOST 34.130.143.13
ENV MONGO_PORT 27017
ENV DB_NAME ece9016-db
ENV MONGO_COLLECTION mycollection  # Set your desired default collection name
ENV WEB_SERVICE_PORT  80

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy the local source code to the container
COPY fetch.js ./


# Expose the specified port
EXPOSE ${WEB_SERVICE_PORT}

# Command to run your application
CMD ["node", "fetch.js"]