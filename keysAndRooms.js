var unlockRooms = function(rooms) {
  var lockedRooms = [];
  for (var i = 0; i < rooms.length; i++) {
    lockedRooms.push(i);
  }

  var traverseRooms = function(num) {
    if (lockedRooms[num] !== undefined) {
      //       lockedRooms.splice(lockedRooms.indexOf(num), 1);
      lockedRooms[lockedRooms.indexOf(num)] = undefined;
    }

    rooms[num].forEach(function(key) {
      if (lockedRooms[key] !== undefined) {
        traverseRooms(key);
      }
    });
  };

  traverseRooms(0);

  return lockedRooms.filter(x => x !== undefined).length === 0;
};
