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
                    // if (ing.name == ingr & ing.ratio == '0.004') {
                    //     brand.missIng = 'cica'
                    // }
                    // else {
                    //     brand.missIng = 'kutya'
                    // }
                    if(ing.name == ingr && ing.ratio == '0'){
                        itemIds.push(brand.id)
                    }
                    
                })
                // console.log(brand)
                //    if(brand.missIng){
                //        itemIds.push(brand.id)
                //    }
            })
            // console.log(brandi)
            return itemIds

        }
        console.log(JSON.stringify(leaveIngredient('barley'), null, 2))
    })















const products = [
    {
        id: 1, items: [
            { id: 1, name: 'apple' },
            { id: 2, name: 'banana' },
            { id: 3, name: 'orange' }
        ]
    },
    {
        id: 2, items: [
            { id: 4, name: 'carrot' },
            { id: 5, name: 'milk' },
            { id: 6, name: 'peas' }
        ]
    },
    {
        id: 3, items: [
            { id: 7, name: 'eggs' },
            { id: 8, name: 'bread' },
            { id: 9, name: 'milk' }
        ]
    }
];
// console.log(products)

let items = []
let itemIds = []
let asd = () => {
    products.forEach((product) => {
        // items.push(product.items.filter((item) => {
        //             return item.name !== 'milk'
        //         }))
        console.log(product)
    })
    // return items.forEach((it)=>{
    //     it.forEach((i)=>{
    //         return itemIds.push(i.id)
    //     })
    //  })
}
asd();

/*
let items = []
let itemIds=[]
let asd = ()=>{
    products.forEach((product)=>{
        items.push(product.items.filter((item) => {
                    return item.name !== 'milk'
                }))
    })
    return items.forEach((it)=>{
        it.forEach((i)=>{
            return itemIds.push(i.id)
        })
     })
}
asd();
console.log(itemIds)
*/

 //if brand.ingredients.foreach(ing)ing.name!==salt
                //--> itemsId.push(brand.id)