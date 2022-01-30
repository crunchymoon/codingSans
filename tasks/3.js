// a Function that returns the name of the brand that has the cheapest average price. (Note: The brand name should be in quotes "")
// const val = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
function lowestAv(val) {
    const min = Math.min(...val)
    return min;
  }
  //calculate avarage num inside the array
  function calcAvarage(beerArr) {
    let sum = beerArr.reduce((acc, next) => {
      let sumOfArrayEls = acc + next;
      return sumOfArrayEls;
    })
    let avg = (sum) / beerArr.length;
    return avg;
  }
  
  fetch('https://challenge.codingsans.com/beers.json')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let brands = data;
      let brandArray = []
      brands.forEach(function (brand) {
        brandArray.push({ 'brandName': brand.brand, 'beers': brand.id, 'price': brand.price })
      })
      return brandArray;
    })
    .then((brandi) => {
      let combineCategories = function (data) {
        let grouped = {}
        let theCheapestBrand;
        brandi.forEach(function (item, index) {
          if (!grouped[item.brandName]) {
            grouped[item.brandName] = [];
            let beerPrices = grouped[item.brandName].push(Number(item.price));
          }
          else {
            let beerPrices = grouped[item.brandName].push(Number(item.price));
          }
        });
        let brandAndPrices = Object.keys(grouped).map(function (el) {
          return { brand: el, beers: calcAvarage(grouped[el]) }
        });
        let onlyBeers = [];
        brandAndPrices.forEach((el) => {
          onlyBeers.push(el.beers)
        });
        let theLowest =lowestAv(onlyBeers)
          brandAndPrices.forEach((el)=>{
          if(el.beers==theLowest){
            theCheapestBrand = el.brand
          }
        })
        return theCheapestBrand
      }
      return JSON.stringify(combineCategories(brandi),null, 2)
    })
    .catch((err) => {
      console.log('rejected', err);
    });
  