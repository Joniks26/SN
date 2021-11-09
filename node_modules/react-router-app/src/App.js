import React from 'react';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';

// simple header
const Header = () => {
  let history = useHistory();
  const onClickHandler = () => {
    console.log('clicked on button to go to about page');
    history.push('/aboutt');
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/homee">Home</Link>
        </li>
        <li>
          <Button onClick={onClickHandler}>to About</Button>
        </li>
        <li>
          <Link to="/userss">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
function ReactRouterComponent() {
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/aboutt">
            <About />
          </Route>
          <Route path="/userss">
            <Users />
          </Route>
          <Route path="/homee">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default ReactRouterComponent;
