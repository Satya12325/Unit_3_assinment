const submit = document.getElementById('submit');
const search = document.getElementById('search');
const mealEl = document.getElementById('meals');
const resultHeading = document.getElementsByClassName('result-heading');
const singleMeal = document.getElementById('single-meal');


// search meal 
function searchMeal(e) {
    e.preventDefault();


    const MealName = search.value;
    console.log(MealName);

    //check for empty

    if (MealName.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${MealName}`)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Your Serching Meal ${MealName}</h2>`;


                if (data.meals === null) {
                    resultHeading.innerHTML = `<h2>No Serching Meal found for ${MealName}</h2>>`
                }
                else{
                    mealEl.innerHTML = data.meals.map(
                        (item) =>
                        `<div class="meal">
                        <img src="${item.strMealThumb}" alt="${item.strMeal}">
                        <div class="mel-name" data-meals-id="${item.idMeal}">
                        <h3 class="meal-name">${item.strMeal}</h3>
                        </div>
                        </div>`
                    
                    )
                }
            })


    }
}



//add event listnear 

submit.addEventListener('submit', searchMeal);