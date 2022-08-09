let testobj = {
    test : "test",
};
const array = ["test", 14, testobj, 12.234234];
console.log(array[1]);

// This we don't use
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// This we only use a little
for(element of array) {
    console.log(element);
}

// Mainly use this
array.map((element) => {
    console.log(element);
})