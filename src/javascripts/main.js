import firebase from 'firebase/app';
import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import MyNavbar from './components/myNavbar/MyNavbar';
import authData from './helpers/data/authData';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();

export default { init };
