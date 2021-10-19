import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import logo from './logo.svg';
import reportWebVitals from './report-web-vitals';
import Clock from './components/clock';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);


function App() {
  return (
    <div className="container">
      <h1>Nixie Tube Clock</h1>
      <Clock />
			<p>
				Created by{' '}
				<a
					href="https://schylerhosler.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					Schyler Hosler
				</a>
			</p>
    </div>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
