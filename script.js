console.log("Let's start!");



////////////////////////////////////////////////////////////
console.log("Part 1: Humble Beginnings");

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"]
      }
    },
    // Robin's dice roll method
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  adventurer.roll();


/////////////////////////////////////////////////////////////

  console.log("Part 2: Class Fantasy")

  class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
      }
  }

  // re-create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.companion.roll();

/////////////////////////////////////////////////////////////

console.log("Part 3: Class Features")

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }


  // create a Companion class with properties and methods specific to the companions
  class Companion extends Character {
    constructor(name, type) {
      super(name); 
      this.type = type; 
    }
  }

// Recreate Robin and his companions using the new classes
const robin1 = new Adventurer("Robin", "Fighter");
robin1.companion = new Companion("Leo", "Cat");
robin1.companion.companion = new Companion("Frank", "Flea");
robin1.companion.companion.inventory = ["small hat", "sunglasses"];

robin1.scout();


/////////////////////////////////////////////////////////////

console.log("Part 4: Class Uniforms");

class CharacterWithStatic {
    static MAX_HEALTH = 100; 
  
    constructor(name) {
      this.name = name;
      this.health = CharacterWithStatic.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  console.log(`Max health for all characters: ${CharacterWithStatic.MAX_HEALTH}`);
  



  class AdventurerWithStatic extends CharacterWithStatic {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!AdventurerWithStatic.ROLES.includes(role)) {
        throw new Error("Invalid role");
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  }
  

  console.log(`Available roles for adventurers: ${AdventurerWithStatic.ROLES.join(", ")}`);

  /////////////////////////////////////////////////////////////

console.log("Part 5: Gather your Party");

class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
  
    // Generate adventurer and add to array
    generate(name) {
      const newAdventurer = new AdventurerWithStatic(name, this.role);
      this.adventurers.push(newAdventurer);
    }
  
    // Find adventurer by index
    findByIndex(index) {
      return this.adventurers[index];
    }
  
    // Find adventurer by name
    findByName(name) {
      return this.adventurers.find(a => a.name === name);
    }
  }
  
  // Example of creating a healer factory
  const healers = new AdventurerFactory("Healer");
  healers.generate("Robin")

  console.log(`Found adventurer: ${healers.findByName("Robin")?.name || "not found"}`);


    /////////////////////////////////////////////////////////////

console.log("Part 6: Developing Skills");