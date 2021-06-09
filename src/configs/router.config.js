import React from 'react'
// import { hashHistory, Router, Route, IndexRoute } from 'react-router'
// import { Route, HashRouter, Router } from 'react-router-dom'

import App from '../views/App'
import home from '../views/home/index.js'
// import * as about from '../views/about'
// let myrouter = (
//   <Router history={HashRouter}>
//     <Route path="/" component={App}>
//       {/* <IndexRoute component={home.index} /> */}
//       <Route path="/about" component={home}></Route>
//     </Route>
//   </Router>
// )

// export default myrouter

// import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={home} />
    </Switch>
  </HashRouter>
);


export default BasicRoute;