import '../styles/main.scss';
import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';

const init = () => {
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();

export default { init };
