# NGO Backend Server

## Setup Instructions

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Public Endpoints
- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:id` - Get single blog by ID

### Admin Endpoints
- `POST /api/admin/login` - Admin login (username: admin, password: admin123)
- `GET /api/admin/blogs` - Get all blogs (including unpublished)
- `POST /api/admin/blogs` - Create new blog
- `PUT /api/admin/blogs/:id` - Update blog
- `DELETE /api/admin/blogs/:id` - Delete blog

## Default Admin Credentials
- Username: `admin`
- Password: `admin123`

**Note:** Change these credentials in production!
