
let unknow = 'gray';
let friend = 'green';
let enemy = 'red';
let gun = '#ffd700';



let who = '';



const El=(text)=>{return document.getElementById(text)}

const fAnswer=[El('Answer1'), El('Answer2'), El('Answer3'), El('Answer4')];

let i=0;
const doText=(text)=>{
    if(i){
        El('Text').innerHTML+=`<div style=\'background: rgba(0, 0, 0, 0.8); padding: 6px; \'>${text}</div>`
        i=0;
    }
    else{
        El('Text').innerHTML+=`<div style=\'background: rgba(255, 255, 255, 0.1); padding: 6px;\'>${text}</div>`
        i = 1;
    }
};

let listMessage=[
    [
        'проснулись',
        'очнулись',
        'пришли в себя',
        
    ]
]

let listAnswer=[
    [
        'Осмотреться',
        'Договориться',
        'Идти',
        'Подумать о произошедшем',
        
    ],
    [
        'Погладить',
        'Пнуть',
    ]
]


let random=(list)=>{return Math.floor(Math.random()*list)}



let doAnswerValue=(f1,f2,f3,f4)=>{
    const a = [f1,f2,f3,f4];
    for(let i=0; i<a.length; i++){
        if(a[i] == undefined){
            a[i] = '-';
        }
    }
    fAnswer[0].innerHTML = a[0];
    fAnswer[1].innerHTML = a[1];
    fAnswer[2].innerHTML = a[2];
    fAnswer[3].innerHTML = a[3];
}



let doStart=()=>{
    let f1=Math.floor(Math.random()*listMessage[0].length);
    doText(`Вы ${listMessage[0][f1]}`);
    doAnswerValue(listAnswer[0][0]);
}

let messColor=(text, color)=>{return `<span style=\'color: ${color}; font-weight: 900;\'>${text}</span>`}

let doListCat=()=>{
   
    let listCat=[
        `взамен ${messColor('КОТ', friend)} дает ${messColor('АК-47', gun)}`,
        `взамен <span style=\'color: ${friend}; font-weight: 900;\'>КОТ</span> дает <span style=\'color: ${gun}; font-weight: 900;\'>GLOK</span>`,
        'от удовольствия он начинаем мурчать.',
        'от удовольствия он начинаем мурчать.',
        'от удовольствия он начинаем мурчать.',
        'от удовольствия он начинаем мурчать.',
        'от удовольствия он начинаем мурчать.',
        'от удовольствия он начинаем мурчать.',
        `но ему это не понравилось. Вы умираете от выстрела ${messColor('КОТА', enemy)} из пистолета ${messColor('GLOK', gun)}.`,
        `но ему это не понравилось. Вы умираете от выстрелов ${messColor('КОТА', enemy)} из автомата ${messColor('АК-47', gun)}.`,

    ]
    let i=random(listCat.length);
    
    return listCat[i];
}

let listOne=[
    `что на вас смотрит <span style=\'color: ${unknow}; font-weight: 900;\'>КОТ</span>.`,
]




let checkAnswer=(i)=>{
    let answer = fAnswer[i].innerHTML;
    if(who == ''){
        if(answer == 'Осмотреться'){
            let i=random(listOne.length);
            doText(`Вы решаете осмотреться и видите, ${listOne[i]}`);
            if(listOne[i]==listOne[0]){
                who = 'Cat';
                doAnswerValue(listAnswer[1][0], listAnswer[1][1], listAnswer[0][0], listAnswer[0][1]);
            }
            else if(listOne[i] == 'как на вас смотрит мужик'){
                doAnswerValue()
            }
        }
        else{
            doAnswerValue();
        }
    }   
    

    if(who == 'Cat'){
        
        if(answer == 'Погладить'){
            
            doText(`Вы гладите ${messColor('КОТА', unknow)} ${doListCat()}`);
            doAnswerValue(listAnswer[1][1], listAnswer[0][1], listAnswer[0][2], listAnswer[0][3]);
        }
    }
}
doStart();