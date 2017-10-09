let originalStorage = JSON.parse(localStorage.getItem("homeInventory"));


  //Object 11
  const familyPortait = {
    "name": "Family Portrait",
    "type": "decor",
    "location": "living room",
    "description": "Annual family picture with our Christmas Tree"
  };

  //Object 12
  const dvdPlayer = {
    "name": "DVD Player",
    "type": "electronics",
    "location": "living room",
    "description": "DVD player that is best utilized during family movie nights"
  };

  //Object 13
  const bench = {
    "name": "Seating Bench",
    "type": "furniture",
    "location": "living room",
    "description": "Additional seating that can also be a great place to store mail and packages"
  };

  //adding new objects to arrays
  originalStorage.decor.push(familyPortait);
  originalStorage.electronics.push(dvdPlayer);
  originalStorage.furniture.push(bench);

  //stringify to store added data
  const updatingStorageString = JSON.stringify(originalStorage);
  localStorage.setItem("updatedHomeInventory", updatingStorageString);

  //parse to read added data
  const updatedStoredInventory = JSON.parse(localStorage.getItem("updatedHomeInventory"));

console.log(updatedStoredInventory);
