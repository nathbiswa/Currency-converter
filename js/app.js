

document.querySelector('button').addEventListener('click', function(){

let ammount = document.getElementById('ammount').value;
let currency = document.getElementById('currency').value;
let rate = '';

switch(currency){
    case 'USD':
        rate = '86';
        break
    case 'POUND':
        rate = '115';
        break
    case 'EURO':
        rate = '96';
        break
    case 'WON':
        rate = '0.071';
        break
    case 'CAD':
        rate = '67';
        break
   
}


document.querySelector('p').innerText=`${ammount} ${ currency}= ${rate * ammount} BDT`;

})





