# Bicycle Store Management API

A robust API for managing a bicycle store, built with **Express.js**, **TypeScript**, and **MongoDB** using **Mongoose**. The API supports operations for managing products (bicycles) and orders, ensuring data integrity with schema validation and providing user-friendly responses.

---

## Features

### Products (Bicycles)
- **Create** a new bicycle with required details.
- **Retrieve** all bicycles with optional search functionality (name, brand, or type).
- **Retrieve** a specific bicycle by its ID.
- **Update** an existing bicycle's details.
- **Delete** a bicycle from the inventory.

### Orders
- **Place an order** for a bicycle and automatically manage inventory.
- **Validate inventory** to prevent orders when stock is insufficient.
- **Calculate total revenue** from all orders using MongoDB aggregation.

---

## Technologies Used

- **Backend Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Validation**: Mongoose schema validation
- **Error Handling**: Custom error responses with stack traces

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hellomaruf/Bi-Cycle-store.git
   cd bicycle-store-api 