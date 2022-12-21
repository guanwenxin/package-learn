const a = 1;
const b = () => console.log('hello word');

const c = {
    name: 'hahaha',
    age: '111',
    info: {}
}

const {name, age: peopelAge, info} = c;

// const test = c && c.info && c.info.name
const test = c?.info?.name?.age

// const array = [1, 2, 3, 4]
// array.forEach(item => console.log(item))

// const asyncTask = new Promise((resolve, reject) => {
//     resolve(1)
// })