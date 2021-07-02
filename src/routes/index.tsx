import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)
