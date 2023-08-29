# YelpCamp

Welcome to YelpCamp! This repository contains the code for a web application called YelpCamp, a platform for users to discover and share their favorite campgrounds. The application allows users to sign up, add, edit, and review campgrounds. It also provides various features to make camping planning easier and more enjoyable. Visit it at: https://vibrant-baguette-87282-69333552e9e2.herokuapp.com/

This project was made as part of the Web Developer Bootcamp 2023 in Udemy. It's how I learnt the basics of web development, especially backend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- User authentication: Users can sign up, log in, and log out securely to access personalised features.
- Campground management: Users can add new campgrounds with details such as name, image, description, and location.
- Campground reviews: Registered users can leave reviews and ratings for campgrounds.
- Interactive map: The application provides an interactive map with markers for each campground location.
- Flash messages: The app displays informative messages for various user actions, enhancing user experience.
- Responsive design: The application is responsive and adapts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.

## Installation

Follow these steps to set up the YelpCamp application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/amavicpos/YelpCamp.git
   cd YelpCamp
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory and provide the following environment variables: CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET, MAPBOX_TOKEN, DB_URL, SECRET.

4. Run the application:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to access YelpCamp.

## Usage

YelpCamp provides a user-friendly interface for users to explore and contribute to campgrounds. Here are some common actions users can perform:

- **Signup/Login**: Users need to sign up or log in to access personalised features such as adding new campgrounds or leaving reviews.
- **View Campgrounds**: Users can browse through a list of campgrounds, view individual campground details, and read reviews from other users.
- **Add Campgrounds**: Logged-in users can add new campgrounds by providing details like name, description, image, and location.
- **Edit Campgrounds**: Users who created a campground can edit its details.
- **Leave Reviews**: Logged-in users can leave reviews and ratings for campgrounds, providing valuable insights for other users.
- **Interactive Map**: The map feature displays all campgrounds with clickable markers, making it easier to locate and plan trips.

## Technologies Used

YelpCamp utilises the following technologies:

- **Node.js**: The application is built on Node.js, providing a robust backend environment.
- **Express.js**: Express.js is used to create a fast and minimalist web application framework for Node.js.
- **MongoDB**: MongoDB is used as the database to store campground and user data.
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library used to interact with MongoDB.
- **Passport.js**: Passport.js provides user authentication middleware for Node.js.
- **Mapbox**: Mapbox is used to create the interactive map with campground markers.

---

Thank you for exploring YelpCamp! If you have any questions or feedback, please feel free to contact me or raise an issue in the repository. Happy camping! 🏕️
