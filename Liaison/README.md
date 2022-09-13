<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/mohammad-kassem/SEF-Final-Projects-Comptutor-Liaison/tree/master/Liaison#project-philosophy) • [WIREFRAMES](https://github.com/mohammad-kassem/SEF-Final-Projects-Comptutor-Liaison/tree/master/Liaison#wireframes) • [TECH STACK](https://github.com/mohammad-kassem/SEF-Final-Projects-Comptutor-Liaison/tree/master/Liaison#tech-stack) • [IMPLEMENTATION](https://github.com/mohammad-kassem/SEF-Final-Projects-Comptutor-Liaison/tree/master/Liaison#implementation) • [HOW TO RUN?](https://github.com/mohammad-kassem/SEF-Final-Projects-Comptutor-Liaison/tree/master/Liaison#run)**

</div>

<br><br>


<img src="./readme/title2.svg" id="project-philosophy"/>

> Liaison is a website for contacts management to record the names, emails, phone numbers and addresses through a live map selector of friends and acquaintances. It comes with a thorough filtering system. It also includes mesaghing services.

> Liaison is your book mate.

### User Stories
- As a user, I want to be able to add any contact.
- As a user, I want to be able to edit my contacts.
- As a user, I want to be able to select my contacts' location easily.
- As a user, I want to be able to filter through my contacts.
- As a user, I want to be able to like and unlike my contacts.
- As a user, I want to be able to send messages to my contacts.
- As a user, I want to be able to serach through my messages sent. 

### Admin Stories
- As a admin, I want to be able to view all the users.
- as a admin, I want to be able to view the user's stats.
- As a admin, I want to be able to serach throygfh the users.
- As a admin, I want to be able to visulaize how anually active each user is. 


<br><br>

<img src="./readme/title3.svg" id="wireframes"/>

> A showcase of the website's design:

| Register  | Login  |
| -----------------| -----------------|
| <img src="./readme/register.png" width="500"/> | <img src="./readme/login.png" width="500"/> |

| Add Contact  | Filter |
| -----------------| -----------------|
| <img src="./readme/add.png" width="500"/> | <img src="./readme/filter.png" width="500"/> |

| Messages  | Send Message  |
| -----------------| -----------------|
| <img src="./readme/messages.png" width="500"/> | <img src="./readme/send-message.png" width="500"/> |

| Admin Users  | User stats  |
| -----------------| -----------------|
| <img src="./readme/admin1.png" width="500"/> | <img src="./readme/admin2.png" width="500"/> |

<br><br>
<img src="./readme/title4.svg" id="tech-stack"/>

Here's a brief high-level overview of the tech stack that Comptutor uses:

- This project uses the [Angular Typescript-based web app framework](https://angular.io/).Angular is a component-based framework for building scalable web applications, built on TypeScript, as a development platform. Angular includes.
- This project uses the [Node.js Javascript runtime enviroment](https://nodejs.org/en/) and the [Express.js web application framework](https://expressjs.com/). Express.js is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. 
- For the database the app uses [MongoDB](https://www.mongodb.com/). MongoDB is a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
- This project was written enviroment in [TypeScript](https://www.typescriptlang.org/). Typescript is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.

<br><br>
<img src="./readme/title5.svg" id="implementation"/>

> As a showcase of the website's successful implementation using the above-mentioned tech stacks, the animations of the main functionalities of the website are shown below:

| Register | Login  |
| -----------------| -----------------|
| <img src="./readme/register.gif" width="500"/> | <img src="./readme/login.gif" width="500"/> |

| Add Contact 1  | Add Contact 2  |
| -----------------| -----------------|
| <img src="./readme/add1.gif" width="500"/> | <img src="./readme/add2.gif" width="500"/>|


| Like - Delete  | Edit  |
| -----------------| -----------------|
| <img src="./readme/like-delete.gif" width="500"/> | <img src="./readme/edit.gif" width="500"/> |

| Filter 1 | Filter 2  |
| -----------------| -----------------|
| <img src="./readme/filter1.gif" width="500"/> | <img src="./readme/filter2.gif" width="500"/> |

| Filter 3  |   Send Message   | 
| -----------------| -----------------|
| <img src="./readme/filter3.gif" width="500"/> | <img src="./readme/send-message.gif" width="500"/>  |

| Recive Message  | Messages Display  |
| -----------------| -----------------|
| <img src="./readme/recieve-message.gif" width="500"/> | <img src="./readme/messages1.gif" width="500"/> |

| Messages Search  | Admin Users  |
| -----------------| -----------------|
| <img src="./readme/messages2.gif" width="500"/> | <img src="./readme/admin1.gif" width="500"/> |


| Admin Search  | User Stats  |
| -----------------| -----------------|
| <img src="./readme/admin2.gif" width="500"/> | <img src="./readme/admin3.gif" width="500"/> |


<br><br>
<img src="./readme/title6.svg" id="run"/>


> To get a local copy up and running follow these simple steps:

### Prerequisites

* Downlaod and install [Node.js](https://nodejs.org/en/download/)

* npm
  ```sh
  npm install npm@latest -g
  ```
* expo cli
   ```sh
   npm install --global angular-cli
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mohammad-kassem/SEF-Final-Projects-Comptutor-Liaison.git
   ```

#### To Run The App

2. Navigate to the frontend folder
   ```sh
   cd app-angular
   ```
3. Install npm dependencies
   ```sh
   npm install
   ```
4. Start the app
   ```sh
   ng serve
   ```

#### To Run The Express Server Locally
5. Navigate to the backend folder
   ```sh
   cd server-nodejs
   ```
6. Install npm dependencies
   ```sh
   npm install
   ```
7. Create a .env file with the required configuration using the .env.example file as a template

8. Run the database seeders
    ```sh
    npx ts-node ./seeder/seedDB.ts
    ```
9. Start the local development server
    ```sh
    npx ts-node index.ts
    ```




