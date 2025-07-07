# 1. Use official Playwright base image (includes Chromium, Firefox, WebKit)
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy your local files into the container
COPY . .

# 4. Install project dependencies
RUN npm install

# 5. Run both Cucumber (UI tests) and Playwright (API tests) in headless mode
CMD ["sh", "-c", "npx cucumber-js --require-module ts-node/register --require steps/**/*.ts && npx playwright test --reporter=html"]
