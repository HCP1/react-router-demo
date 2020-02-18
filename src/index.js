import React from 'react';
import ReactDOM from 'react-dom';
import App from './Apptest1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

