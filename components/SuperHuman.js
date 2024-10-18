// Human will be the parent of SuperHuman
class Human {
    constructor(codeName, age, gender, normalHuman, profilePic) {
        this.codeName = codeName;
        this.age = age;
        this.gender = gender;
        this.normalHuman = normalHuman;
        this.profilePic = profilePic;
    }

    info() {
        console.log(`Name: ${this.codeName}, Age: ${this.age}, Gender: ${this.gender}`);
    }

    speak() {
        console.log(`Hello, my name is ${this.codeName} and I am so excited to meet you!`);
    }
}

// SuperHuman will be the child of Human

class SuperHuman extends Human  {
    constructor(codeName, age, gender, normalHuman, profilePic, powers, affiliation) {
        super(codeName, age, gender, normalHuman, profilePic);
        this.powers = powers;
        this.affiliation = affiliation;
    }

    showPowers() {
        console.log(`
            +++++++++++++
            + ${this.profilePic}+
            +++++++++++++

            Name: ${this.codeName}
            Affiliation: ${this.affiliation}
            Age: ${this.age}
            Gender: ${this.gender}
            Powers: [${this.powers.join(", ")}]
            `);
    }
}

class Villain extends SuperHuman {
    constructor(codeName, age, gender, normalHuman, profilePic, powers, affiliation, evilPlan) {
        super(codeName, age, gender, normalHuman, profilePic, powers, affiliation);
        this.evilPlan = evilPlan;
    }

    showPlan() {
        console.log(`${this.evilPlan}`)
    }

}


class Hero extends SuperHuman {
    constructor(codeName, age, gender, normalHuman, profilePic, powers, affiliation) {
        super(codeName, age, gender, normalHuman, profilePic, powers, affiliation);
    }
}

let superman = new Hero(
    "Superman", 
    30, 
    "Male", 
    false, 
    "/images/bald-mountains.jpg",
    ["Super Strength", "Flight", "Invisibility", "Super Speed"],
    "Justice League"
);

superman.speak();
let zoom = new Villain(
    "Zoom",
     30, 
     "Male",
      false, 
      "/images/bald-mountains.jpg",
      ["Super Speed"],
      "Injustice League",
    "I am going to destroy the world!")
      ;

zoom.speak()
zoom.showPlan();
// zoom.speak();
// zoom.showPowers();
// let flash = new SuperHuman("Flash", 25, "Male", false, ["Super Strength", "Flight", "Invisibility", "Super Speed"]);

// flash.showPowers();
// flash.speak();
// let human = new Human("John", 25, "Male", true);
// human.info();
// human.speak();