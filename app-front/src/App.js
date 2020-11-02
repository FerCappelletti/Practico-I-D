import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Notes from './components/Notes';
import Note from './components/Note';
import Users from './components/Users';

function App() {
  return (
	  <Router>
		  <NavBar />

		  <div className='container p-4'>
		  <Route exact path='/' component={Notes} />
		  <Route path='/edit/:id' component={Note} />
		  <Route path='/create' component={Note}/>
		  <Route path='/users' component={Users}/>
		  </div>
	</Router>
  );
}

export default App;
