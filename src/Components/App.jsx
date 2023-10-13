import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route,Switch } from 'react-router-dom';

const App = () => {
  return <div> 
  <CssBaseline />
  <main> 
    <Switch>
      <Route exact path ="/">
        <h1>Home</h1>
      </Route>
    </Switch>
  </main>
    </div>;
}

export default App;
