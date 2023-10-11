//функция создания парного массива

let statusArr=[];
let cartArr=[]
let mixedArr;
let container= document.querySelector('.container');
let containerGame=document.createElement('div');
let timerId;
let buttonReset;
let timeDalay=5000;
let mistakeCounter=-1;
//создание массива
function crateTwiceArr(number=1){
    let twiceArr=[];
    for (let i=0; i<number; i++){
        for (let j=0; j<2; j++){
            twiceArr.push(i+1);
        }
    }
    return twiceArr;
}

//функция перемешивания массива
function createMixedArr(number){
    mixedArr=crateTwiceArr(number)
    for (let i=mixedArr.length-1; i>0; i--){
        let j=Math.floor(Math.random()*(i+1));
        [mixedArr[i], mixedArr[j]]= [mixedArr[j], mixedArr[i]]
    }
    return mixedArr;
}

//создаем и возвращаем заголовок с кнопкой
function createTwiceTitle(containerGame){
    let wraperTtile=document.createElement('div');
    let formStartGame=document.createElement('form');
    let wraperRadioButton=document.createElement('div');
    let timerDisplay=document.createElement('div');
    let appTitle=document.createElement('h2');
    let subTitle=document.createElement('p');
    let input =document.createElement('input');
    let labelInput=document.createElement('label');

    let wrapperRadioTimer=document.createElement('div')
    let wrapperRadioMistake=document.createElement('div')
    let wrapperRadioUnlimited=document.createElement('div')
    let inputRadioTimer =document.createElement('input');
    let inputRadioMistake =document.createElement('input');
    let inputRadioUnlimited =document.createElement('input');
    let labelRadioTimer =document.createElement('label');
    let labelRadioMistake =document.createElement('label');
    let labelRadioUnlimited =document.createElement('label');

    let buttonStar = document.createElement('button')
    buttonReset =document.createElement('button');

    wraperTtile.classList.add('input-group-append', 'mr-5');
    timerDisplay.classList.add('mr-3')
    formStartGame.classList.add('d-flex', 'flex-column', 'justify-content-start')
    appTitle.classList.add();
    subTitle.classList.add('mr-3');
    input.classList.add('form-control', 'mr-3', 'w-50');
    input.setAttribute('id', 'idInput')
    labelInput.setAttribute('for', 'idInput')
    //input.type='number';
    buttonStar.type='submit';
    buttonStar.classList.add('btn', 'btn-primary');
    buttonReset.classList.add('btn', 'btn-danger');

    wraperRadioButton.classList.add('d-flex', 'flex-column')
    wrapperRadioTimer.classList.add('d-flex');
    wrapperRadioMistake.classList.add('d-flex');
    wrapperRadioUnlimited.classList.add('d-flex');

    inputRadioTimer.type = 'radio';
    inputRadioTimer.setAttribute('id', 'idRadioTimer');
    inputRadioTimer.setAttribute('name', 'optionGame');
    inputRadioTimer.setAttribute('value', 'timer');
    labelRadioTimer.setAttribute('for', 'idRadioTimer')
    labelRadioTimer.classList.add('m-0', 'pl-1')
    inputRadioMistake.type = 'radio';
    inputRadioMistake.setAttribute('id', 'idRadioMistake');
    inputRadioMistake.setAttribute('name', 'optionGame');
    inputRadioMistake.setAttribute('value', 'Mistake');
    labelRadioMistake.setAttribute('for', 'idRadioMistake')
    labelRadioMistake.classList.add('m-0', 'pl-1')
    inputRadioUnlimited.type = 'radio';
    inputRadioUnlimited.setAttribute('id', 'idRadioUnlimited');
    inputRadioUnlimited.setAttribute('name', 'optionGame');
    inputRadioUnlimited.setAttribute('value', 'Unlimited');
    inputRadioUnlimited.setAttribute('checked', 'true');
    labelRadioUnlimited.setAttribute('for', 'idRadioUnlimited')
    labelRadioUnlimited.classList.add('m-0', 'pl-1')
    

    timeDalayFormat=timeFormatDisplay(timeDalay/1000);
        minutes=timeDalayFormat.minutes;
        seconds=timeDalayFormat.seconds;
         timerDisplay.textContent ='0:00';
        // timerDisplay.textContent =`${minutes}:${seconds}`;
    
    input.placeholder ='введите количество пар';
    input.style.width = '250px'
    appTitle.innerHTML='ПАРЫ'
    subTitle.textContent='количество пар НЕ Больше 5';

    labelRadioTimer.textContent='Таймер'
    labelRadioMistake.textContent='3 ошибки'
    labelRadioUnlimited.textContent='простая'
  

    buttonStar.textContent ='Старт игры';
    buttonStar.disabled=true;
    buttonReset.textContent ='Сброс игры';
    buttonReset.disabled=true;

    wrapperRadioTimer.append(inputRadioTimer, labelRadioTimer);
    wrapperRadioMistake.append(inputRadioMistake, labelRadioMistake)
    wrapperRadioUnlimited.append(inputRadioUnlimited, labelRadioUnlimited)
    wraperRadioButton.append(wrapperRadioTimer, wrapperRadioMistake, wrapperRadioUnlimited);
    
    wraperTtile.append(appTitle);
    formStartGame.append(subTitle);
    formStartGame.append(input, labelInput);
    formStartGame.append(wraperRadioButton);

    formStartGame.append(buttonStar);

    input.addEventListener('input', function(){
        if ( parseInt(input.value)>=5) {
            input.classList.add('text-danger');
            subTitle.classList.add('text-danger', 'font-weight-bold');
           } else {
               input.classList.remove('text-danger')
           }
           if (Number.isInteger(parseInt(input.value)) & parseInt(input.value)<=5){
           buttonStar.disabled=false;
       } else {
           buttonStar.disabled=true;
       }
   })
   //взаимодействие с формой
        formStartGame.addEventListener('submit', function(e){
            
     e.preventDefault();
     if (!input.value){
         return;
     }
     
     
     //радиокнопки
     if (inputRadioTimer.checked){
         console.log('timer')
        timer(timeDalay, timerDisplay);
        timerId=setTimeout(openWrapGameOver, timeDalay);
        timerDisplay.textContent =`${minutes}:${seconds}`;
    }
    if (inputRadioMistake.checked){
        // mistakeCounter=mistakeCounter++;
        mistakeCounter=0;
        console.log('mistake', mistakeCounter)
        
    }
    if (inputRadioUnlimited.checked){
        console.log('Unlimited')
    }
    // buttonStar.addEventListener('click', function(){
    //     containerGame.innerHTML=''
    // })

        //Задержка и таймер

            // inputRadioTimer;
            // inputRadioMistake;
            // inputRadioUnlimited;
    



        

        let idCart=0;
        let openCloseStatus=false;
        let mixedArr=createMixedArr(parseInt(input.value));
        let twiceStatus =false;

        for (const elArr of mixedArr){
        idCart=idCart+1;
//?
        let objElemCart={
            idCart,
            openCloseStatus,
            twiceStatus,
            elArr,
        }

        let basicCart=createBasicCard(objElemCart);
        let oneCart=basicCart.objCart.wrapperCart;
        cartArr.push(basicCart);
        containerGame.append(oneCart)
        }
        buttonStar.disabled=false;
        buttonReset.disabled=false;

        buttonStar.remove();

        formStartGame.append(buttonReset);

         gameOver(buttonReset);

        input.setAttribute("disabled", "true");
    })
    // console.log('formStartGame', formStartGame);
    // console.log('wraperTtile', wraperTtile)
    return {formStartGame, wraperTtile, timerDisplay};
}

