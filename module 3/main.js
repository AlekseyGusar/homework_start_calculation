
function Animal(name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.run = (speed) => { 
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
};

const rabbit = new Animal('Bear');
Object.freeze(rabbit);


class Animal {

  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

}

const wolf = new Animal("Wolf");
Object.freeze(wolf);

