let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value.trim();
  
  if (userInp.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (!data.meals) {
          result.innerHTML = `<h3>No Results Found</h3>`;
          return;
        }

        let myMeal = data.meals[0];
        let ingredients = [];
        let count = 1;

        for (let i in myMeal) {
          if (i.startsWith("strIngredient") && myMeal[i]) {
            let ingredient = myMeal[i];
            let measure = myMeal[`strMeasure${count}`];
            count++;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }

        result.innerHTML = `
          <img src=${myMeal.strMealThumb} alt="Meal Image">
          <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h4>${myMeal.strArea}</h4>
          </div>
          <div id="ingredient-con"></div>
          <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>
          </div>
          <button id="show-recipe">View Recipe</button>
        `;

        let ingredientCon = document.getElementById("ingredient-con");
        let ul = document.createElement("ul");

        ingredients.forEach((ingredient) => {
          let li = document.createElement("li");
          li.innerText = ingredient;
          ul.appendChild(li);
        });

        ingredientCon.appendChild(ul);

        let recipe = document.getElementById("recipe");
        let hideRecipe = document.getElementById("hide-recipe");
        let showRecipe = document.getElementById("show-recipe");

        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });

        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
      })
      .catch((error) => {
        console.error('Error fetching the meal data:', error);
        result.innerHTML = `<h3>Something went wrong. Please try again later.</h3>`;
      });
  }
});