//созадем одну карту

function createBasicCard(obj){
    idCart=obj.idCart;
    let openCloseStatus=obj.openCloseStatus;
    let contentCart=obj.elArr;
    let twiceStatus=obj.twiceStatus;
    let objCart={};
    let wrapperCart=document.createElement('div');
    let wrapperContentCart=document.createElement('h1');
    wrapperCart.classList.add( 'pt-5', 'd-inline-block', 'm-1');
    wrapperCart.classList.add('bg-secondary', 'rounded', 'border', 'border-danger', 'text-center');
    wrapperCart.style.width='23%';
    wrapperCart.style.height='30%';
    wrapperContentCart.textContent=contentCart;
    wrapperCart.append(wrapperContentCart);
   
    wrapperCart.addEventListener('click', function(){

        openCloseStatus=!openCloseStatus;
        idCart=obj.idCart;
       checkStatusCart(objCart)
       // mistakeCounter=mistakeCounter++;
        console.log(mistakeCounter)
    })

    objCart={
        idCart,
        openCloseStatus,
        wrapperContentCart,
        wrapperCart,
        twiceStatus,
    }
    
//при клике стату карточки не передается
    return {
        objCart,
        };
}
//вывод игры в браузер
function createSquare(){
   containerGame.classList.add('p-1', 'bg-primary', 'w-100', 'h-100', 'border', 'border-dark')
   let headWrap=document.createElement('div');
   headWrap.classList.add('d-flex', 'justify-content-between')
   //containerGame.style.position='absolute'
   let twiceTitle = createTwiceTitle(containerGame);
//    console.log(twiceTitle);
//    twiceTitle.formStartGame.addEventListener('submit', function(e){
//     e.preventDefault();
//     if (!createTwiceTitle.input.value){
//         return;
//     }
//     })
     headWrap.append(twiceTitle.wraperTtile);
     headWrap.append(twiceTitle.timerDisplay);
     headWrap.append(twiceTitle.formStartGame);
     container.append(headWrap);
     container.append(containerGame);
}

