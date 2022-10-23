# Ruokarahina

## Setting up locally

Make sure you have `yarn` installed on your machine and run

```
yarn
yarn dev
```

The application should be available at http://localhost:3000.

## TODO

- [x] Add api endpoint to search data and return only id and name to client to allow for smaller requests
- [x] Add api endpoint to fetch ingredient data by id
- [x] Add classes to model the ingredients for a fight
- [x] Add api endpoint that simulates a fight and returns fight events and the result
- [x] Add unit tests for the models
- [x] Add unit tests for fight simulation functions
- [ ] Add tests for api endpoints
- [x] Add frontend to query for ingredients from backend
- [x] Add frontend to select to ingredients for a fight
- [x] Add frontend to show fight results
- [ ] Add e2e tests to make sure the app works as intended
- [ ] Add storybook for UI components (maybe also chromatic)
- [x] Set up Github Actions to automate deploying the app
- [x] Add some 'favourite' ingredients to the frontend
- [ ] Check all colors in frontend
- [x] Add loader to be shown when search hasn't completed yet

## Fight event spec

- Total time elapsed
- Attacker
- How much damage was done
- How much hp the defender has left
