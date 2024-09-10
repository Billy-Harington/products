let products = [
    {
        name:"kefir",
        type: "milk",
        price:1200,


    },
    {
        name:"apple",
        type:"fruit",
        price:20000
    },
    {
        name:"Pivo",
        type:"alcohol",
        price:10000
    },
    {
        name:"vino",
        type:"alcohol",
        price:35000
    },
    {
        name:"yougurt",
        type:"milk",
        price:15000
    },
    {
        name:"banana",
        type:"fruit",
        price:20000
    },
    {
        name:"konyak sergey",
        type:"fruit",
        price:12000
    }
]


let categories = [
    {
        type: "milk",
        amount:0,
        products: [],
        money: 0,
        cheapest: 0
    },
    {
        type: "fruit",
        amount:0,
        products: [],
        money: 0,
        cheapest: 0
    },
    {
        type: "alcohol",
        amount:0,
        products: [],
        money: 0,
        cheapest: 0
    },
 
]

for (const product of products) {
    
    for (const category of categories) {
        if (product.type === category.type) {
            category.amount++
            category.products.push(product.name);
            category.money += product.price,
           cheapest = products.reduce((a,b)=>{
                if (a.price[0] < b.price) {
                    return a
                } return b
            })

           
            
            
        }
    }
}


console.log(categories);


