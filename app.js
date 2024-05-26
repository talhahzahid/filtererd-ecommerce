const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech",
        image: "path/to/wireless_mouse.jpg" // Replace with actual image path
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        image: "path/to/smartphone.jpg"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell",
        image: "path/to/led_monitor.jpg"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL",
        image: "path/to/bluetooth_speaker.jpg"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple",
        image: "path/to/laptop.jpg"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike",
        image: "path/to/running_shoes.jpg"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas",
        image: "path/to/sneakers.jpg"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva",
        image: "path/to/sandals.jpg"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks",
        image: "path/to/formal_shoes.jpg"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland",
        image: "path/to/boots.jpg"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster",
        image: "path/to/blender.jpg"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic",
        image: "path/to/microwave_oven.jpg"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG",
        image: "path/to/air_conditioner.jpg"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson",
        image: "path/to/vacuum_cleaner.jpg"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville",
        image: "path/to/toaster.jpg"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine",
        image: "path/to/notebook.jpg"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker",
        image: "path/to/pen_set.jpg"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie",
        image: "path/to/highlighters.jpg"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline",
        image: "path/to/stapler.jpg"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren",
        image: "path/to/planner.jpg"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea",
        image: "path/to/desk_chair.jpg"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm",
        image: "path/to/coffee_table.jpg"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture",
        image: "path/to/sofa.jpg"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder",
        image: "path/to/bookshelf.jpg"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn",
        image: "path/to/dining_table.jpg"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam",
        image: "path/to/yoga_mat.jpg"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex",
        image: "path/to/dumbbells.jpg"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack",
        image: "path/to/treadmill.jpg"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify",
        image: "path/to/resistance_bands.jpg"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton",
        image: "path/to/exercise_bike.jpg"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig",
        image: "path/to/coffee_maker.jpg"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja",
        image: "path/to/air_fryer.jpg"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid",
        image: "path/to/stand_mixer.jpg"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool",
        image: "path/to/refrigerator.jpg"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch",
        image: "path/to/dishwasher.jpg"
    }
];

const div = document.querySelector('.container');

const filterItems = (btn)=>{
    div.innerHTML = " "
    console.log(btn.innerHTML)
    const filtered = products.filter (item=> item.category === btn.innerHTML).map(item=>{
        div.innerHTML += `<div class="card mt-2 p-3" style="width: 16rem; color : white; background-color : black;>
        <div class="card-body">
            <h5 class="card-title">Product Name: ${item.name}</h5>
            <hr/>
            <p class="card-text">Price: $${item.price}<br>Category: ${item.category}<br>Brand: ${item.brand}</p>
        </div>
    </div>`;
    })
}





let allItems = ()=>{
    div.innerHTML = ''
    products.map(item=>{
        div.innerHTML += `<div class="card mt-2 p-3" style="width: 16rem; color : white; background-color : black;>
        <div class="card-body">
            <h5 class="card-title">Product Name: ${item.name}</h5>
            <hr/>
            <p class="card-text">Price: $${item.price}<br>Category: ${item.category}<br>Brand: ${item.brand}</p>
        </div>
    </div>`;

    })
 
};






// const arrayItems = products.filter(item => item.category === 'Electronics').filter(item=>{
//     return item.price > 200
// })
// console.log(arrayItems)




































