

const data = [
    {
        "id": 0,
        "image": "./images/classic-margherita.jpg",
        "name": "Classic Margherita Pizza",
        "time": 15,
        "temperature": 300,
        "rating": 4.5,
        "ratings": 91,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil"],
        "instructions": [
            "Preheat the oven to 300°C.",
            "Spread tomato sauce over the dough, add mozzarella, and top with basil."
        ]
    },
    {
        "id": 1,
        "image": "./images/veggie-stir-fry.jpg",
        "name": "Vegan Stir-Fry",
        "time": 10,
        "temperature": 200,
        "rating": 3.5,
        "ratings": 26,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil"],
        "instructions": ["Preheat blablabla", "Second instruction"]
    },
    {
        "id": 2,
        "image": "./images/beef-and-broccoli-stir-fry.jpeg",
        "name": "Beef and Broccoli Stir-Fry",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Milk", "Cow meet"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 3,
        "image": "./images/caprese-salad.jpeg",
        "name": "Crapese Salad",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Milk", "Cow meet"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 4,
        "image": "./images/chicken-alfredo-pasta.jpeg",
        "name": "Chicken Alfredo-Pasta",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Milk", "Cow meet"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 5,
        "image": "./images/chicken-biryani.jpg",
        "name": "Chicken Biryani",
        "time": 25,
        "temperature": 150,
        "rating": 3.7,
        "ratings": 121,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Milk", "Cow meet"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla", "Blabla blabla"]
    },
    {
        "id": 6,
        "image": "./images/chocolate-chip-cookies.jpg",
        "name": "Chocolate Chip Cookies",
        "time": 20,
        "temperature": 350,
        "rating": 3.7,
        "ratings": 20,
        "ingredients": ["Milk", "Mozzarella cheese", "Fresh basil", "Milk"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 7,
        "image": "./images/mango-salad-chicken.jpeg",
        "name": "Mango Salad Chicken",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Milk", "Cow meet"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 8,
        "image": "./images/moamba-de-galinha-com-funge.png",
        "name": "Chicken Peanuts Souce with Funge",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Fuba"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 9,
        "image": "./images/shrimp-scampi-pasta.png",
        "name": "Shrimp Scampi Pasta",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Fuba"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 10,
        "image": "./images/tomato-basil-bruschetta.jpeg",
        "name": "Tomato Basil Bruschetta",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Fuba"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    },
    {
        "id": 11,
        "image": "./images/quinoa-salad-with-avocado.jpeg",
        "name": "Quinoa Salad With Avocado",
        "time": 20,
        "temperature": 350,
        "rating": 4.7,
        "ratings": 120,
        "ingredients": ["Tomato sauce", "Mozzarella cheese", "Fresh basil", "Fuba"],
        "instructions": ["Preheat blablabla", "Second instruction","Lorem ipsum blabla"]
    }
]
window.onload = function () {
    const mainContainer = document.querySelector('#body');
    data.forEach(element => {
        const pizzaCard = document.createElement('div');
        pizzaCard.classList.add('pizza-card');
        pizzaCard.innerHTML = `
        <img src="${element.image}" alt="${element.name}" class="recipe-image">
        <div class="card-body">
        <p class="recipe-name">${element.name}</p>
        <p class="recipe-details"><img src="./assets/mdi--clock-time-eight-outline 1.svg" alt="Time"><span>${element.time} </span>
        &nbsp;&nbsp;&nbsp;&nbsp;<img src="./assets/mdi--fire.svg" alt="Temperature"><span>${element.temperature}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;<img src="./assets/mdi--star.svg" alt="Rating"><span>${element.rating} (${element.ratings})</span>
        </p>
        <button class="browse showRecipe" value="${element.id}" style="cursor:pointer">View Recipe</button>
        </div>`;
        mainContainer.appendChild(pizzaCard);
    });

    var showRecipe = document.querySelectorAll('.showRecipe');
    showRecipe.forEach(function (button) {
        button.addEventListener('click', function () {
            var recipeId = button.value;
            var selectedRecipe = data.find(recipe => recipe.id == recipeId);
            localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe));
            window.location.href = './recipe.html';
        });
    });
    

}