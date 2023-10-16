# Chocolate Challenge

For the crazy chocolate junkies, this app provides a frontend to look for chocolate information, and links to buy the chocolates. As an addon, the app finds the cheapest store for each of the different types of chocolate.

The app itself is just a proof of concept, so instead of a real backend, there is some mock data included.

Feel free to fork and / or add a backend.

## Open issues and potential improvements

- add a way to deploy, preferably using Docker
- verify the integrity of the installed npm packages
- verify the API
- add exception handler
- style the 404 page in a nicer way

## Develop and run the app

- using `npm run` and one of the following keywords, you can develop or run the app
- `dev` runs a dev server for development with hot reload enabled, on some browsers like Chrome this might not work well and for further development another solution might be needed
- `build` builds the app and bundles it for a potential release
- `lint` executes ESLint to check for known issues in the code
- `test` runs all tests in an interactive mode
- `test:ui` runs all tests in an interactive mode and shows some information on tests, coverage and module dependencies in a browser
- `coverage` runs coverage analysis for the Github CI pipeline
- `preview` runs the bundled app similar to a production environment; for this to work, a build needs to be run before