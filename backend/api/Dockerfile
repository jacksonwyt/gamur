# Stage 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Install Prisma CLI globally (needed for generation step if not dev dependency)
# RUN npm install -g prisma

# Copy package files and prisma schema
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (including devDependencies needed for build and prisma generate)
RUN npm install

# Copy the rest of the application source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package files and prisma schema (needed for runtime if schema path is referenced)
COPY package*.json ./
COPY prisma ./prisma/

# Install only production dependencies
RUN npm install --only=production

# Copy the generated Prisma client and build output from the builder stage
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/dist ./dist

# Expose the application port (default NestJS port is 3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"] 