# Recipe Sharing App (Microservices)

A microservices-based recipe sharing application built with Node.js and Express.

## Architecture

- **API Gateway**: Routes requests to appropriate services (Port 3000)
- **User Service**: Handles user registration and login (Port 3001)
- **Recipe Service**: Manages recipes (Port 3002)
- **Review Service**: Handles reviews and ratings (Port 3003)
- **Notification Service**: Sends notifications (Port 3004)
- **Frontend**: Simple HTML interface

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository
2. Install dependencies for each service:
   ```
   cd api-gateway && npm install
   cd ../user-service && npm install
   cd ../recipe-service && npm install
   cd ../review-service && npm install
   cd ../notification-service && npm install
   ```

## Running the Application

1. Start MongoDB
2. Start each service in separate terminals:
   ```
   cd api-gateway && npm start
   cd user-service && npm start
   cd recipe-service && npm start
   cd review-service && npm start
   cd notification-service && npm start
   ```
3. Open `frontend/index.html` in a browser

## API Endpoints

- POST /api/users/register - Register a user
- POST /api/users/login - Login
- POST /api/recipes - Add recipe
- GET /api/recipes - Get all recipes
- DELETE /api/recipes/:id - Delete recipe
- POST /api/reviews - Add review
- GET /api/reviews/:recipeId - Get reviews for a recipe