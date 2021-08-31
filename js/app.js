function loadMeal(){
    const url='https://www.themealdb.com/api/json/v1/1/search.php?s';
    fetch(url)
    .then(res=>res.json())
    .then(data=>ViewMeal(data.meals))
}

loadMeal()

function ViewMeal(data){
    for(meal of data ){
        mealPushInPage(meal)
        console.log(meal.strInstructions)
    }
}

function mealPushInPage(meal){
    const mealContainer = document.getElementById('meal-container');
    const div = document.createElement('div');
    div.classList.add('col-lg-3')
    div.classList.add('card');
    div.classList.add('mx-1');

    div.innerHTML=`
    <img class="card-img-top mt-2 border rounded " src="${meal.strMealThumb}" alt="" height="200" width=100%>
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.substr(0,95)}...</p>
        
        <a href="#" class="btn btn-primary">See more</a>
    </div>
    `;
    mealContainer.appendChild(div);

}

document.getElementById('search-btn').addEventListener('click',function(){
    const mealInput = document.getElementById('meal-input');
    const mealInputString = mealInput.value;
    console.log(mealInputString)
})

function mealSearch(){

}