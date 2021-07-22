import {MathCaracters} from '../characters';

test(' Checking the results of a stoned attack  ', () => {
  const mathCaracters = new MathCaracters('mag', 'Magician', 5);
  mathCaracters.attack = 50;

  expect(mathCaracters.attack).toBe(25);
});

test(' Checking attack results without stoned ', () => {
  const mathCaracters = new MathCaracters('mag', 'Magician', 5);
  mathCaracters.attack = 50;
  mathCaracters.stoned = true;
  expect(mathCaracters.attack).toBe(13);
});
