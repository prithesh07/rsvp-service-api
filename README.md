# RSVP Service API

## Overview
The RSVP Service API is a simple Express.js application that allows users to manage RSVP statuses for a list of players. It supports adding or updating a player's RSVP status, retrieving a list of confirmed attendees, and counting total, confirmed, and declined responses.

## Features
- Add or update a player's RSVP status.
- Retrieve a list of confirmed attendees.
- Count total, confirmed, and declined responses.
- Swagger documentation for easy API exploration.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/prithesh07/rsvp-service-api
   ```
2. Navigate to the project directory:
   ```
   cd rsvp-service-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the server, run:
```
npm start
```
The API will be available at `http://localhost:3000`.

### API Documentation
The API documentation is available at `http://localhost:3000/api-docs`. This documentation is generated using Swagger and provides details on the available endpoints, request parameters, and responses.

## Endpoints
- `POST /rsvp`: Add or update a player's RSVP status.
- `GET /rsvp/confirmed`: Retrieve a list of confirmed attendees.
- `GET /rsvp/count`: Count total, confirmed, and declined responses.
