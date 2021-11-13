

















//Создание переменных
const buttonStart = document.getElementById('buttonStart');
const consoleText = document.getElementById('consoleText');
const consoleButton1 = document.getElementById('consoleButton1');
const consoleButton2 = document.getElementById('consoleButton2');
const consoleButton3 = document.getElementById('consoleButton3');
const consoleButton4 = document.getElementById('consoleButton4');
const consoleButton = [consoleButton1, consoleButton2, consoleButton3, consoleButton4];







//Функции

//Функции запуска игры
function Start(){
    setTimeout(StartDelete, 200);
};
function StartDelete(){
    buttonStart.style.display = 'none';
};

//Функция для набора текста в консооль
function text(text, name='', colorName='gray', color='white'){
    consoleText.innerHTML += `<div style=\'color: ${color}\'><span style=\'color:${colorName}\'>${name} </span>${text}<div>`
}





function checkClickButtonConsole(i){
    if(i == 1){
        alert('1');
    }
    else if(i == 2){
        alert('2');
    }
    else if(i == 3){
        alert('3');
    }
    else if(i == 4){
        alert('4');
    }
}

consoleButtonFalse();
function consoleButtonTrue(){
    for(let i of consoleButton){
        i.style.display = 'flex';
    }

  
  
};
function consoleButtonFalse(){
    for(let i of consoleButton){
        
        i.style.display = 'none';
    }
}





//Cписки

//Список начало




let listStart1 = [
    'проснулись',
    'очнулись',
    'пришли в себя',
    'пробудились',
    'пришли в сознание'
];
let listStart2 = [
    'у вас болит голова',
    'чуствуете себя плохо',
    'чуствуете себя прекрасно',
    'хотите сильно есть',
    'хотите есть',
    'хотите сильно пить',
    'хотите пить',
];

function doMessageStart(){
    let mess;
    let ia = Math.floor(Math.random()*listStart1.length);
    
    let a = listStart1[ia];
   

    let ib = Math.floor(Math.random()*listStart2.length);
    
    let b = listStart2[ib];
    

    let icheckb = Math.floor(Math.random()*3);
    
    if(!icheckb){
        mess = `Вы ${a}, ${b}`;
    }
    else{
        mess = `Вы ${a}`;
    }
    

    text(mess);
    setTimeout(consoleButtonTrue, 2000);
}



/*
//Функции начало
function doMessageStart(){
    
    let i = Math.floor(Math.random(0, listStart1.length));
    let a = listStart1[i];
    let i = Math.floor(Math.random(0, listStart1.length));
    let b = listStart2[i];
    // let i = Math.floor(Math.random(0, listStart1.length));
    // let c = listStart1[i];

    let messageStart = `Вы ${a}, ${b}`;
    text(messageStart)
}

*/





setTimeout(doMessageStart, 1000);


consoleButton[0].innerHTML = `Идти куда глаза гледят`
consoleButton[1].innerHTML = `Осмотреться`;
consoleButton[2].innerHTML = `Начать раздумывать произошедшее`;
consoleButton[3].innerHTML = `Проверить карманы`;