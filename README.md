# Amazon Clone

This is a full-stack Amazon clone application built with Spring Boot (Java) for the backend and React for the frontend.

## Features
- User registration and login with JWT authentication
- Product listing, details, creation, and deletion (admin)
- Shopping cart: add, view, and remove items
- In-memory H2 database for quick development

## Tech Stack
- Backend: Spring Boot, Spring Data JPA, Spring Security, JWT, H2 Database
- Frontend: React, React Router, Axios

## Setup

### Backend
1. Navigate to the `backend` directory.
2. Build and run with Maven:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. The backend API will be available at `http://localhost:8080/api`.
4. H2 console is available at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:amazondb`).

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. The frontend will be available at `http://localhost:3000`.

## Production
- For production, switch to a persistent database like MySQL or PostgreSQL and update `application.properties`.
- Use environment variables to manage JWT secrets and other sensitive configurations.
- Build the React app (`npm run build`) and serve static files with a web server (e.g., Nginx) or integrate into Spring Boot.

## License
MIT
