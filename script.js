// Homework-1
let text = "Hello world";
text = text.split("");
let value=0;
for (let i = 0; i < text.length; i++) {
    if (text[i] != ' ') {
        value += i;
    }
}
console.log(value);

// Homework-2
let array = [];

for (let i = 1; i <= 300; i++) {
    array.push({name:"someone" + i})
}

let resArray = [];

for (let j = 0; j < array.length; j++) {
    resArray.push(array[j].name)
}
console.log(resArray);