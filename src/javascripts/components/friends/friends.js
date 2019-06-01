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
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no new friend for you', err));
};

const newFriendBtn = () => {
  // function shows what gets hidden and shown
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = (friends) => {
  let domString = `
  <button id="add-friend-btn" class="btn btn-success">Add Friend</button>`;
  friends.forEach((friend) => {
    domString += `<h4>${friend.name}</h4>`;
  });
  util.printToDom('friends', domString);
  document.getElementById('add-friend-btn').addEventListener('click', newFriendBtn);
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      showFriends(friends);
      console.error(friends);
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
