//6
//All files include a solution function. Run that and you'll get my solution. When the task require you can also pass arguments to the solution function.
//Please change the index.html file's script tag accordinlgy to the tasks.
let task6 = document.querySelector('.task6__solution');
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
        function solution(){
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
        task6.innerHTML=solution();
    })