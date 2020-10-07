const square = function(x){
    return x*x
}

const arrowSquare = (x) =>{
    return x*x
}

const onlineArrowSquare = (x) => x*x

console.log(square(3));
console.log(arrowSquare(4));
console.log(onlineArrowSquare(5));

const event={
    name:"Birthday bash",
    guestList: ['Anoop', 'Aneena', 'Achoose'],
    printGuestList(){
        console.log("Welcome to "+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name);
        })
    }
}
event.printGuestList()