//функция учета кликов и статуса карт(открыта - закрыта)

function checkStatusCart(obj){
    
     console.log(mistakeCounter)
    // console.log(obj)
    // console.log('statusArr', statusArr)
    //проверяем отрыкты ли парна карта, т.е. нах-ся она в statusArr если нет выходим из функции
    //если карта открыта она не кликается
    for (let elAtatusArr of statusArr){
        if (statusArr.length>1){
            if (obj.idCart==elAtatusArr.idCart){
                return;
            }
        }
    }
    //добавляем объетк карты в массив
    statusArr.push(obj);
    lastElement=statusArr.length-1;
    beforeLastElement=statusArr.length-2;
    if (statusArr.length%2==1){
        obj.wrapperCart.classList.toggle('bg-secondary');
        obj.wrapperCart.classList.toggle('bg-white');
    }
    if (statusArr.length%2==0) {
       if (statusArr[beforeLastElement].idCart==statusArr[lastElement].idCart){
            statusArr.pop();
       }else{
           obj.wrapperCart.classList.toggle('bg-secondary');
           obj.wrapperCart.classList.toggle('bg-white');
           if (statusArr[beforeLastElement].wrapperContentCart.textContent==statusArr[lastElement].wrapperContentCart.textContent){
            statusArr[beforeLastElement].twiceStatus=true;
            statusArr[lastElement].twiceStatus=true;
           } else {
            // необходимо замедление или анимация
            statusArr[beforeLastElement].wrapperCart.classList.toggle('bg-dark');
            statusArr[beforeLastElement].wrapperCart.classList.toggle('bg-danger');
            statusArr[beforeLastElement].wrapperCart.classList.toggle('bg-secondary');
            statusArr[beforeLastElement].wrapperCart.classList.toggle('bg-white');
            statusArr[lastElement].wrapperCart.classList.toggle('bg-dark');
            statusArr[lastElement].wrapperCart.classList.toggle('bg-danger');
            statusArr[lastElement].wrapperCart.classList.toggle('bg-secondary');
            statusArr[lastElement].wrapperCart.classList.toggle('bg-white');
            statusArr.pop();
            statusArr.pop();
            if (mistakeCounter!=-1){

                mistakeCounter=mistakeCounter+1;
                startThreeMistake()
            }
            // if(mistakeCounter==3) {
            //     console.log('3 mistake');
            //     openWrapGameOver();
            // }
        }
       // if(mistakeCounter==3) console.log('3 mistake')
           openWrapGameOver(statusArr, mixedArr, 'Вы выиграли')
        //    return mistakeCounter;
        } 
    }
}

