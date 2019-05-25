import firebase from 'firebase/app';
import auth from './components/auth/auth';
import MyNavbar from './components/myNavbar/MyNavbar';
import authData from './helpers/data/authData';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authStringBuilder();
};

init();

export default { init };
