const buyBtn = document.querySelectorAll('#buy-btn')
const itemNumber = document.getElementById('item-number')
const itemCost = document.getElementById('item-cost')
const totalCost = document.getElementById('total-cost')
let item = 0;
let costCam = 1500;
let costClean = 170.55;
let costWatch = 1000;
let costTv = 45000;
let costHdd = 300;
let costBlend = 1300;




let total  = 10;


buyBtn.forEach(buyBtn => buyBtn.addEventListener('click', (e) => {

    switch (true) {
        case buyBtn.classList.contains('cam-btn'):
            cost = costCam
            break
        case buyBtn.classList.contains('vacum-btn'):
            cost = costClean
            break
        case buyBtn.classList.contains('watch-btn'):
            cost = costWatch
            break
        case buyBtn.classList.contains('tv-btn'):
            cost = costTv
            break
        case buyBtn.classList.contains('hdd-btn'):
            cost = costHdd
            break
        case buyBtn.classList.contains('blend-btn'):
            cost = costBlend
    }


    item ++
    
    itemNumber.innerHTML = item
    itemCost.innerHTML = cost
    totalCost.innerHTML = cost 
    
}))



