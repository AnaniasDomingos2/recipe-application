window.onload = function () {
    var selectedRecipe = JSON.parse(localStorage.getItem('selectedRecipe'));

    if (selectedRecipe) {
        document.querySelector('.recipe-name').innerText = selectedRecipe.name;
        document.querySelector('.recipe-image').src = selectedRecipe.image;
        document.querySelector('.recipe-time').innerHTML = `<img src="./assets/mdi--clock-time-eight-outline 1.svg" alt="Time">${selectedRecipe.time}`;
        document.querySelector('.recipe-temperature').innerHTML = `<img src="./assets/mdi--fire.svg" alt="Temperature">${selectedRecipe.temperature}`;
        document.querySelector('.recipe-rating').innerHTML = `<img src="./assets/mdi--star.svg" alt="Rating"> ${selectedRecipe.rating} (${selectedRecipe.ratings})`;

        // Lista de ingredientes
        const ingredientsList = document.querySelector('.ingredients-list');
        selectedRecipe.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('div');
            ingredientItem.classList.add('ingredient-item');
            ingredientItem.innerHTML = `<input type="checkbox" id="${ingredient}" class="custom-checkbox"><label for="${ingredient}">${ingredient}</label>`
            ingredientsList.appendChild(ingredientItem);
        });

        // Instruções
        const instructionsList = document.querySelector('.instructions-list');
        selectedRecipe.instructions.forEach((instruction, index) => {
            const instructionItem = document.createElement('p');
            instructionItem.classList.add('instruction-item');
            instructionItem.innerHTML = `<span class="instruction-no">${index + 1}</span> ${instruction}`
            instructionsList.appendChild(instructionItem);
        });

        const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
        checkboxInputs.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const label = document.querySelector(`label[for="${this.id}"]`);
                if (label) {
                    if (this.checked) {
                        label.classList.add('checked');
                    } else {
                        label.classList.remove('checked');
                    }
                } else {
                    console.error('Label not found for the checkbox:', this.id);
                }
            });
        });
    } else {
        alert('Recipe not found');
    }
};