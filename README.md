## Table of Contents

- [Running the project](#running-the-project)
- [Brief](#brief)
- [Extra](#extra)
- [Solution](#solution)
- [Challenges Faced](challenges-faced)
- [If I Had More Time](#if-i-had-more-time)

## Running the project

This project has been set up with the standard react-cli script.
Use:

```
$ npm install
$ npm start
```

See https://www.npmjs.com/package/react-scripts for more details

## Brief

Timed: 1 hour

Create a small job capture application. The screenshots have been included in this zip.
A user can have 1-3 jobs or be unemployed (0 jobs).

We are just looking for the component markup and structure.

- _We are **not** looking for logic or state management._
- _Styling is also **not** important, react-bootstrap has been included in this project but you are not required to use it._
- _Feel free to include any reasonable 3rd party modules (MaterialUI etc.)_

## Solution

- Refactored some of the original code so as to have presentational compoonents and container components that housed the logic. (Seperations of concerns)
- Renamed App file in Jobs folder to 'JobsApp' for easier clarification. No need to be more than 1 App file imo.
- Moved the jobs number selector out of the main apps file and into its own component.
- Used hooks for state and functional components instead of class based components.
- Added CurrentStatus as a seperate component dependant on the jobs count number.

## Challenges Faced

- Mac screen broke!
- I was looking at the newer version of react bootstrap documentation and didn't realise the form API's had changed so I wasted a portion of time figuring out what was wrong!
- Should have checked the package.json to see what version of react we was using, an older version would have meant I couldn't use hooks and newer features etc. Knowing from the get go could have saved me time if I was blocked with errors.

## If I Had More Time

- I would have done the TODO part as it is relatively simple.
- I would have looked over the code for refactoring opportunities.
- Add some tests

All in all, it was a timeboxed tech test & I felt I was able to implement the task that was set out.
