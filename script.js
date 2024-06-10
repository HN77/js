// Exercice 1 : Chat Simulator

const firstname_1 = 'Stella';
const firstname_2 = 'Marcus';
const day_state_1 = 'Très bien';
const day_state_2 = 'Plutôt bien oui';
const hour = 11;
const day = 'mardi';

console.log(firstname_1 + ' ' + ': Bonjour');
console.log(
  firstname_2 + ' ' + ': Bonjour' + ' ' + firstname_1 + '! Comment vas-tu ?'
);
console.log(firstname_1 + ' : ' + day_state_1 + ', et toi ?');
console.log(firstname_2 + ' : ' + day_state_2 + ', je te remercie.');
console.log(firstname_1 + ' : Quelle heure est-il ?');
console.log(firstname_2 + ' : Il est ' + hour + ' heures');
console.log(firstname_1 + ' : D’acc, merci.');
console.log(firstname_2 + ' : Où manges-tu aujourd’hui ?');
console.log(firstname_1 + ' : Je rentre chez moi comme tous les ' + day + 's');
console.log(firstname_2 + ' : D’acc.');

// Exercice 2 : International Majority
const age = 21;

if (age <= 18) {
  console.log('Vous êtes mineur');
} else if (age >= 21) {
  console.log('Hey ! Vous êtes majeur !');
  console.log('Vous avez atteint la majorité internationale.');
} else {
  console.log('Hey ! Vous êtes majeur !');
}

const number_1 = 44;
const number_2 = 44;
const number_3 = 33;

if (number_1 === number_2 && number_2 === number_3) {
  console.log('Les trois variables sont identiques.');
} else if (
  number_1 === number_2 ||
  number_2 === number_3 ||
  number_1 === number_3
) {
  console.log('Deux des variables sont de valeurs égales.');
} else {
  console.log('Les trois variables sont différentes.');
}