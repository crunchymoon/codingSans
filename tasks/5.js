//water ratio:
//sum all the ingredients' ratio
//those that have the highets ratio -->
//has the less water
//those that have the lowest ratio -->
//has the most water
//example: ratio : 1,25 <-- sok minden benne van
//keves benne a viz
//example: ratio : 0.15 <-- keves minden van benne,
//sok benne a viz
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
        let idsAllRatio;
        let idAndRatio = []
        brandi.forEach((brand) => {
            idsAllRatio = brand.ingredients.map((ing) => {
                return Number(ing.ratio)
            })
            let sumOfRatio = idsAllRatio.reduce((acc, curr) => {
                let result = acc + curr;
                return result
            })
            idAndRatio.push({ 'id': brand.id, 'waterRatio': sumOfRatio })
        })
        //sorts idAndRatio by waterRatio descending , if id is the
        //same, sort those descending
        let sortElem= (sortMe)=>{
            // sortMe.sort(
            //     function(a, b) { 
            //         // if(a.waterRatio==b.waterRatio){
            //         //     return a.id - b.id  
            //         // }         
            //        return a.waterRatio - b.waterRatio;
            //     })
            sortMe.sort(function(a, b) {
                
                var idA = a.id.toUpperCase(); // ignore upper and lowercase
                var idB = b.id.toUpperCase(); // ignore upper and lowercase
                        if(a.waterRatio==b.waterRatio){
                            if (idA < idB) {
                                return -1;
                              }
                              if (idA > idB) {
                                return 1;
                              }
                              return 0
                    } 
                    return a.waterRatio - b.waterRatio;    
                    
                ;
              });
                
                return sortMe
        }
        sortElem(idAndRatio)
        console.log(idAndRatio)
    })
//sort city (ascending) & then price (descending)
    // let homes = [
    //     {
    //      "city":"Dallas",
    //      "price":"162500"},
    //     {
    //      "city":"Bevery Hills",
    //      "price":"319250"},
    //     {
    //      "city":"Dallas",
    //      "price":"556699"},
    //     {
    //      "city":"New York",
    //      "price":"962500"}
    //     ];
    //     console.log(homes)
    // let sorter= function (){
    //     homes.sort(
    //         function(a, b) {          
    //            if (a.id === b.id) {
    //               // Price is only important when cities are the same
    //               return a.waterRatio - b.waterRatio;
    //            }
    //            return a.waterRatio > b.waterRatio ? 1 : -1;
    //         })
    //         return idAndRatio
    // }

    // // sorter();
    // console.log(homes)

/*
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
        let idsAllRatio;
        let idAndRatio = []
        brandi.forEach((brand) => {
            idsAllRatio = brand.ingredients.map((ing) => {
                return Number(ing.ratio)
            })
            let sumOfRatio = idsAllRatio.reduce((acc, curr) => {
                let result = acc + curr;
                return result
            })
            idAndRatio.push({ 'id': brand.id, 'waterRatio': sumOfRatio })
        })
        
        idAndRatio.sort(function(a,b){
           return a.waterRatio - b.waterRatio
            
        });
        console.log(idAndRatio)
    })
*/