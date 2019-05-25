import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birfdayStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthday) => {
    const domString = `
    <h1>${birthday.date}</h1>
    <img src="${birthday.imageUrl}" alt="neon sign that says honky tonk"/>
    <h2>${birthday.location} @ ${birthday.time}</h2>
    `;
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birfday', err));
};

export default { birfdayStringBuilder };
