# Assignment 2: StackLearner

* Date Created: 07 06 2020
* Last Modification Date: 15 06 2020

## Author

* [Devarshi Pandya](devarshi.pandya@dal.ca)

## Getting Started

* Deployment URL: https://stacklearner-devarshi.herokuapp.com/
* Repository URL: https://git.cs.dal.ca/dpandya/a2_devarshi_pandya

### Prerequisites

* To run this react application on your local machine, just clone the repository. You need Node.js on your local machine to run this react application.

### Libraries and Frameworks Used

* [React.js](https://reactjs.org/) - Frontend library
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - Styling framework
* [Font Awesome 4](https://fontawesome.com/icons?d=gallery) - Icon library
* [React Ace component](https://github.com/securingsincity/react-ace) - Code editor component for react
* [jQuery](https://jquery.com/) - JavaScript library
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - React routing library

### Installing

Install Node.js on the local machine.
Open Visual Studio Code and type the following command

```
npx create-react-app AppName
```

The react application is ready to use. Type the following commands to run it on your localhost.

```
cd MyApp
npm start
```

### Pages Chosen for Development
1. Landing Page (https://stacklearner-devarshi.herokuapp.com/)
2. Sign up Page (https://stacklearner-devarshi.herokuapp.com/signup)
3. Login Page (https://stacklearner-devarshi.herokuapp.com/login)
4. Profile Setup Page (https://stacklearner-devarshi.herokuapp.com/set-profile)
5. Student Dashboard (https://stacklearner-devarshi.herokuapp.com/student-dashboard)
6. Course Learn Page (https://stacklearner-devarshi.herokuapp.com/course-page)

### Landing Page Features (https://stacklearner-devarshi.herokuapp.com/)
![](/screenshots/landing-page.png)
* This is a simplistic landing page design. The landing page contains the signup form. However, the user can open a new signup page from the navbar.
* Image designed using Canva (https://www.canva.com/). 
* Source of the original image: Pinterest (https://www.pinterest.ca/)
* Icons obtained from: Flaticon (https://www.flaticon.com/)
* Responsiveness: Can be used easily on any screen size device. The components adjust elegantly.
* Colour palette used: Blue, Grey, Dark Grey, White

### Sign up Page Features (https://stacklearner-devarshi.herokuapp.com/signup)
![](/screenshots/signup-page.png)
* The signup form contains form validations for email address and password.
![](/screenshots/validations.png)
* Image designed using Canva (https://www.canva.com/). 
* Source of the original images: Pinterest (https://www.pinterest.ca/), Stockfresh (https://stockfresh.com/)
* Icons obtained from: Flaticon (https://www.flaticon.com/)
* Responsiveness: Can be used easily on any screen size device. The components adjust elegantly.
* Colour palette used: Blue, Grey, Dark Grey, White

### Login Page Features (https://stacklearner-devarshi.herokuapp.com/login)
![](/screenshots/login.png)
* This is a simplistic login page design. Once the user logs in, the user lands on the student dashboard page.
* Icons obtained from: Flaticon (https://www.flaticon.com/)
* Responsiveness: Can be used easily on any screen size device. The components adjust elegantly.
* Colour palette used: Blue, Dark Grey, White

### Profile Setup Page Features (https://stacklearner-devarshi.herokuapp.com/set-profile)
![](/screenshots/set-profile.png)
* This is a simplistic profile page design. Once the user signs up, the user lands on profile setup page.
* The header is designed in a way to give a translucent feel. The design is kept simple and professional.
* Profile picture icon obtained from: Flaticon (https://www.flaticon.com/)
* Responsiveness: Can be used easily on any screen size device. The components adjust elegantly.
* Colour palette used: Blue, Dark Grey, White.

### Student Dashboard Features (https://stacklearner-devarshi.herokuapp.com/student-dashboard)
![](/screenshots/student-dashboard.png)
![](/screenshots/starter-kit.png)
![](/screenshots/my-courses.png)
* This is the most complicated design for the student dashboard and it contains a lot of features. Once the user logs in, the user lands on the student dashboard. Card layout has been extensively used in the design process. The best part is how the page adjusts itself to any given screen size. The look and feel of the page is professional, and it is very easy to use.
* The page is very interactive in nature, and you can see various effects by hovering onto the "Go Premium" section, the "My Courses" section, and the "Starter Kit" section. It has a rich feel attached to it.
* If the user clicks on any of the links from the "Welcome to StackLearner" section, the student lands on the course page.
* Responsiveness: Can be used easily on any screen size device. The components adjust elegantly.
* Images for "My Courses" obtained from Datawider (https://datawider.com/), Stackify (https://stackify.com/), and ComputerWorld (https://computerworld.com/)
* Icons obtained from: Flaticon (https://www.flaticon.com/) and FontAwesome library.
* "PRO" icon designed using LogoMakr (https://logomakr.com/).
* Images in the starter kit designed using LogoMakr (https://logomakr.com/).
* Colour palette used: Blue, Purple, Dark Grey, White, Orange.

### Course Learn Page Features (https://stacklearner-devarshi.herokuapp.com/course-page)
![](/screenshots/course-page.png)
* This page contains the question to solve, and the instructions on a fixed sidebar on the left of the screen which has a scrollable container.
* The center section is a code editor. This code editor has been used using the React Ace component. (https://github.com/securingsincity/react-ace)
* The code editor has a toolbar at the bottom using which the user can run the code, reset the editor, and view the solution to the problem. The reset button contains a tooltip which is created using Bootstrap's Popper.js library and jQuery.
![](/screenshots/tooltip.png)
* The right section of the screen contains an output window.
* Since the window is empty, an empty state illustration has been used which is pleasing to the user's eye.
* Icons obtained from: Flaticon (https://www.flaticon.com/) and FontAwesome library.
* Responsiveness: Is designed to work only on medium or large screen devices. The code editor and the output window disappears on smaller screen devices and the question is visible.
![](/screenshots/editor-screen-responsive)
* Colour palette used: Black, Purple, Dark Grey, White, Orange.

### Typography Used
The following fonts have been used in the entire design process:
* Lucida Sans
* Lucida Sans Regular
* Lucida Grande
* Lucida Sans Unicode
* Geneva
* Verdana
* sans-serif

### StackLearner Logo Design
The logo has been designed using LogoMakr (https://logomakr.com/) and Hatchful (https://hatchful.shopify.com/).
![](src/images/logo192.png)

### W3C Compliance
The website is cross-browser compliant and the code used is W3C valid code.

### Deployment
The system has been deplyed on HerokuApp using GitHub. Deployment steps were:
```
npm install serve
```

Replace the scripts section in package.json with the following:
```
"scripts": {
    "dev": "react-scripts start",
    "start": "serve -s build",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "heroku-postbuild": "npm run build"
  },
```
  Push the changes to your GitHub repository and deploy from HerokuApp's web interface.

## Sources Used

Bootstrap's documentation was used extensively in the whole development process (https://getbootstrap.com/docs/4.1/getting-started/introduction/).
Other from that, the regex for form validation was obtained from an online source.

### Signup.jsx

Lines 26 - 28
---------------

```
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return ("")
        }

```
Lines 39, 42, 45, 48
---------------

```
        if (/(?=.{8,})/.test(password) === false)
        
        if (/(?=.*[a-z])/.test(password) === false)
        
        if (/(?=.*[A-Z])/.test(password) === false)
        
        if (/(?=.*[!@#\$%\^&\*])/.test(password) === false)

```
The code above was created by adapting the code in [The Polyglot Developer](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/) as shown below: 



|RegEx|	Description|
| --- | --- |
|^	|The password string will start this way|
|(?=.*[a-z]) | The string must contain at least 1 lowercase alphabetical character|
|(?=.*[A-Z])	| The string must contain at least 1 uppercase alphabetical character|
|(?=.*[0-9])	| The string must contain at least 1 numeric character|
|(?=.*[!@#$%^&*])	|The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict|
|(?=.{8,})|	The string must be eight characters or longer|


## Acknowledgments

* A fair amount of design inspirations were taken from Google Search's design (https://www.google.com/), Coursera's design (https://www.coursera.org/), and Codecadamy's design (https://www.codecademy.com/) on how to keep the design minimalistic and beautiful.
