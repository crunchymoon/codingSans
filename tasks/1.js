//1)
//Sort brands + its all beers that belong them
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
     let combineCategories = function (data) {
    grouped = {}

    brandi.forEach(function (item, index) {

      if (!grouped[item.brandName]) {grouped[item.brandName] = [];
      grouped[item.brandName].push(item.beers);}
      else {
        grouped[item.brandName].push(item.beers);
      }
    });
     return Object.keys(grouped).map(function (el) {
        return { brand: el, beers: grouped[el] };
      });
    }
    console.log(JSON.stringify(combineCategories(brandi),null, 2))
  })
  .catch((err) => {
    console.log('rejected', err);
  });
