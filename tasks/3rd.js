//3
//All files include a solution function. Run that and you'll get my solution. When the task require you can also pass arguments to the solution function.
//Please change the index.html file's script tag accordinlgy to the tasks.
let task3= document.querySelector('.task3__solution');
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
    let solution = function () {
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
      let theLowest = lowestAv(onlyBeers)
      brandAndPrices.forEach((el) => {
        if (el.beers == theLowest) {
          theCheapestBrand = el.brand
        }
      })
      return JSON.stringify(theCheapestBrand, null, 2)
    }
    task3.innerHTML=solution();
  })
  .catch((err) => {
    console.log('rejected', err);
  });
