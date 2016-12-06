import Cube from './cube';

let myCube = new Cube(4, 4, 4);

myCube.setName('Hank the cube');

console.log(`${myCube.getName()}'s volume is ${myCube.getVolume()}.`);
