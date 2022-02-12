//2)
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
      brandArray.push({ 'brandBeers': brand.name, 'id': brand.id, 'type': brand.type })
    })
    return brandArray;
  })
  .then((brandi) => {
    let filteredByTypes = {}
    brandi.forEach((el) => {
      if (!filteredByTypes[el.type]) {
        filteredByTypes[el.type] = [];
        filteredByTypes[el.type].push(el.id);
      } else {
        filteredByTypes[el.type].push(el.id);
      }
    })
    let idAndTypes = () => {
      return Object.keys(filteredByTypes).map((el) => {
        return { type: el, ids: filteredByTypes[el] }
      })
    }
    return idAndTypes()
  })
  .then((idAndTypes) => {
    function solution(BeerType) {
      let result;
      function filterTypes() {
        idAndTypes.forEach((dat) => {
          if (dat.type === BeerType) {
            result = dat.ids;
          }
        })
        return result;
      }
      return JSON.stringify(filterTypes(), null, 2);
    }
    let task2sel = document.querySelector('.task2__select');
    let task2 = document.querySelector('.task2__solution');
    task2sel.addEventListener("change", function () {
      task2.innerText=solution(task2sel.value)
    });
    console.log(solution('Corn'))
  })
  .catch((err) => {
    console.log('rejected', err);
  });
