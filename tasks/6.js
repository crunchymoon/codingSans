fetch('https://challenge.codingsans.com/beers.json')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        let brands = data;
        let roundUp = []
        brands.forEach(function (brand) {
            //round the price to the nearest hundred
            roundUp.push({ 'id': brand.id, 'price': Math.ceil(brand.price/100)*100 })
        })
        return roundUp;
    })
    .then((rounded) => {
        function groupRounded(data){
        let grouped ={}
        rounded.forEach((item,index)=>{
            if (!grouped[item.price]) {grouped[item.price] = [];
                grouped[item.price].push(item.id);}
                else {
                  grouped[item.price].push(item.id);
                }
        })
        return JSON.stringify(grouped,null,2)
        }
        console.log(groupRounded(rounded))
    })