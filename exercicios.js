/*
 * escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */
const dataPerson = (cpf, bornDate, postalCode) => {
  const cpfRegex =  /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/;
  const cpfFormatted = cpf.replace(cpfRegex, '$1.$2.$3-$4');

  const dateRegex = /([0-9]{2})([0-9]{2})([0-9]{4})/;
  const dateFormatted = bornDate.replace(dateRegex, '$1/$2/$3');

  const postalCodeRegex = /([0-9]{5})([0-9]{3})/;
  const postalCodeFormatted = postalCode.replace(postalCodeRegex, '$1-$2');
  
  return {
    cpf: cpfFormatted,
    bornDate: dateFormatted,
    postalCode: postalCodeFormatted
  };
};

console.log(dataPerson('11111111111', '01012022', '12345678'));

/*
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe"
 * };
 * 
 * Dado o objeto acima, extraia cada propriedade com destructuring
 */
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

/*
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe",
 *  age: 30,
 *  country: "Brazil",
 *  city: "São Paulo"
 *  state: "SP",
 *  postalCode: "01001001",
 *  neighbohur: "Centro"
 * }
 * 
 * Dado o objeto acima, extraia os dados pessoais de John e todo restante (endereço) em uma variável
 * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
 */
const newPerson = {
  firstName02: 'Johnny',
  lastName02: 'Does',
  age: 30,
  country: 'Brazil',
  city: 'São Paulo',
  state: 'SP',
  postalCode: '01001001',
  neighborhood: 'Centro'
}

const { firstName02, lastName02, age, country, city, state, postalCode, neighborhood  } = newPerson;
const newPerson2 = {
  firstName02, 
  lastName02,
  age,
  endereco: {
    country,
    city,
    state,
    postalCode,
    neighborhood
  }
};
console.log(newPerson2);