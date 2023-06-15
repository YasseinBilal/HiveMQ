## Available Scripts

In the project directory, you can run:

### `yarn install`

To install project dependencies

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

To run application tests

## User Experience (UX)

The app has 2 views as following:

### Connection View

- Initial view is the connection view. User has to enter hostname, username and password to connect to a broker

### Subscriptions and messages view

- In this view user can subscribe to different topics and publish messages with different topics
- user can see a list of topics that he/she subscribed for
- user can see a list of messages published with the topics he subscribed for.

## Code Style and quality

- Typescript is used to define all the app types

- ESlint and Prettier are used to force a specific style rules

## Test Coverage

React testing library and Jest are used for testing.

## Project Dockerization

I created a Docker file that can be used in dev mode to create an image of the project and run the project thought docker.

## General notes

- The Layout is quite simple. Giving the focus more on the functionality and code structure.

Thanks a lot :)
