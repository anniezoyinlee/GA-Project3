# General Assembly - Project 3(BackEnd)

## Table of Contents
* [Project Name](#project-name)
* [Project Description](#project-description)
* [Team Members](#team-members)
* [Requirements](#requirements)
* [Features](#features)
* [Wireframe](#wireframe)
* [User Stories](#user-stories)
* [Workflow](#workflow)
* [Version History](#version-history)

## Project Name
PokeMon Sanctuary
>[Click to check the app!](https://pokemon-sanctuary.herokuapp.com/)

## Project Description
Hi! Welcome to our project: PokeMon Sanctuary. This project was designed to test/reinforce our MERN/CRUD understanding in a group setting. We decided that
a E-commerce app simulating the purchase of PokeMon from an adoption agency would be the best way to demonstrate our knowledge in a unique way. 

The app is comprised of: a landing page with cards displaying the PokeMon up for adoption, a Nav bar that routes to other pages renders in the app, and interactive cards
thats redirect the user to the PokeMon's price and description when clicked.

Each team was assigned role split evenly between FrontEnd and BackEnd development to ensure even workflow. 

Credits to all those who contributed.

## Team Members
[Annie Lee](https://github.com/anniezoyinlee) - Fullstack Developer

[Christina Whethers](https://github.com/Flandolly) - Lead BackEnd Developer

[Safa Nasirli](https://github.com/safanasirli) - Lead FrontEnd Developer

[Trent Sanders](https://github.com/MrGoodBurger) - Scrum Leader

## Features
[MERN](https://www.mongodb.com/mern-stack)([Mongodb](https://www.mongodb.com/), [Expressjs](https://expressjs.com/), [Reactjs](https://reactjs.org/), [Nodejs](https://nodejs.org/en/))

[Mongoose](https://mongoosejs.com/)

[Heroku](https://www.heroku.com/home)

User Authentication

## Models and Properties
User
```
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true
}
```
Pokemon
```
name: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
image: {
    type: String,
    required: true
}
```

## Wireframe
Landing Page
![image](https://imgur.com/sM08Abg.png)
The Description page
![image](https://imgur.com/I1eGXF7.png)

## User Stories
As a User I want:
* The website to have the official pokemon colors
* The Landing page to have multiple card containers
* Each card has a unique pokemon
* Each card has an interactive link to the Description page

## Workflow
* 9/24/2021 - Scaffold BackEnd, created models for Schema, 
* 9/26/2021 - Created Seed data, configured server, started heroku deployment process, Updated ReadMe
* 9/27/2021 - Created Password encryption, updated Error handling, Install packages necessary for project 
* 9/28/2021 - Connected backend to frontend
* 9/29/2021 - Installed CORS for error prevention
* 9/30/2021 -
* 10/1/2021 - Presentation

## Version History
* 0.1 
    * Initial Release