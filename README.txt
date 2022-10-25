** hello world **


CREATE REACT APP

npx create-react-app project_name


ADD BOOTSTRAP

npm i bootstrap


// ROUTING 

REACT ROUTER DOM

https://v5.reactrouter.com/web/guides/quick-start





1 - delete package-lock.json from the project

2 - change 


FROM
 	"react": "^18.2.0",
 	"react-dom": "^18.2.0",

TO
	"react": "^17.0.2",
	"react-dom": "^17.0.2",

3        npm i react-router-dom@5


4        npm i

change index.js to this


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




ADD REDUX
npm install react-redux
npm install @reduxjs/toolkit







