# Ruokarahina

## Overview

This is a web app that you can use to make ingredients fight each other. There are 10 ''favorite'' ingredients or the user can search from all of the ingredients found in the Fineli API. The fighters are assigned to red or blue corner before a fight and after the fight is started, a timer will start running. As the fight progresses, more events happen and appear on the screen. When one of the fighters is down and their health is at 0, the winner is declared.

All of the ingredients have images that are fetched from Google Search API based on the ingredients name. The 10 favorite ingredients have fixed images since the image from the Google API is not always the best, as you may find out if check it with some ingredients.

## Techical description

This project is a full stack application made with `Next.js`. It also uses a few libraries on top of that: `Mantine` for UI, `SWR` for fetching data on the frontend, `axios` for doing http(s) requests and `recoil` for state management.

### Testing

The project has unit tests on the backend done with `Jest`. End-to-end testing is done with `Playwright` and visual UI testing is done with `Storybook` and `Chromatic` that allows for reviewing visual changes in pull requests. All tests are run with Github Actions on new pull requests.

In addition to tests, linting with `eslint` is also run on pull request.

### Backend

Next.js has separate api routes for doing backend logic. There are several endpoints in this project for different use cases. They hide the actual Fineli API from the user and parse the data from there to a nicer format that only has the required information.

The backend code is located in folders `src/pages/api/`, `src/models/` and `src/services`.

### Frontend

The frontend has two pages: a search page and a fight page. On the search page the user can search ingredients from the Fineli API via our backend. On the fight page the user can see the simulated fight between two ingredients.

For fetching data on the frontend the app uses the `useSWR` hook that handles caching the data to avoid unnecessary api requests.

The frontend code is located in folders `src/pages/`, `src/components/` and `src/lib/`.

## Setting up locally

To run this projet locally, you need to have a Google [Programmable Search Engine](https://programmablesearchengine.google.com) that is connected to your Google Cloud account. You can follow [this tutorial](https://developers.google.com/custom-search/docs/tutorial/creatingcse) to set one up.

Rename `.env.example` to `.env.local` and replace the placeholders with your google api key and custom search engine id.

Make sure you have `yarn` installed on your machine and run

```
yarn
yarn dev
```

The application should be available at http://localhost:3000. If the port 3000 was already in use, the application will revert to another port which can be seen from the terminal window.

## TODO

- [x] Add api endpoint to search data and return only id and name to client to allow for smaller requests
- [x] Add api endpoint to fetch ingredient data by id
- [x] Add classes to model the ingredients for a fight
- [x] Add api endpoint that simulates a fight and returns fight events and the result
- [x] Add unit tests for the models
- [x] Add unit tests for fight simulation functions
- [x] Add frontend to query for ingredients from backend
- [x] Add frontend to select to ingredients for a fight
- [x] Add frontend to show fight results
- [x] Add e2e tests to make sure the app works as intended
- [x] Add storybook for UI components (maybe also chromatic)
- [x] Set up Github Actions to automate deploying the app
- [x] Add some 'favourite' ingredients to the frontend
- [x] Check all colors in frontend
- [x] Add loader to be shown when search hasn't completed yet
- [x] Add images to ingredients

## Fight event spec

- Total time elapsed
- Attacker
- How much damage was done
- How much hp the defender has left
