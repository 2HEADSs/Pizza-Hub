# Pizza-Hub

SPA  made for SoftUni-React course, created with REACT as FE, Node.js as BE and MongoDB as DB.

![](/HomePage.jpg)

Informaton:

The app works as platform for share pizza recepies with basic functionality with part of imittation og Git-Hub.
Every user(not logged in) have access to : Home , All Repo's (catalog), Search, Details, Register and Login.
Evry logged in user have acces to: Home, All Repo's (catalog), Search, My epo's(if has liked pizza), Add Pizza, Edit(if has own pizzas for edit) and Logout.
Every logged in user can like Pizzas and they automaticly are added to My Likes.


TechStack
-Client
    REACT
    
    
    
-Server
    Node: 17.2.0
    ExpressJS: 4.18.2
    bcrypt: 5.1.0
    jsonwebtoken: 8.5.1,
    mongoose: 6.7.4,
    nodemon: 2.0.20

Setup

To run app, in directory "CLIENT",  open inside cmd and run:

$ npm install

$ npm start

Which opens the app at http://localhost:3000 in your browser.
Also should run REST_API server.
Open directory "server", open inside cmd and run:

$ npm install

$ npm start

And the server will start listening at http://localhost:3030.

