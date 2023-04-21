1. npm install react-bootstrap bootstrap

2. import individual components like: 

import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';

3. link to index.html above closing body tag: 

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>

AND 

link to App.js: 

import 'bootstrap/dist/css/bootstrap.min.css';

rnfs for boilerplate

