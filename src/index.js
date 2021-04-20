import React from 'react';
import { render } from 'react-dom'
//import ReactDOM from 'react-dom';
//import SurveyComponent from './SurveyComponent';
//import SWOTPage from './SWOTPage';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render((
    <BrowserRouter>
        {/* <SurveyComponent /> */}
        <App />
    </BrowserRouter>
), document.getElementById('surveyElement'));

