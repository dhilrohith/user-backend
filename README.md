# User Authentication and Authorization with JWT in Node.js

This project demonstrates user authentication and authorization using **Bearer tokens** in a **Node.js** application with **Express.js**, **Mongoose**, and **JWT**. It follows the **MVC pattern** and includes API documentation.

---

## Features

1. **User Registration**:
   - Users can register with a username, email, and password.
   - Passwords are hashed before saving to the database.
   - Returns a success message upon successful registration.

2. **User Login**:
   - Users can log in with valid credentials.
   - Generates a JWT upon successful login.
   - Returns the JWT token to the user.

3. **JWT Middleware**:
   - Verifies the JWT in the request headers.
   - Decodes the token and attaches user information to the request object.

4. **Protected Routes**:
   - Authenticated users can access protected routes using their token.
   - Retrieves user information from the token.

5. **API Documentation**:
   - Comprehensive API documentation using **Postman**.
   - Includes sample requests and responses.
## API Documentation

The API documentation, including sample requests and responses for each endpoint, is available on Postman:

[View API Documentation on Postman](<https://documenter.getpostman.com/view/39771320/2sAYBXBWUF![image](https://github.com/user-attachments/assets/a838ce8c-8698-4c85-a5c7-f2677ac6487c)
>)
