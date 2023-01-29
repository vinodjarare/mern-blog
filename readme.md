## Eqaim Blog

### Tech Stack

- MongoDB
- Express
- React
- Node.js

### Requirements

- Node.js v12.x or higher
- MongoDB v4.x or higher

### Running the Project

1. Clone the repository
   git clone https://github.com/vinodjarare/mern-blog.git

2. Navigate to the project directory
3. Install the dependencies
   npm install

4. Start the MongoDB server
5. Start the backend server
   npm start
6. Start the frontend development server
   npm run dev

7. The application should now be running on http://localhost:5173

## Data Model

The blog post data model includes the following fields:

- `title` : String
- `body` : String
- `createdAt` : Date

## RESTful APIs

### Blogpost

- `GET /api/blogs` : Retrieve all the blog posts
- `GET /api/blogs/:id` : Retrieve a specific blog post by id
- `POST /api/blogs` : Create a new blog post

## Screens

- Home Screen: A user will be able to see all existing blog post in the form of cards with its title and summary in reverse chronological order.
- Blogpost Screen: User clicks on the card, will be redirected to the Blogpost screen.
- Publish Blog Screen: User clicks on the Add Blog Icon (At the bottom right of the Home screen) redirects to the Publish Blog Screen. User writes the Title in the title section and fills the body with appropriate content (Images could be added). After finishing the content, user clicks on Publish icon and the blog post would be published.

## Note

- Make sure to replace the mongodb connection string in .env file with your local mongodb setup.
- If you are facing any issues while running the project, please contact me.
