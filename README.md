## WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3. It uses [Bootstrap](https://github.com/twbs/bootstrap) version 4.0.0, and icons from [Weather Icons](https://github.com/erikflowers/weather-icons). 

## Installation and build

To run this project, you must have Node.js, npm, and the Angular CLI installed. I used Angular CLI 1.7.3, so I can't guarantee it'll run with different versions.

Clone the repository to your local machine, cd into the directory, and run `npm install`. 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Discussion

My solution implements the requirements outlined in the project description. If I had more time, these are some things I might have done to improve my solution:

- Write tests. My experience with unit tests is mainly limited to the server, with .NET frameworks like Moq. I'm interested in learning more about client tests, including unit and end-to-end tests.

- Improve the alert UI with a hover tooltip. I think the hover affect adds visual importance to the alert icon, but a hover tooltip explaining the alert might be helpful.  Bootstrap 4 provides a UI for tooltips using Popper.js and they seem pretty slick so I'd be interested in learning how to use them.

- Consume other data from the Yahoo API besides the forecast array. I think it could be nice to have a welcome message indicating the city that the data applies to, as well as the current conditions.

- Ability to refresh. This would be pretty easy to implement and would improve the utility of the application.

- Add a model to represent the forecast data. I like the type-safety features of TypeScript, but since there's no user input or validation in this app I decided not to pursue it.

- Use more Observable features in retrieving API data. I'm a bit new to Observables / RxJs, but it seems really powerful. To make our Ajax request a bit more robust, we could add retry logic and stronger error handling. For the purpose of this assignment it wasn't my highest priority, though.