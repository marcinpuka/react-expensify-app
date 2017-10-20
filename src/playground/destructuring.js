const person = {
    name: "Andrew", 
    age: 26, 
    location: {
        city: "Philadelphia", 
        temp: 0
    }
};

//const name = person.name;
//const age = person.age;

// const { name, age} = person;

// console.log(`${name} is ${age}.`);

// const {name: user} = person;
// const {city, temp: temperature = 36 } = person.location;

// console.log(`It is  ${temperature} in ${city} and ${user} is boiling.`);

//--- IMPORTANT ---//
const {name, age, location: {city, temp:temperature}} = person;
console.log(`It is  ${temperature} in ${city} and ${name} is boiling.`);



// const book = {
//     title: "Ego is the Enemy", 
//     author: "Ryan Holiday", 
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "self-published"} = book.publisher;

// console.log(publisherName);

// const address = [
//     '1299 S Juniper Street', 
//     'Phila',
//     'Pennsylvania', 
//     '19147'
// ];

// const [, , state = "New York", zip] = address;

// console.log(`You are in ${state}`);

// const item = ["Coffee" , "$2.0", "$2.50", "$2.75"];

// const [product, , , lg] = item;

// console.log(`A large ${product} (hot) costs ${lg}`);




