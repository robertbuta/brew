const dataTitle = document.getElementById("name");
const dataContent = document.getElementById("instructions");
const ingr = document.getElementById("ing");
const recipe = document.getElementById("recipe");




document.getElementById("brew").addEventListener("click", getRecipe);

function getRecipe() {
    let sound = new Audio('sound.mp3');
    sound.play();
    recipe.style.visibility = "visible";
    ingr.innerHTML = " ";
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
    xhttp.onload = function() {
        let data = JSON.parse(xhttp.responseText);

        dataTitle.innerHTML = data.drinks[0].strDrink;
        dataContent.innerHTML = data.drinks[0].strInstructions;
        document.getElementById("photo").src = data.drinks[0].strDrinkThumb;
        let ingredients = [
            data.drinks[0].strIngredient1 + " " + data.drinks[0].strMeasure1,
            data.drinks[0].strIngredient2 + " " + data.drinks[0].strMeasure2,
            data.drinks[0].strIngredient3 + " " + data.drinks[0].strMeasure3,
            data.drinks[0].strIngredient4 + " " + data.drinks[0].strMeasure4,
            data.drinks[0].strIngredient5 + " " + data.drinks[0].strMeasure5,
            data.drinks[0].strIngredient6 + " " + data.drinks[0].strMeasure6,
            data.drinks[0].strIngredient7 + " " + data.drinks[0].strMeasure7,
            data.drinks[0].strIngredient8 + " " + data.drinks[0].strMeasure8,
            data.drinks[0].strIngredient9 + " " + data.drinks[0].strMeasure9,
            data.drinks[0].strIngredient10 + " " + data.drinks[0].strMeasure10,
            data.drinks[0].strIngredient11 + " " + data.drinks[0].strMeasure11,
            data.drinks[0].strIngredient12 + " " + data.drinks[0].strMeasure12,
            data.drinks[0].strIngredient13 + " " + data.drinks[0].strMeasure13,
            data.drinks[0].strIngredient14 + " " + data.drinks[0].strMeasure14,
            data.drinks[0].strIngredient15 + " " + data.drinks[0].strMeasure15,
        ];


        for (let i = 0; i < 15; i++) {
            let item = document.createElement("li");
            item.innerText = ingredients[i];
            if (ingredients[i] != "null null")
                ingr.appendChild(item);
        }


    }
    xhttp.send();

}