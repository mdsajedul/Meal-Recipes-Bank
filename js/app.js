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
        
        <a id="see-more" onclick="mealDetails('${meal.strMeal}')" data-bs-toggle="modal" data-bs-target="#see-more-leModal" class="btn btn-primary">See more</a>
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

const mealDetails=(mealName)=>{
    //console.log(mealName);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url).then(res=>res.json().then(data=>mealDetailsInModal(data.meals[0])));
        
}

const mealDetailsInModal=(meal)=>{

    const mealTitle = document.getElementById('ModalLabel');
    mealTitle.innerText='';
    console.log(meal.strMeal)
    mealTitle.innerText=meal.strMeal

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML=`
    <img class="card-img-top mt-2 border rounded " src="${meal.strMealThumb}" alt="" height="200" width=100%>
    <div class="card-body">
        <p class="card-text">${meal.strInstructions}</p>
    </div>
    `;
}