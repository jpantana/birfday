import util from '../../helpers/util';

const authStringBuilder = () => {
  const domString = `
  <h1>Auth</h1>`;
  util.printToDom('auth', domString);
};

export default { authStringBuilder };
