# Infinite Scroll App

An infinite scroll app - fetching data from a server and displaying the data on the UI as users clicks on the button or scrolls down using @tanstack/react-query (useInfiniteQuery)

### Dependencies

#### 1. [@tanstack-react-query](https://tanstack.com/query/latest)

##### Installation

`npm install @tanstack-react-query`
The react library for handling data fetching and caching, and state management tool for react applications.

#### 2. [@tanstack/query-devtools](https://www.npmjs.com/package/react-query-devtools)

A development tool that provides a visual interface for inspecting and debugging @tanstack/react-query queries and mutations.

##### Installation

`npm install @tanstack/query-devtools`

#### 3. [axios](https://www.npmjs.com/package/axios)

A javascript library used for making HTTP requests (e.g GET, POST, PUT, DELETE, etc.) from the browser or NodeJs

##### Installation

`npm i axios`

#### 4. [react-router-dom](https://www.npmjs.com/package/react-router-dom)

For creating routes and navigating to pages in a react application

##### Installation

`npm install react-router-dom`

#### 5. [json-server](https://www.npmjs.com/package/json-server)

This will serve as my local server running the db,json file

##### Installation

`npm i json-server`

#### 6. [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport. Contains both a Hooks, render props and plain children implementation.
**Usage: To trigger the fetchNextPage when the observer enters the viewport**

##### Installation

`npm i react-intersection-observer`

### Files

#### countries.json

The countries.json file contains a list of all the countries, with their names, capital, continent, currency, language and population.
Got the list by installing the countries-list package `npm install countries-list`
and copied the list of countries from "countries.min.json" file in the "countries-list" folder inside the "node modules" folder into the countries.json

#### db.json

The db.json file contains a list of all the countries sorted alphabetically by running the generate-countries.mjs file using `node generate-countries.mjs`, thereby reshaping the structure of the list of countries and also generated a random valie as population of each country. while retaining the information from the countries.json file such as the capital, continent, currency, language, population, etc.
