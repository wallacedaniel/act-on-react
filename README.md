# Act-On Software React Coding Challenge

Hi Team,

Thanks for your consideration for the role!

To launch the express server in localhost:5000 cd into the root directory and enter - npm run server

To launch the React app localhost:3000 cd into the client folder and enter - yarn start

I've included the Context API, using the useState and useEffect hooks. I've written the project using ES6.

For time's sake I've left a final obstacle unsolved, which I would be happy to learn more about. The app functions as expected. However, the initial state is still being derived from the table data contained in the client folder when creating the context, rather than from the server. Without this, the app fails to compile. The app immediately re renders on the initial load, as the data is properly fetched and applied to state. So, state in the app is ultimately based on the server model, but still needs the client model present to compile.  

The code relevant to that obstacle is contained within context/tables/tables.context.js and components/tab/tab.component.js if you have any further thoughts on this.

Feel free to reach out to me at my email daniel.wallace@act-on.com or Slack me with any questions.

Thanks!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
