import util from '../../helpers/util';

const birfdayStringBuilder = () => {
  const domString = `
  <h1>Birfday</h1>`;
  util.printToDom('birfday', domString);
};

export default { birfdayStringBuilder };
