
# About Sales Tracker
  Sales Agents that work in "considered" purchases (major purchase like cars, loans, complex insurance policies) know that most deals do not close over a single phone call or email.  Therefore a Sales Agent can benefit from a system that manages all of their Lead relationships.  
### Solution: Sales Tracker, a Client Relationship Management system or CRM.
- [Launch Sales Tracker Now](https://sales-tracker-pcheung.fly.dev/)
- Sales Tracker helps Sales Agents with the following jobs:
  - Entering Lead information
  - Tracking the status of the Lead as it moves from New to Closed
  - Documentation of each interaction with the client, helping you know where you last left off.
  - Reporting Sales Production

# Table of Contents
- [About Sales Tracker](#about-sales-tracker)
    - [Solution: Sales Tracker, a Client Relationship Management system or CRM.](#solution-sales-tracker-a-client-relationship-management-system-or-crm)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [User Stories](#user-stories)
- [Project Plan on Trello](#project-plan-on-trello)
    - [Planning diagrams](#planning-diagrams)
    - [UX Considerations](#ux-considerations)
    - [Accessibility Considerations](#accessibility-considerations)
- [Future Plans (Ice Box)](#future-plans-ice-box)
- [Why did I choose to build this?](#why-did-i-choose-to-build-this)
- [Something I enjoyed most about this Project](#something-i-enjoyed-most-about-this-project)
- [Contact Information](#contact-information)


# Getting Started
- [Click here to try the app](https://sales-tracker-pcheung.fly.dev/)
- Login with Google
- Create, Edit, Leads 
- View and Comment on other user's Leads

# Screenshots
![screenshot](/public/images/st-intro-flow.png "screenshot")
![screenshot](/public/images/st-image-1.png "screenshot")
![screenshot](/public/images/st-image-2.png "screenshot")

# Technologies Used
- MongoDb with Mongoose 
- Express.js | Node.js
- HTML | CSS 
- Javascript
- OAuth - Google
- Bootstrap Frontend Framework
- [GitHub - sales-tracker](https://github.com/thepika206/sales-tracker)
- [Fly.io - Click here to try the app](https://sales-tracker-pcheung.fly.dev/)

# Credits
- Bootstrap CSS library
- favicon.io

# User Stories
- As a Sales Agent, I want to add and edit my active Leads so that I have a way to keep track of them.
- As a Sales Agent, I want to comment on Leads so all client communication is documented.
- As a Sales Agent, I want to report on closed and sold leads so that I can track my production.
- As a user of Sales Tracker, I want to login using Google so that I don't need to create a separate login for this application.

# Project Plan on Trello
[View Trello Board](https://trello.com/b/eKkBHh2W/sales-tracker-planning)
### Planning diagrams
![Entity Relationship Diagram](/public/images/st-erd.png "Entity Relationship Diagram")
![Low-Res Mockup](/public/images/st-planning-image.png "Low-Res Mockup")


### UX Considerations
- Access to data requires login
- Update and Delete reserved for the creator of the data except for commenting
- Status-based workflow

### Accessibility Considerations
- Mobile friendly design (Responsive layout)
- Accesible contrast on text
- Text labels on all buttons and inputs 
  

# Future Plans (Ice Box)
- As a Sales Agent, I want to associate Leads with Sources so that I know where my sales are coming from.
- As a Sales Agent, I want an API for lead creation so that external systems can insert Leads into my system programatically.

# Why did I choose to build this?
- I am creating Sales Tracker as individual project for professional training at General Assembly.
- It demonstrates full CRUD in a realistic application that requires login, and reserves permission to modify data to the user that created it.
- Prior to becoming a developer, I worked on several CRMs as Product Owner. It was rewarding to bring that expertise into this project.

# Something I enjoyed most about this Project
I needed several tables to display leads filtered in various ways, by status, who they belonged to.  I was able to reuse code to more simply pass the needed data to the frontend, including changing the title message to explain what the data was about.
![screenshot](/public/images/st-code-snippet.png "screenshot")

# Contact Information
- Patrick Cheung - pika206@gmail.com
- Connect on [linkedIn](https://www.linkedin.com/in/patrick-cheung206/)