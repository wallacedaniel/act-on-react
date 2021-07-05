# Act-On Software React Coding Challenge

Run npm/yarn in both the root folder and client folder to install the necessary dependencies.

To launch the express server in http://localhost:5000/api/tables cd into the root directory and enter - npm/yarn run server

To launch the React app http://localhost:3000/ cd into the client folder and enter - npm/yarn start

I've included the Context API, using the useState and useEffect hooks. I've written the project using ES6 and SCSS, and have included the extra option of fetching data from an Express server.

For time's sake, I've refrained from additional styling for responsiveness and left a final obstacle unsolved. The app is fully functional as expected. However, the initial state is still being derived from the table data contained in the client folder when creating the context, rather than from the server. Without this, the app fails to compile. The app immediately re renders on the initial load, as the data is properly fetched and applied to state. So, state in the app is ultimately based on the server model, but still needs the client model present to compile.   

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
