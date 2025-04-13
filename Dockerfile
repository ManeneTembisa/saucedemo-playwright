# Use official Playwright base image with all dependencies installed
FROM mcr.microsoft.com/playwright:v1.51.0-jammy

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Default command to run tests
CMD ["npm", "run", "test"]
