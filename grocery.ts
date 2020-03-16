class Grocery {
    quantity: number;
    name: string;
    price: string;

    constructor(quant: number, nm: string, pr: string) {
        this.name = nm;
        this.price = pr;
        this.quantity = quant;
    }

    display(element: string): void {
        //console.log(this.quantity + " " + this.name +  " @ " + this.price);
        document.getElementById(element).innerHTML = this.quantity + " " + this.name +  " @ " + this.price;
    }
}

function showGroceries(){
    let bananas = new Grocery(2,"Bananas", "$0.60/lb")
    let milk = new Grocery(3,"Milk", "$3.00/Gal")
    let eggs = new Grocery(12,"Eggs", "$1.50/doz")
    bananas.display("bananas");
    milk.display("milk");
    eggs.display("eggs");
}

//showGroceries()