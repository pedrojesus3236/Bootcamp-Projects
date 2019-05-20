

class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.debts = 0;
    }
}

class NormalCostumer extends Customer {
    constructor(name, balance) {
        super(name, balance);
    }
}

class VIPCostumer extends Customer {
    constructor(name, balance) {
        super(name, balance);
    }
}

class Product {

    constructor(name, price, category, units) {

        this.name = name;
        this.price = price;
        this.category = category;
        this.units = units;
    }
}

class ProductNormal extends Product {

    constructor(name, price, category, units) {
        super(name, price, category, units);
    }
}

class ProductVIP extends Product {

    constructor(name, price, category, units) {
        super(name, price, category, units);
    }
}


let clients = [];

clients.push(new VIPCostumer(prompt("What is your name?"), Number(prompt("What is the balance?"))));
clients.push(new VIPCostumer(prompt("What is your name?"), Number(prompt("What is the balance?"))));
clients.push(new NormalCostumer(prompt("What is your name?"), Number(prompt("What is the balance?"))));
clients.push(new NormalCostumer(prompt("What is your name?"), Number(prompt("What is the balance?"))));


let numOfProducts = prompt("How many products do you have?");

let products = [];

for (let i = 0; i < numOfProducts; i++) {

    let productName = prompt("Name?");
    let productPrice = Number(prompt("Price"));
    let productCategory = prompt("Category?");
    let productUnits = Number(prompt("Units?"));
    let productType = prompt("Type?");

    if (productType === "Vip") {

        products.push(new ProductVIP(productName, productPrice, productCategory, productUnits));

    } else {

        products.push(new ProductNormal(productName, productPrice, productCategory, productUnits));
    }
}


alert("The store is open !");


let question = false
let askQuestion = prompt("Whats your name");

while (question === false) {

    alert("list of products:");

    for (let i = 0; i < products.length; i++) {

        alert(products[i].name + " " + products[i].price + " " + products[i].category + " " + products[i].units);
    }

    let questionToBuy = prompt("What product to you want to buy?");

    for (let i = 0; i < products.length; i++) {

        if (questionToBuy === products[i].name) {  

            if (products[i].units >= 1) {

                for (let j = 0; j < clients.length; j++) {

                    if (askQuestion === clients[j].name) {

                        if (clients[j] instanceof NormalCostumer && products[i] instanceof ProductVIP) {

                            alert("You are not on the VIP list, sorry");

                        } else {

                            if ((clients[j].balance - products[i].price) > 0) {

                                alert("Thank you for your purchase, bye");
                                products[i].units--;
                                clients[j].balance -= products[i].price;
                            } else {

                                alert("Your credit card does not work, you don't have money");
                            }
                        }
                    }
                }
            } else {

                alert("We ran out of " + questionToBuy + ", sorry");
            }
        }
    }

    askQuestion = prompt("Whats your name");

    if (askQuestion === "store_closed*") {

        question = true;
    }
}