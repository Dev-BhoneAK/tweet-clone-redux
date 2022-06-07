# Tweet Clone Project

This is the code-along project from Udacity which is a like a twitter tweet clone that allows user to view, create, like and reply tweets.
There is no user authentication feature and app assumes user have already login as existing user.

## Project Setup

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project directory structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # All of redux action creators are in this directory.
    │   ├── shared.js # Shared Data Action that will be called on app start. can set authed user id from existing users.
    │   ├── tweet.js # All actions that are related to tweet state
    │   ├── users.js # All actions that are related to user state
    ├── components # All of react components are in this directory.
    │   ├── App.js # This is the root of app. It contains Routes Component and static HTML.
    │   ├── Home.js # Home page component which show all tweet list
    │   ├── Nav.js # Nav component which is used to navigate between different routes.
    │   ├── NewTweet.js # React Controlled Components to create new tweet.
    │   ├── Tweet.js # Tweet Component is the common child component for all tweets which is used across the app.
    │   ├── TweetDetail.js # Detail view page which shows all information about tweet and reply tweets.
    ├── middleware # All middlewares are in this directory.
    │   ├── index.js # Behave like a main gate of middleware that includes all middlewares, redux thunk middlware is included inside.
    │   ├── logger.js # provides logging actions between dispatching an action, and the moment it reaches the reducer.
                       # logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
    ├── reducers # All redux reducers in this directory.
    │   ├── authedUser.js # Reducer that is related to authedUser State, returns new action based on type of action.
    │   ├── index.js # Behave like a main gate of reducer that includes all reducers.
    │   ├── tweet.js # Reducer that is related to tweet State, returns new action based on type of action.
    │   ├── user.js # Reducer that is related to user State, returns new action based on type of action.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── utils # Contains mocked data, backend api and helper utility files.
    │   ├── _DATA.js # Contains mocked data for users and tweets. Also contains methods that can manipulates data from other parts of app.
    │   ├── api.js # act like a buffer between _DATA.js and other files that would like to manipulate data from _DATA.js
    │   ├── helper.js # contains utility functions like formatDate and formatTweet which can transform requested argument into formated one.
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
