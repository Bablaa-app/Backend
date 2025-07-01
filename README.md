# Swift Call - Backend System

## Purpose

The Swift Call Backend is a real-time communication platform that enables users to make peer-to-peer calls with features like call waiting, user authentication, and admin management. It's designed to be a scalable solution for handling multiple concurrent calls with minimal latency.

## Directory Structure

```
backend/
├── src/
│   ├── controllers/    # Business logic for handling requests
│   ├── db/             # Database connection setup
│   ├── middleware/     # Authentication and validation
│   ├── models/         # Database schemas
│   ├── routes/         # API route definitions
│   ├── seeder/         # Database seeding utilities
│   └── utils/          # Helper functions and utilities
├── public/             # Static files
├── index.js            # Application entry point
└── package.json        # Project dependencies and scripts
```

## Architecture Overview

- **Backend Framework**: Node.js with Express.js
- **Real-time Communication**: Socket.IO for WebSocket connections
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **API Architecture**: RESTful API design with proper status codes

### Key Components

1. **User Management**

   - Registration and authentication
   - Role-based access control
   - User profiles and permissions

2. **Call Management**

   - Real-time call handling
   - Call queuing system
   - Call duration tracking

3. **Admin Dashboard**
   - User management
   - System monitoring
   - Analytics and reporting

## Technologies and Frameworks

- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Real-time**: Socket.IO
- **Authentication**: JWT, bcryptjs
- **File Upload**: Multer
- **Validation**: Express Validator
- **Environment Management**: dotenv

## Key Workflows

### User Authentication

1. User registers with email/password
2. System hashes password and creates user record
3. On login, JWT token is issued
4. Token is verified on protected routes

### Call Flow

1. User initiates a call
2. System checks for available peers
3. If peer available, establishes connection
4. If not, adds to waiting queue
5. Tracks call duration and stores call logs

### Admin Operations

1. Manage users and permissions
2. View system metrics
3. Monitor active calls
4. Generate reports

## Configuration

The application uses environment variables for configuration. A sample `.env` file should include:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
API_URL=your_api_base_url
```

## Setup Instructions

1. **Prerequisites**

   - Node.js (v14+)
   - MongoDB (v4.4+)
   - npm or yarn

2. **Installation**

   ```bash
   # Install dependencies
   npm install

   # Set up environment variables
   cp .env.example .env
   # Edit .env with your configuration

   # Start development server
   npm run dev
   ```

3. **Database Setup**

   - Ensure MongoDB is running
   - The application will automatically create necessary collections

4. **Seeding Data (Optional)**
   ```bash
   npm run seeder
   ```

## API Endpoints

### Authentication

- `POST /api/user/signup` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/forgot-password` - Request password reset
- `POST /api/user/reset-password` - Reset password

### User Management

- `GET /api/user` - Get all users (Admin only)
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/update` - Update user profile
- `DELETE /api/user/:id` - Delete user (Admin only)

### Call Management

- `POST /api/call/add-call` - Log call details
- `GET /api/call/history` - Get call history

### Admin

- Admin-specific endpoints for user and system management

## Security

- Password hashing with bcrypt
- JWT authentication
- Role-based access control
- Input validation
- CORS protection
- Rate limiting (recommended for production)

## Monitoring

- Active session tracking
- Call duration monitoring
- Error logging (implementation recommended)

## Deployment

The application includes a `Jenkinsfile` for CI/CD pipeline integration. For production deployment:

1. Set `NODE_ENV=production`
2. Configure proper logging
3. Set up monitoring
4. Enable HTTPS
5. Configure proper CORS settings

## Maintenance

- Regular database backups recommended
- Monitor server resources
- Keep dependencies updated
- Regular security audits

## Support

For support or issues, please contact the development team or open an issue in the repository.
