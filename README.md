<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/mohammad-kassem/comptutor-final-project#project-philosophy) • [WIREFRAMES](https://github.com/mohammad-kassem/comptutor-final-project#wireframes) • [TECH STACK](https://github.com/mohammad-kassem/comptutor-final-project#tech-stack) • [IMPLEMENTATION](https://github.com/mohammad-kassem/comptutor-final-project#implementation) • [HOW TO RUN?](https://github.com/mohammad-kassem/comptutor-final-project#run)**

</div>

<br><br>


<img src="./readme/title2.svg" id="project-philosophy"/>

> Comptutor is a mobile application that connects students with tutors. It is a fully digital online tutoring experience where appointments are managed between students and tutors for live sessions. Tutors and students are connected based on their subjects of choice. Tutors and students are connected through a chat system. Students and tutors are notified of appointment updates through push notifications.

> Comptutor, your tutor on your computer.

### Student Stories
-As a student, I want to be able to see tutors that teach the subjects I am interested in learning.
- As a student, I want to be able to search for the tutor I have in mind.
- As a student, I want to be able to search for tutors by subject.
- As a student, I want to be able to view a tutor's available times to book a live session.
- As a student, I want to be notified when my appointment with the tutor is approved.
- As a student, I want the freedom to cancel an appointment.
- As a student, I want there to be a specific cutoff period after which the other party cannot cancel the appointment.
- As a student, I want to have the option to send my questions to the tutors.
- As a student, I want to have the option to update my information and the subjects I want to learn. 



### Tutor Stories
- As a tutor, I want to be contacted only by students concerning my subjects.
- As a tutor, I want appointments to be booked according to my available times.
- As a tutor, I want to be notified when someone requests an appointment.
- As a tutor, I want to be able to accept or reject appointment requests.
- As a tutor, I want the freedom to cancel an appointment.
- As a tutor, I want there to be a specific cutoff period after which the other party cannot cancel the appointment.
- As a tutor, I want students to be able to connect with me easily.
- As a tutor, I want to have the option to update my information, add my education, and the subjects I teach.  


<br><br>

<img src="./readme/title3.svg" id="wireframes"/>

> This design was planned on the Figma app.

| Login  | Register  | Add Subjects  | Add Degrees  |
| -----------------| -----------------| -----------------| -----------------|
| <img src="./readme/login.png" height="400"/> | <img src="./readme/register.png" height="400"/> | <img src="./readme/subjects.png" height="400"/> | <img src="./readme/degrees.png" height="400"/>

| Home  | Tutor Page | Profile  | Edit Profile |
| -----------------| -----------------| -----------------| -----------------|
| <img src="./readme/home.png" height="400"/> | <img src="./readme/tutor.jpg" height="400" width="180"/> | <img src="./readme/profile.png" height="400"/> | <img src="./readme/edit.png" height="400" width="180"/>

| Schedules  | Tutor Appointments  | Chat Rooms  |  Email Verification  |
| -----------------| -----------------| -----------------| -----------------|
| <img src="./readme/schedules.png" height="400"/> | <img src="./readme/app.png" height="400"/> | <img src="./readme/chat.png" height="400"/> | <img src="./readme/veri.png" height="400"/> 

<br><br>
<img src="./readme/title4.svg" id="tech-stack"/>

Here's a brief high-level overview of the tech stack that Comptutor uses:

