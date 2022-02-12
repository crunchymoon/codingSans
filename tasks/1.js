//1)
//All files include a solution function. Run that and you'll get my solution. When the task require you can also pass arguments to the solution function. 
//Please change the index.html file's script tag accordinlgy to the tasks.
let task1 = document.querySelector('.task1__solution')
fetch('https://challenge.codingsans.com/beers.json')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    let brands = data;
    let brandArray = []
    brands.forEach(function (brand) {
      brandArray.push({ 'brandName': brand.brand, 'brandBeers': brand.name, 'beers': brand.id })
    })
    return brandArray;
  })
  .then((brandi) => {
    function solution() {
      let combineCategories = function () {
        grouped = {}
        brandi.forEach(function (item, index) {
          if (!grouped[item.brandName]) {
            grouped[item.brandName] = [];
            grouped[item.brandName].push(item.beers);
          }
          else {
            grouped[item.brandName].push(item.beers);
          }
        });
        return Object.keys(grouped).map(function (el) {
          return { brand: el, beers: grouped[el] };
        });
      }
      return JSON.stringify(combineCategories(), null, 2)
    }
    task1.innerHTML=solution();
  })
  .catch((err) => {
    console.log('rejected', err);
  });
