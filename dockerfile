# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Set environment variable
ENV MONGO_HOST mongodb_host
ENV MONGO_PORT 27017
ENV DB_NAME your_database_name
ENV MONGO_COLLECTION mycollection  # Set your desired default collection name
ENV WEB_SERVICE_PORT 8080

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# check for registry access
RUN curl -v https://registry.npmjs.com/

# Install app dependencies
RUN npm install

# Copy the local source code to the container
COPY . .

# Expose the specified port
EXPOSE ${WEB_SERVICE_PORT}

# Command to run your application
CMD ["node", "app.js"]
