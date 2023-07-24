# Links - A Responsive Webpage for Organizing and Managing Links

Welcome to the **Links** project! This is a responsive webpage designed to serve as a substitute for Linktree, allowing users to showcase multiple links in a clean and user-friendly manner. Links can be added, updated, and deleted through a custom admin dashboard. The project is built using HTML, CSS, and JavaScript and is backed by a server with API endpoints to manage links and provide relevant data to users.

## Table of Contents
- [Links - A Responsive Webpage for Organizing and Managing Links](#links---a-responsive-webpage-for-organizing-and-managing-links)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Admin Dashboard](#admin-dashboard)
  - [API Endpoints](#api-endpoints)
    - [Admin Routes](#admin-routes)
    - [User Routes](#user-routes)
  - [Models](#models)
    - [Links Model](#links-model)
    - [Admin Model](#admin-model)
  - [License](#license)

## Introduction
**Links** is a responsive webpage designed to help individuals, content creators, and businesses share multiple links through a single URL. The project consists of an admin dashboard to manage the links easily and efficiently. Users can access the links and click on them to visit the respective destinations.

## Getting Started
### Prerequisites
Before you begin, make sure you have the following installed:
- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

### Installation
1. Clone this repository: `git clone https://github.com/whoisaditya/Links.git`
2. Install dependencies for the server:
```bash
cd Links/server
npm install
```
3. Set up the environment variables:
Create a `.env` file in the `server` folder and define the following variables:
```
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_jwt
```
4. Install dependencies for the client:
```bash
cd ../client
npm install
```

## Admin Dashboard
The admin dashboard is the heart of the **Links** project. It allows administrators to log in securely and perform various actions related to link management. Admins can add new links, update existing ones, and delete links as needed. The dashboard provides a user-friendly interface to manage the links effortlessly.

## API Endpoints
The server provides API endpoints to interact with the links and perform CRUD (Create, Read, Update, Delete) operations. Below are the available routes:

### Admin Routes
- `POST /admin/login`: Admin Login. Authenticates the admin and generates a JSON Web Token (JWT) for subsequent requests.
- `DELETE /admin/logout`: Admin Logout. Invalidates the admin's JWT to ensure secure logout.
- `POST /admin/newLink`: Add a new link that needs to be displayed.
- `PUT /admin/updateLink/:id`: Update an existing link using the link id.
- `DELETE /admin/deleteLink/:id`: Delete a link using the link id.

### User Routes
- `GET /user/allLinks`: Get all the links that need to be displayed to the user.
- `PUT /user/updateCount/:id`: Update the number of times a link has been clicked using the link id.

## Models
### Links Model
- `name`: Name of the link.
- `redirectTo`: The URL it redirects to.
- `clicks`: The number of clicks the link has received.
- `visibility`: Boolean value representing whether a link is visible to users or not.
- `index`: The index at which the link is displayed.
- `timestamps`: Timestamp when the link was added/updated.

### Admin Model
- `username`: Stores the username of the admin.
- `password`: Stores the hashed password for the admin.

## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

<p align="center">
	With :heart: by <a href="https://www.github.com/whoisaditya" target="_blank">Aditya Mitra</a>
</p>
