# Preview the app on GH pages
https://orgsys.github.io/tig-code-challange/

# Getting started with repo

1. Clone the ropsitory to your local
2. Run `yarn install` to install the dependencies
3. Add  `.env.local` evironment file in the root folder with variables:
	`REACT_APP_GRAPHQL_URI=https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql`
	`REACT_APP_GRAPHQL_HEADER=fe-test-2023`
	`BROWSER=none`

# Run the React app

1. Run `yarn start` to start the app on `localhost:3030`

# Run tests
1. Stop react app server if running
2. Run `yarn test:unit` for component testing
3. Run `yarn test:e2e` for end to end test
4. Run `yarn test` for both, component and end to end tests

# Notes
1. Only some component tests has been implemented
2. E2E tests are covering just some of the functionality of the app
3. The app will check for env variables and will show an error and a list of missing variables if some vars are missing
4. The API side graphql errors are handled with an alert and a 'retry' button
5. Approximate colors and object sizes were selected from the provided UI design
6. Approximate font sizes and weighs were selected from the provided UI design