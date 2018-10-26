var mysql = require('mysql');
var inquirer = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "wingo",
    database: "bamazon"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    shopperSearch();
});

function shopperSearch() {
    var query = "SELECT * FROM products";
    con.query(query,
        function (err, res) {
            console.log(`
            CURRENT INVENTORY
            `)
            for (var i = 0; i < res.length; i++) {
                console.log(`
            Product: ${res[i].product_name}
            Product ID: ${res[i].item_id}
            Department: ${res[i].department_name}
            Price: $ ${res[i].price}
            Current Stock: ${res[i].stock_quantity}
            `)
            }
            inquirer
                .prompt({
                    name: "choice",
                    type: "list",
                    message: "Which product would you like to purchase?",
                    choices: [
                        "coffee filters",
                        "forks, stainless steel",
                        "screwdrivers",
                        "lawnmower",
                        "mini fridge",
                        "spoons, stainless steel"
                    ]
                })
                .then(function (answer) {
                    var query = "SELECT price FROM products WHERE ?";
                    con.query(query, { product_name: answer.choice }, function (err, res) {
                        for (var i = 0; i < res.length; i++) {
                            console.log(`
                            Thank you for purchasing ${answer.choice}!
                            Your total is $ ${res[i].price}.
                            `)
                        }
                    })
                    con.query("UPDATE products SET stock_quantity = stock_quantity - 1 WHERE ?",
                    {
                        product_name: answer.choice
                    }
                    );
                    setTimeout(shopperSearch, 8000);

                });
        })
}