- This project uses the [React Native app development framework](https://reactnative.dev/). React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React library along with native platform capabilities.
- This project uses the [Laravel web application framework](https://laravel.com/). Laravel is a free and open-source PHP web framework intended for the development of web applications following the model–view–controller design pattern.
- For the database the app uses [MySQL](https://www.mysql.com/) which is an open-source relational database management system (RDBMS) based on the Structured Query Language (SQL).
- This project uses Google Firebase services for real-time events [Firebase](https://firebase.google.com/). Firebase is a platform developed by Google for creating mobile and web applications.



<br><br>
<img src="./readme/title5.svg" id="implementation"/>

> As a showcase of the app's successful implementation using the above-mentioned tech stacks, the animations of the main functionalities of the app are shown below:

| Splash Screen | Login  | Login Validation  |
| -----------------| -----------------| -----------------|
| <img src="./readme/splash.gif" height="600"/> | <img src="./readme/login-student.gif" height="600"/> | <img src="./readme/login-valid.gif" height="600" />

| Register  | Register Validation  | Email Verification  |
| -----------------| -----------------| -----------------|
| <img src="./readme/register-tutor.gif" height="600"/> | <img src="./readme/register-valid.gif" height="600"/>| <img src="./readme/emailverifiy.gif" height="600"/>


| Tutor Subjects  | Tutor Degree  | Tutor Info   |
| -----------------| -----------------| -----------------|
| <img src="./readme/addsubjects.gif" height="600"/> | <img src="./readme/degree.gif" height="600"/> | <img src="./readme/info.gif" height="600"/>

| Tutor Screen | Search  | Unread chats |
| -----------------| -----------------|-----------------|
| <img src="./readme/tutor.gif" height="600"/> | <img src="./readme/search.gif" height="600"/> | <img src="./readme/chattutor.gif" height="600"/> |

| Student Chat Start  |  Tutor Chat   |  Student Chat   |
| -----------------| -----------------| -----------------|
| <img src="./readme/chatstudent.gif" height="600"/> | <img src="./readme/chattutor2.gif" height="600"/>  | <img src="./readme/chatstudent2.gif" height="600"/>

| Add Schedule  | Schedules Clashing  |  Display Schedules   |
| -----------------| -----------------| -----------------|
| <img src="./readme/schedule.gif" height="600"/> | <img src="./readme/schedule2.gif" height="600"/> | <img src="./readme/schedule3.gif" height="600"/>

| Book Appointmnet Tutor  | Book Appointmnet Student  | Approve Appointmnet Tutor  |
| -----------------| -----------------|-----------------|
| <img src="./readme/notification1.gif" height="600"/> | <img src="./readme/notification2.gif" height="600"/> | <img src="./readme/approve-tutor.gif" height="600"/>

| Approve Appointmnet Student  | Cancel Appointmnet Tutor  | Cancel Appointmnet Student  |
| -----------------| -----------------| -----------------|
| <img src="./readme/approve-student.gif" height="600"/> | <img src="./readme/cancel-tutor.gif" height="600"/> | <img src="./readme/cancel-student.gif" height="600"/>


| Video Call Start  | Video Call Responsiveness  | Video Call Camera Off  |
| -----------------| -----------------| -----------------|
| <img src="./readme/call1.gif" height="600"/> | <img src="./readme/call2.gif" height="600"/> | <img src="./readme/call3.gif" height="600"/> 

| Video Call Leave  | Edit Info  | Edit Subjects|
| -----------------| -----------------| -----------------|
| <img src="./readme/call4.gif" height="600"/>  | <img src="./readme/edit-info.gif" height="600"/> | <img src="./readme/edit-subjects.gif" height="600"/>

| Edit Image  | Image real-time Update  | Info real-time Update |
| -----------------| -----------------| -----------------|
| <img src="./readme/image.gif" height="600"/> | <img src="./readme/image-update.gif" height="600"/> | <img src="./readme/info-update.gif" height="600"/> |


<br><br>
<img src="./readme/title6.svg" id="run"/>


> To get a local copy up and running follow these simple steps:

### Prerequisites

* Downlaod and install [Node.js](https://nodejs.org/en/download/)
* Downloand and install [composer](https://getcomposer.org/download/)
* Download and install [XAMPP](https://www.apachefriends.org/download.html) 

* npm
  ```sh
  npm install npm@latest -g
  ```
* expo cli
   ```sh
   npm install --global expo-cli
   ```
* Expo Go app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/us/app/expo-go/id982107779)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mohammad-kassem/comptutor-final-project.git
   ```

#### To Run The App

2. Navigate to the frontend folder
   ```sh
   cd frontend
   ```
3. Install npm dependencies
   ```sh
   npm install
   ```
4. Start the app
   ```sh
   expo start
   ```
5. Scan the QR code generated through the Expo Go app(Android) or your phone's camera(iOS)

#### To Run The Laravel Server Locally
6. Change the value of the localHostV1 in the constants folder on the frontend
   ```sh
    cd frontend/constants 
    localHostV1=YOUR IP ADDRESS
   ```

7. Navigate to the backend folder
   ```sh
   cd backend
   ```
8. Install dependencies
   ```sh
   composer install
   ```
9. Create a .env file with the required configuration using the .env.example file as a template
10. Generate a JWT secret key
    ```sh
    php artisan jwt:generate
    ```
11. Run the Apache server through XAMPP and create a database specific for this project in PHPMyAdmin setting the DB_DATABASE in the .env file to the name of the database you created
    ```sh
    DB_DATABASE=Your Database Name
    ```
12. Run the database migration
    ```sh
    php artisan migrate
    ```
13. Run the database seeders
    ```sh
    php artisan db:seed
    ```
14. Start the local development server
    ```sh
    php artisan serve --host=Your IP Address
    ```




