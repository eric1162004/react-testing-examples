# Vitest

`npm i -D vitest`

Add test script:
"test": "vitest",
"test:ui": "vitest --ui"

## React Testing Lib
`npm i -D @testing-library/react@14.2.0`

## jsdom
run our tests within an environment that emulates a browser environment
`npm i -D jsdom@24.0.0`
configure vitest to use jsdom

## jest-dom
ncludes matchers for writing assertions against DOM elements.
`npm i -D @testing-library/jest-dom`

## Testing Component
- how they render
- how they respond to user actions

## User interaction
`npm install --save-dev @testing-library/user-event`

## getByRole and queryByRole
Use getByRole when you expect a specific element with a certain role to be present in your component.
Use queryByRole when you're unsure if an element with a specific role exists or not.

## Mock Server Worker 
We don't want to test our frontend with a live backend.
Network connection can be slow. 
Backend can be offline
`npm i -D msw@2.1.6`

## Generating Fake Data
`npm install @faker-js/faker --save-dev`

`npm i -D @mswjs/data@0.16.1`

## Refactoring UseState with React Query
benefits: caching, backgorund updates, retries
you can also use redux for caching but it adds complexity to the project

## Testing Form
- input fields
- default values
- intial data
- drop-down options

- interaction between fields
- validation rules
- form submission
- form feedback and UX

## Testing State Management Solutions
- React Context, Redux, Zustand
- Test the behavior, not the implementation
