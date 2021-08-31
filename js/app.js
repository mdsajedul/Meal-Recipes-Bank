function loadMeal(){
    
    const url='https://www.themealdb.com/api/json/v1/1/search.php?s';
    fetchUrlData(url);
}


const  fetchUrlData=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>ViewMeal(data.meals))
}

loadMeal()

function ViewMeal(data){
    for(meal of data ){
        mealPushInPage(meal)
    
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
        
        <a id="see-more" data-bs-toggle="modal" data-bs-target="#see-more-leModal" class="btn btn-primary">See more</a>
    </div>


    
    <div class="modal fade" id="see-more-leModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class=" modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">${meal.strMeal}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>


    `;
    mealContainer.appendChild(div);

}

document.getElementById('search-btn').addEventListener('click',function(){
    const mealInput = document.getElementById('meal-input');
    const mealInputString = mealInput.value;
    mealSearch(mealInputString);
    mealInput.value='';
})

const mealSearch = (mealName)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetchUrlData(url);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.textContent='';
}



document.getElementById('home-btn1').addEventListener('click',()=>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.textContent='';
    loadMeal();
})
document.getElementById('home-btn2').addEventListener('click',()=>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.textContent='';
    loadMeal();
})
