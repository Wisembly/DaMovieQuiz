import 'css!tapestry-css';
import 'css!./main.css';

import ReactDOM        from 'react-dom';
import React           from 'react';

import { Application } from 'es6!components/Application';

let main = document.createElement(`div`);
document.body.appendChild(main);
main.id = `main`;

ReactDOM.render(<Application />, main);
