import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import friendsData from '../../helpers/data/friendsData';


const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(err => console.error('no new friend for you', err));
};

const newFriendBtn = () => {
  // function shows what gets hidden and shown
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domString = `
  <button id="add-friend-btn" class="btn btn-success">Add Friend</button>`;
  util.printToDom('friends', domString);
  document.getElementById('add-friend-btn').addEventListener('click', newFriendBtn);
};

export default { showFriends };
