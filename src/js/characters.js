/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Придумайте имя Name более 2 или менее 10 символов');
    }
    const arrValidType = [
      'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
    ];
    if (!arrValidType.includes(type)) {
      throw new Error('Выберите другой тип игрока');
    }
    this.name = name;
    this.type = type;
    this.healse = 100;
    this.level = 1;


    const objDefence = {
      Bowman: 25,
      Swordsman: 10,
      Magician: 40,
      Undead: 25,
      Zombie: 10,
      Daemon: 40,
    };
    for (const item in objDefence) {
      if (item === this.type) {
        this.defence = objDefence[item];
      }
    }
  }

  levelUp() {
    if (this.healse === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.healse = 100;
  }

  damage(points) {
    this.healse -= points * (1 - this.defence / 100);
    if (this.healse < 0) {
      this.healse = 0;
    }
  }
}

export class MathCaracters extends Character {
  constructor(name, type, distans) {
    super(name, type);
    this.distans = distans;
    this.stoned = false;
  }

  get attack() {
    const _attack = this._attack * (1 - this.distans * 0.1);
    if (!this.stoned) {
      return _attack;
    }
    return Math.round(_attack - (Math.log2(this.distans) * 5));
  }

  set attack(attackLevel) {
    this._attack = attackLevel;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(log) {
    this._stoned = log;
  }
}

const MC = new MathCaracters('mag', 'Magician', 5);
console.log(MC);
console.log(MC.attack = 50);
MC.stoned = true;
console.log(MC.attack);
// MC.stoned = true;
// console.log(MC._stoned);
// console.log(MC.attack);
