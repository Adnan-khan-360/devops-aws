FROM node:18-bullseye-slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN rm -rf node_modules

RUN yarn install --production=false

# Copy the rest of the application code
COPY . .

# Build the Strapi application
RUN yarn build

# Stage 2: Production
FROM node:18-bullseye-slim

# Set the working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose the port on which the Strapi server will run
EXPOSE 1337

# Start the Strapi server in production mode
CMD ["yarn", "start"]
