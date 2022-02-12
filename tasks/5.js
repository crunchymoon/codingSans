//5
//All files include a solution function. Run that and you'll get my solution. When the task require you can also pass arguments to the solution function.
//Please change the index.html file's script tag accordinlgy to the tasks.
let task5 = document.querySelector('.task5__solution');
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
    function solution() {
    let idsAllRatio;
    let idAndRatio = []
    brandi.forEach((brand) => {
      idsAllRatio = brand.ingredients.map((ing) => {
        return Number(ing.ratio)
      })
      //to get the water ratio, add together all elements ratios
      let sumOfRatio = idsAllRatio.reduce((acc, curr) => {
        let result = acc + curr;
        return result
      })
      idAndRatio.push({ 'id': brand.id, 'waterRatio': sumOfRatio })
    })
    //sorts idAndRatio by waterRatio descending , if id is the same, sort those descending
    let sortElem = (sortMe) => {
      sortMe.sort(function (a, b) {
        var idA = a.id.toUpperCase();
        var idB = b.id.toUpperCase();
        if (a.waterRatio == b.waterRatio) {
          if (idA < idB) {
            return -1;
          }
          if (idA > idB) {
            return 1;
          }
          return 0
        } else {
          return a.waterRatio - b.waterRatio;
        }
      });
      return sortMe
    }
    sortElem(idAndRatio)
    
      let highToLowWater = idAndRatio.map((onlyId) => {
        return onlyId.id
      })
      return JSON.stringify(highToLowWater, null, 4)
    }
    task5.innerHTML=solution();
  })