//функция открытия окна завершения игры
function openWrapGameOver(statusArr=0, mixedArr=0, gameResult='Вы проиграли'){
    console.log(buttonReset);
    if(statusArr.length== mixedArr.length){
        clearTimeout(timerId);
        const wrapGameOver=document.createElement('div');
        const titleGameOver=document.createElement('h2');
        const buttonGameOver=document.createElement('button');
        wrapGameOver.classList.add('pt-5', 'd-inline-block', 'm-1');
        wrapGameOver.style.position='absolute'
        wrapGameOver.style.top='90px'
        wrapGameOver.style.right='160px'
        wrapGameOver.style.width='70%'
        wrapGameOver.style.height='70%'
        wrapGameOver.style.opacity='0.9'


        
        wrapGameOver.classList.add('bg-danger', 'rounded', 'border', 'border-danger', 'text-center')
        titleGameOver.textContent=gameResult;
        buttonGameOver.classList.add('btn', 'btn-primary');
        buttonGameOver.textContent='Начать новую игру';
        wrapGameOver.append(titleGameOver);
        wrapGameOver.append(buttonGameOver);
        containerGame.append(wrapGameOver);
        buttonReset.disabled=true;
        //buttonReset.remove();
        gameOver(buttonGameOver);

    }
}

// функция остановки игры
function gameOver(button){
    button.addEventListener('click', function(){
        clearTimeout(timerId);
        container.innerHTML='';
        containerGame.innerHTML=''
        statusArr=[]; cartArr=[]; mixedArr=[];
        console.log('statusArr', statusArr);
        console.log('cartArr', cartArr)
        console.log('mixedArr', mixedArr)
        createSquare();
    })
}

//функция отображения таймера

function timer(timeDalay, timerDisplay){
   // amountTimeValue=parseInt(amountTime.value)
   let time=timeDalay/1000-1;
    //timerDisplay.innerHTML=time;
    function timerStap(){
        // const minutes =Math.floor(time / 60);
        // let seconds = time % 60;
        // seconds = seconds < 10 ? '0'+ seconds: seconds;
        timeDalayFormat=timeFormatDisplay(time);
        minutes=timeDalayFormat.minutes;
        seconds=timeDalayFormat.seconds;

      if (parseInt(time)<=0){
        timerDisplay.innerHTML =`${minutes}:${seconds}`;
        clearInterval(stopInterval)
      }
      if (time>0){
        timerDisplay.innerHTML =`${minutes}:${seconds}`;
        time--;
      }
    }
    let stopInterval=setInterval(timerStap , 1000);
  }
//фукция правильного отображения секунд (01,02) на экране
  function timeFormatDisplay(timeSeconds){
    const minutes =Math.floor(timeSeconds / 60);
        let seconds = timeSeconds % 60;
        seconds = seconds < 10 ? '0'+ seconds: seconds;
        return {
            minutes,
            seconds,
        }
  }

  //фукция запуска 3 ощибок
  function startThreeMistake(){
    if(mistakeCounter==3) {
        console.log('3 mistake');
        openWrapGameOver();
        mistakeCounter=-1;
    }
  }


createSquare();

