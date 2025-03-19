# Ecommerce-Follow-Along

## Overview
This is a feature-rich eCommerce application that allows users to browse, search, and purchase products. The application includes user authentication, product management, a shopping cart, order processing, and payment integration.

## Milestone 1: Project Overview
During this session, we covered the basics of setting up a project repository and initializing it with a README file. We also outlined the overall structure of our e-commerce application, including key features and the technologies we'll be using.

## Features
- *User Authentication*: Secure user registration and login using JWT.
- *Product Management*: CRUD operations for products, including categories and search functionality.
- *Shopping Cart*: Users can add, remove, and update products in their cart.
- *Order Processing*: Seamless checkout process with order history.
- *User Profile*: Users can view and update their profile and order history.

## Tech Stack
- *Frontend*: React, Redux, CSS, Vite
- *Backend*: Node.js



# E-commerce Project - Milestone 2

## Key Features

### 1. Project Folder Structure
- Organize project files into separate frontend and backend directories.
- Ensure a clear and maintainable structure for better project management.

### 2. React Frontend Setup
- Initialize a React application for building the user interface.
- Set up essential configurations and dependencies for smooth development.

### 3. Node.js Backend Setup
- Set up a simple Node.js server to prepare for API integration in future milestones.
- Configure basic routes and middleware to handle incoming requests.

### 4. Tailwind CSS Configuration
- Integrate and configure Tailwind CSS to enable modern, responsive, and utility-based styling.
- Ensure a consistent and appealing design across the application.

### 5. Login Page Development
- Create the first user interface of the e-commerce application, focusing on both functionality and styling.
- Implement form handling and validation for user login.


## Milestone 3: Project Setup for Backend

### Achievements
In this milestone, we laid the foundation for the backend of the e-commerce application. Here are the key accomplishments:
- *Backend Folder Structure:* 
  - Created a structured folder hierarchy to organize routes, controllers, models, and middlewares.
  - Added placeholder files where necessary to establish a blueprint for future development.
- *Node.js Server Setup:*
  - Initialized and configured a Node.js server using Express.
  - Configured the server to listen on a designated port for API requests.
- *Database Connection:*
  - Integrated MongoDB into the project for efficient data storage.
  - Successfully established the connection between the server and the MongoDB database.
- *Basic Error Handling:*
  - Implemented a simple yet effective error-handling mechanism to provide clear error messages and ensure smooth server operation.

### Steps Completed
1. Set up dedicated folders for backend organization:
   - controllers/ for handling business logic.
   - models/ for defining the database schema.
   - middlewares/ for utilities like authentication (to be expanded in future milestones).
2. Installed necessary dependencies (express, mongoose, etc.) and created the entry file (index.js).
3. Configured and tested the database connection using MongoDB.
4. Added basic error-handling middleware for better debugging and user feedback.


4. Added basic error-handling middleware for better debugging and user feedback.

## Milestone 4: Making Your First API and Page
## Learning Goals 🎯
- User Model: Blueprint for user data.

- User Controller: Manage user actions.

- Multer Setup: File uploads.

- Update README: Document progress.

## Key Concepts
- Model: Defines user data.

- Controller: Manages data interactions.

- File Uploads: Using Multer.

### Milestone 5: Creating the Signup Page
- Developed the frontend for the signup page using React.
- Integrated form handling with state management.
- Connected the signup form with backend API for user registration.
- Implemented input validation and error handling.
- Styled the signup form to match the overall application design.

## Milestone 6: Secure Signup Endpoint
In this milestone, we implemented the following:
- Added a backend `/signup` endpoint to securely store user data in the database.
- Used bcrypt to hash passwords before saving them to ensure data protection.
- Tested the endpoint using Postman for successful user registration.

## Milestone 7: User Login & Authentication

### Overview
In Milestone 7, we focused on secure user login. This involved validating user credentials and verifying the encrypted password stored in the database to ensure safe and secure authentication.

### Why Encrypt Passwords?
- **Protect User Data**: Keeps passwords safe even if the database is compromised.
- **Privacy**: Prevents users' passwords from being stored or transmitted in plain text.
- **Compliance**: Meets security standards like GDPR and PCI-DSS.
- **Security**: Password hashing makes it infeasible for attackers to recover the original password.

### How Login Authentication Works
1. **User Enters Credentials**:  
   The login form collects the user's email/username and password.
2. **Fetch User Data**:  
   The backend retrieves the user record based on the provided identifier.  
   - If the user is not found, an error is returned: "User does not exist."
3. **Compare Encrypted Passwords**:  
   - The entered password is hashed using the same algorithm (e.g., bcrypt).
   - The resulting hash is compared with the stored hashed password.
   - If they match, the user is authenticated; otherwise, an error is returned.

   ## Milestone 8: *product page in frontend*
- Added products page ans home page

## Milestone 9: *Created page for products upload*
-created page for products upload in frontend page.
-added form for validation.

## Milestone 10: *created schema product upload*
-created product router in backend
-created product model in backend 
-handled file upload by multer inside middleware multer