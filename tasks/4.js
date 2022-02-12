//4
//All files include a solution function. Run that and you'll get my solution. When the task require you can also pass arguments to the solution function.
//Please change the index.html file's script tag accordinlgy to the tasks.
fetch('https://challenge.codingsans.com/beers.json')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    let brands = data;
    let brandArray = []
    brands.forEach(function (brand) {
      brandArray.push({ 'id': brand.id, 'ingredients': brand.ingredients })
    })
    return brandArray;
  })
  .then((brandi) => {
    let items = []
    let itemIds = []
    let solution = function (leaveme) {
      itemIds.length=0;
      let leaveIngredient = () => {
        brandi.forEach((brand) => {
          brand.ingredients.forEach((ing) => {
            if (ing.name == leaveme && ing.ratio == '0') {
              itemIds.push(brand.id)
            }
          })
        })
        return itemIds
      }
      return JSON.stringify(leaveIngredient(), null, 2)
    }
    let task4sel = document.querySelector('.task4__select');
    let task4 = document.querySelector('.task4__solution');
    task4sel.addEventListener("change", function () {
      task4.innerText=solution(task4sel.value)
    });
  })