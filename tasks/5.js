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
        idAndRatio.sort(function(a,b){
            return a.waterRatio - b.waterRatio
        });
        console.log(idAndRatio)
    })
   
        const sorted = [40,16,67,345,22,23,142,63,59,283].sort(function(a, b) {
            console.log('sorting',a ,b)
            return a - b;
        });
        const torted= [3,6,9,4,6].sort();
        console.log(torted);
        console.log(sorted);

    // var items = [
    //     { name: 'Edward', value: 21 },
    //     { name: 'Sharpe', value: 37 },
    //     { name: 'And', value: 45 },
    //     { name: 'The', value: -12 },
    //     { name: 'Magnetic', value: 13 },
    //     { name: 'Zeros', value: 37 }
    //   ];
      
    //   // sort by value
    //   items.sort(function (a, b) {
    //     return a.value - b.value;
    //   });
    //   console.log(items)














// const data = [
//     {
//         id: 1,
//         name: "abc",
//         Address: [
//             {
//                 City: "something",
//                 Country: "first country"
//             },
//             {
//                 City: "other city",
//                 Country: "country"
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: "dfe",
//         Address: [
//             {
//                 City: "something1",
//                 Country: "second country"
//             },
//             {
//                 City: "city",
//                 Country: "new country"
//             }
//         ]
//     }];

// const Reducedarray = data.reduce((acc, { ...rest }) => {
//     return [...acc, rest]
// }, []);

// console.log(Reducedarray);
/*
.then((brandi) => {
        function add(...args) {
            let result = 0;
          
            for (let arg of args) result += Number(arg);
          
            return result
          }
        let idAndRatio = [];
        let numbers=[];
        brandi.forEach((brand)=>{
           brand.ingredients.forEach((ing)=>{
                numbers.push(Number(ing.ratio))
            })
            let ratioTotal = numbers.reduce((acc,currv)=>{
                return acc+currv;
            })
            idAndRatio.push({'id':brand.id,'waterRatio':ratioTotal})
            

        })
        
        console.log(idAndRatio)
        
        
    })
*/

const data = [
    {
        id: 1,
        name: "abc",
        Address: [
            {
                City: "something",
                Country: "first country"
            },
            {
                City: "other city",
                Country: "country"
            }
        ]
    },
    {
        id: 2,
        name: "dfe",
        Address: [
            {
                City: "something1",
                Country: "second country"
            },
            {
                City: "city",
                Country: "new country"
            }
        ]
    }];

const Reducedarray = data.reduce((acc, { Address, ...rest }) => (
    [...acc, rest, ...Address]
), []);

// console.log(Reducedarray);