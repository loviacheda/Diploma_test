
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Signup from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import Room from './Pages/Room/Room.jsx';
import './index.css';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Signup />,
  },
  {
    //path: '/login',
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/room',
    element: <Room />,
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>
  );
}

export default App;

/*import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/