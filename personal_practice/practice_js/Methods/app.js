const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says MEOWW`);
  },
};

const meow2 = cat.meow;
//실행하지는않고 메서드를 가리키기만함.
