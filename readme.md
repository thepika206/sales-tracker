<a id='top'></a> 
# About Sales Tracker
- Sales Tracker is a Client Relationship Manager for sales agents to document their clients
- [Click here to try the app](https://sales-tracker-pcheung.fly.dev/)

# Table of Contents
- [About Sales Tracker](#about-sales-tracker)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [User Stories](#user-stories)
    - [UX Considerations](#ux-considerations)
    - [Accessibility Considerations](#accessibility-considerations)
- [Future Plans (Ice Box)](#future-plans-ice-box)
- [About the Developer](#about-the-developer)
- [Something I enjoyed most about this Project](#something-i-enjoyed-most-about-this-project)
    - [Email and LinkedIn](#email-and-linkedin)


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

# User Stories
- As a Sales Agent, I want to add and edit my active Leads so that I have a way to keep track of them
- As a Sales Agent, I want to comment on Leads so all client communication is documented
- As a Sales Agent, I want to report on closed and sold leads so that I can track my production
- As a user of Sales Tracker, I want to login using Google so that I don't need to create a separate login for this application.

### UX Considerations
- Access to data requires login
- Update and Delete reserved for the creator of the data except for commenting
- Status-based workflow

### Accessibility Considerations
- Mobile friendly design (Responsive layout)
- Accesible contrast on text
- Text labels on all buttons and inputs 
  

# Future Plans (Ice Box)
- As a Sales Agent, I want to associate Leads with Sources so that I know where my sales are coming from 
- As a Sales Agent, I want an API for lead creation so that external systems can insert Leads into my system programatically.

# About the Developer
- I am a full-stack software developer with experience in Product Management and design.
- I built Sales Tracker to apply my knowledge of business process systems into a MEN Stack application.

# Something I enjoyed most about this Project
- My app's needed several tables that were nearly the same, except filtering for different criteria.  That allowed me to reuse one index.ejs file for multiple routes.
- ![screenshot](/public/images/st-code-snippet.png "screenshot")

### Email and LinkedIn
- Patrick Cheung - pika206@gmail.com
- Connect on [linkedIn](https://www.linkedin.com/in/patrick-cheung206/)