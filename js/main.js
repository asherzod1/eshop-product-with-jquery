var shopItems = [];

$(document).ready(function () {
    
    products.map(function (item){
        $('.cards').append($(`<div class="card">
        <img src="${item.image}" alt="${item.name} img">
        <h3>${item.name}</h3>
        <p>Price : ${item.price} $</p>
        <button onclick="addToModal(${item.sku})">Add to card</button>
        </div>`));
    })
    
    $('#savat').click(function(){
        $('.modal').toggleClass('display-none');
        $('.shopItems').html("");
        shopItems.map(function(tem){
            let count = 1;
            $('.shopItems').append($(`<div class="shopItem">
            <img src="${tem.image}" alt="">
            <h3 class="name">${tem.name}</h3>
            <button id="qoshish" onclick="qoshish(${tem.sku})">+</button>
            <input id="shtuk" type="text" disabled>
            <button id="ayirish">-</button>
            <p>${tem.price} $</p>
            <h3>${tem.price}</h3>
            <button id="remove">Remove</button>
            </div>`))
        }
        )

    })
    
    $('.close').click(function(){
        $('.modal').toggleClass('display-none')
    })

                    var btns = document.querySelectorAll('.card > button');
                    let counter = 0;
                    let savat_counter = document.querySelector('.savat-counter');
                    savat_counter.innerText = counter;
                    btns.forEach(item => {
                        item.addEventListener('click', ()=>{
                            if(item.innerText=='Add to card'){
                                item.innerText = 'In card';
                                counter++;
                            } 
                            else{
                                item.setAttribute('disabled');
                                // item.innerText = 'Add to card';
                                item.style.cursor = 'none';
                                counter--;
                            }
                            item.classList.toggle('button-h');
                            savat_counter.innerText = counter;  
                        })
    })
});

function addToModal(sku){
    let p = products.find(item=> item.sku == sku)
    if(p){
        shopItems.push(p);
    }
}

function qoshish(sku){
    element = shopItems.find(item=>item.sku == sku)
    if(element){
        count++;
        document.querySelector('#shtuk').value =count;
    }
}





