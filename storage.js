//Object 1
const ballChair = {
    "name": "Gaiam Balance Ball Chair",
    "type": "furniture",
    "location": "bedroom",
    "description": "This chair makes sitting for long periods of time more comfortable"
  };

  //Object 2
  const laptop = {
    "name": "MacBook Pro",
    "type": "electronics",
    "location": "bedroom",
    "description": "2011 MacBook Pro purchase early 2012"
  };

  //Object 3
  const dresser = {
    "name": "Wooden Dresser",
    "type": "furniture",
    "location": "bedroom",
    "description": "5 drawer wooden dresser that is great for holding all of your clothes"
  };

  //Object 4
  const chromecast = {
    "name": "Chromecast Streaming Device",
    "type": "electronics",
    "location": "living room",
    "description": "This device makes it easy to stream movies and tv shows from your computer to your tv"
  };

  //Object 5
  const neverlandPicture = {
    "name": "Neverland Wall Hanging",
    "type": "decor",
    "location": "bedroom",
    "description": "Map of Neverland from Peter Pan"
  };

  //Object 6
  const dolphinCrossStitch= {
    "name": "Dolphin Cross Stitch Hanging",
    "type": "decor",
    "location": "living room",
    "description": "5x7 inch cross stitch dolphin picture"
  };

  //Object 7
  const vcr = {
    "name": "VCR",
    "type": "electronics",
    "location": "living room",
    "description": "VCR to keep my roommates and my extensive VHS collective alive"
  };

  //Object 8
  const wallOfBadassery = {
    "name": "The Wall of Badassery",
    "type": "decor",
    "location": "living room",
    "description": "A collection of extraordinary female figures in society"
  };

  //Object 9
  const recordPlayer = {
    "name": "Record Player",
    "type": "electronics",
    "location": "living room",
    "description": "An easy way to listen to your favorite records"
  };

  //Object 10
  const vintageTrunk = {
    "name": "Vintage Trunk Coffee Table",
    "type": "furniture",
    "location": "living room",
    "description": "This repurposed vintage trunk makes for a unique coffee table in the living room"
  };

  //arrays 
  let decor = [];
  let furniture = [];
  let electronics = [];
  
  //Home Inventory
  let HomeInventory = {
    "furniture": furniture,
    "decor": decor,
    "electronics": electronics
  };

  //add objects to arrays
  decor.push(neverlandPicture, dolphinCrossStitch, wallOfBadassery);
  furniture.push(ballChair, dresser, vintageTrunk);
  electronics.push(laptop, chromecast, vcr, recordPlayer);

  
  //stringify to store data
  const homeInventoryString = JSON.stringify(HomeInventory);
  localStorage.setItem("homeInventory", homeInventoryString);

  //parse to read data
  const storedInventory = JSON.parse(localStorage.getItem("homeInventory"));
  