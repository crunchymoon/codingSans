//list of the beers filtered by beer types. 
//the Function should take a BeerType and return all the beer IDs in an array of that type.
//Filter for the `Wheat` type! (Note: the input may change when you reload the page!)

//filterTypes(Wheat) --> ['beerid1','beerid2']
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
        let result;
        function filterTypes(type) {
            idAndTypes.forEach((dat) => {
                if (dat.type === type) {
                    result = dat.ids;
                }
            })
            return result;
        }
        return JSON.stringify(filterTypes('Wheat'), null, 2);
    })
    .catch((err) => {
        console.log('rejected', err);
    });
