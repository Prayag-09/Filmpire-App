import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './style';

import { Actors,MovieInfo,Movies,NavBar,Profile } from './index';

const App = () => {
const classes = useStyles();

  return (
        <div className='classes.root'> 
        <CssBaseline />
        <NavBar />
      <main className='classes.content'> 
      <div className='classes.toolbar' />
        <Switch>
          <Route exact path = "/movie/:id">
            <MovieInfo />
            <h1> Movie's Info </h1>
          </Route>
          <Route exact path = "/actors/:id">
            <Actors />
            <h1> Actors </h1>
          </Route>
          <Route exact path = "/">
            <Movies />
            <h1> Movies </h1>
          </Route>
          <Route exact path ="/profile/:id">
            <Profile />
            <h1> Profile </h1>
          </Route>
        </Switch>
      </main>
    </div>
)};

export default App;
