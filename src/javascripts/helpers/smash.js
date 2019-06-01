const friendRsvps = (friends, rsvps) => friends.map((friend) => {
  console.error('rsvps', rsvps);
  console.error('friends', friends);
  const f = friend;
  const rsvp = rsvps.find(r => r.friendId === f.id);
  console.error(rsvp);
  if (rsvp) {
    f.rsvpId = rsvp.id;
    f.statusId = rsvp.statusId;
  }
  return f;
});

export default { friendRsvps };
