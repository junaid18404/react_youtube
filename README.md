# YouTube in React Practice Project
### Application overview
This is an application which extracts data from Youtube Data Api v3 based on the search keywords.
Application includes a search bar whose search button is when pressed shows you at most 20 results related to the keyword bottom to the search bar. 
If user clicks on any of the video then the video player appear on left side of the page and videos List goes to right rail (vertical list) of the page.
Some basic video details appear at bottom of the video player.

### Project directory
Project directory consists of 4 main sub-directories
* #### components: This directory includes all the UI components which are being used in this project. Sub folder "core" includes all those components which are common through out the app.
* #### helper: Helper directory includes all the data manipulation and related methods which are reusable throughout the project. Class structure is being used to defined these kind of methods. Currently it includes onnly DateHelper methods.
* #### services: This directory have all the API calls defined in it. Currently we only have youtube data API to interact with.
* #### credentials: This directory includes all the necessary credentials to run this app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.