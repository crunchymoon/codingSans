// //a Function that takes an ingredient's name 
// //and returns an array of beer IDs that lack that ingredient.
// //Filter for the `barley` ingredient! 
// //leaveIngredient('barley); --> [.....]
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
        let leaveIngredient = (ingr) => {
            brandi.forEach((brand) => {
                brand.ingredients.forEach((ing) => {
                    if(ing.name == ingr && ing.ratio == '0'){
                        itemIds.push(brand.id)
                    }  
                })
            })
            return itemIds

        }
        return JSON.stringify(leaveIngredient('barley'), null, 2)
    })