// Module pattern

let FriendsModule = (function() {
  let y = 18;
  let friends = [
    {
      name: "Darya"
    },
    {
      name: "Olya"
    }
  ];

  function printFriends() {
    friends.forEach((friend, index) =>
      console.log(`Friend #${index + 1} is ${friend.name}`)
    );
  }

  /**
   * @param {Object} friend
   */
  function addFriend(friend) {
    friends.push(friend);
  }

  return {
    printFriends,
    addFriend
  };
})();

FriendsModule.addFriend({ name: "Kate" });
FriendsModule.printFriends();
