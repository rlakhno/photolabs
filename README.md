# PhotoLab Project

Welcome to PhotoLab, a web application for browsing and managing photos based on different topics!

## Description

PhotoLab is a React-based web application that allows users to view and interact with a collection of photos organized by topics. Users can click on specific topics to fetch and display relevant photos from the backend. The project also includes features like favoriting photos and viewing detailed information about each photo.

## Features

- Browse photos categorized by topics
- Click on topics to dynamically fetch and display corresponding photos
- Mark favorite photos and view a list of favorited photos
- View detailed information for each photo, including city, country, and user details

## Getting Started

To run this project locally, follow these steps:

***1. Clone the repository onto your local device:***
   ```bash
   git clone git@github.com:rlakhno/photolabs.git
  ```


***2. Install dependencies with `npm install` in each respective `/frontend` and `/backend`.***

### Frontend: Running Webpack Development Server

```sh
cd frontend
npm start
```

### Backend: Running Backend Servier

```sh
cd backend
npm start
```

### ***IMPORTANT:*** Read `backend/readme` for further setup details.

## Dependencies

###   Frontend:
- sass: 1.59.2

###   Backend:
- jest: 24.8.0
- supertest: 4.0.2
      
### proxy
      - proxy: http://localhost:8001


## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5 & CSS3 (Sass for styling)
- Node.js & Express (for backend API)
- PostgreSQL (database for storing photo data)


## Screenshots of the Final Product

- Main Page
![Main Page](https://github.com/rlakhno/photolabs/blob/main/backend/src/public/images/screenshots/main_page.png)

- Enlarged Image with Similar Images
![Enlarged Image](https://github.com/rlakhno/photolabs/blob/main/backend/src/public/images/screenshots/inlarged_picture.png)

- Liked Notification
![MLiked Notification](https://github.com/rlakhno/photolabs/blob/main/backend/src/public/images/screenshots/like_notification.png)

- View by Topic "Travel"
![Enlarged Image](https://github.com/rlakhno/photolabs/blob/main/backend/src/public/images/screenshots/pics_by_topic_id_travel.png)

- Backend API by Topic id = 3 
![Enlarged Image](https://github.com/rlakhno/photolabs/blob/main/backend/src/public/images/screenshots/backend_topic_id_3.png)


## API Endpoints
The application interacts with the following API endpoints:

- `/api/photos:` GET all photos
- `/api/topics:` GET all topics
- `/api/topics/photos/:topicId:` GET photos by topic ID


## Project Structure

```
photolab/
|--backend/
|     ├── src/
|     │   ├── db/
|     │   │   ├── schema/
|     │   │   |      ├── create.sql
|     │   │   |      ├── development.sql
|     │   │   |      └── ...
|     |   |   └── ...
|     │   ├── public/images
|     │   │   └── useApplicationData.js
|     │   ├── routes/
|     │   │   ├── photos.js
|     │   │   ├── topics.js
|     │   │   └── ...
|     │   ├── index.js  
|     │   ├── application.js
|     │   ├── environment.js
|     │   └── setupTests.js
|     ├── package.json
|     ├── README.md
|     └── ...
|
|
|--frontend/
|     ├── public/
|     ├── src/
|     │   ├── components/
|     │   │   ├── HomeRoute.jsx
|     │   │   ├── TopicListItem.jsx
|     │   │   ├── PhotoDetailsModal.jsx
|     │   │   └── ...
|     │   ├── hooks/
|     │   │   └── useApplicationData.js
|     │   ├── routes/
|     │   │   └── ...
|     │   ├── styles/
|     │   │   └── ...
|     │   ├── api.js
|     │   └── App.jsx
|     ├── package.json
|     ├── README.md
|     └── ...
|
└── README.md
```
