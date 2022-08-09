let car = {
    carname : "sonata",
    ph : 200,
    start : function() {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    },
};

console.log(car.carname);
console.log(car.start());