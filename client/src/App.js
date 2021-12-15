import React,{useEffect} from 'react';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import './App.css';
import { loadUser } from './actions/auth';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store={store}>
      <Router>
          <Navbar/>
          <Alert/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="profiles" element={<Profiles/>}/>
            <Route path="profile/:id" element={<Profile/>}/>
            <Route path="dashboard" element={<PrivateRoute component={Dashboard}/>}/>
            <Route path="create-profile" element={<PrivateRoute component={CreateProfile}/>}/>
            <Route path="edit-profile" element={<PrivateRoute component={EditProfile}/>}/>
            <Route path="add-experience" element={<PrivateRoute component={AddExperience}/>}/>
            <Route path="add-education" element={<PrivateRoute component={AddEducation}/>}/>
            <Route path="posts" element={<PrivateRoute component={Posts}/>}/>
            <Route path="posts/:id" element={<PrivateRoute component={Post}/>}/>



          </Routes>
      </Router>
</Provider>
)};
export default App;
