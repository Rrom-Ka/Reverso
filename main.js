//функция создания парного массива

let statusArr = [];
let cartArr = []
let mixedArr;
let container = document.querySelector('.container');
container.classList.add('d-flex')
let leftContainer = document.createElement('div');
let headWrap = document.createElement('div');
let timerDisplay;
let containerGame = document.createElement('div');
containerGame.style.position = 'relative'
let timerId;
let buttonReset;
let timeDalay = 5000;
let mistakeCounter = -1;
//создание массива
function crateTwiceArr(number = 1) {
    let twiceArr = [];
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < 2; j++) {
            twiceArr.push(i + 1);
        }
    }
    return twiceArr;
}

//функция перемешивания массива
function createMixedArr(number) {
    mixedArr = crateTwiceArr(number)
    for (let i = mixedArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [mixedArr[i], mixedArr[j]] = [mixedArr[j], mixedArr[i]]
    }
    return mixedArr;
}

//создаем и возвращаем заголовок с кнопкой
function createTwiceTitle(containerGame) {
    //верхняя панель
    let wraperTtile = document.createElement('div');
    let wrapperNameGame = document.createElement('div');
    timerDisplay = document.createElement('div');
    let appTitle = document.createElement('h2');

    wraperTtile.classList.add('input-group-append', 'mr-5');
    appTitle.classList.add();
    timerDisplay.classList.add('mr-3')
    timeDalayFormat = timeFormatDisplay(timeDalay / 1000);
    minutes = timeDalayFormat.minutes;
    seconds = timeDalayFormat.seconds;
    wrapperNameGame.textContent = 'Выбирите вид игры'
    timerDisplay.textContent = '***';
    // timerDisplay.textContent =`${minutes}:${seconds}`;
    appTitle.innerHTML = 'ПАРЫ'

    //боковая панель
    let subTitle = document.createElement('p');
    let formStartGame = document.createElement('form');
    let wraperRadioButton = document.createElement('div');
    let input = document.createElement('input');
    let labelInput = document.createElement('label');
    // чекбокс
    let wrapperRadioTimer = document.createElement('div')
    let wrapperRadioMistake = document.createElement('div')
    let wrapperRadioUnlimited = document.createElement('div')
    let inputRadioTimer = document.createElement('input');
    let inputRadioMistake = document.createElement('input');
    let inputRadioUnlimited = document.createElement('input');
    let labelRadioTimer = document.createElement('label');
    let labelRadioMistake = document.createElement('label');
    let labelRadioUnlimited = document.createElement('label');

    let buttonStar = document.createElement('button')
    buttonReset = document.createElement('button');
    subTitle.classList.add('mr-3');

    formStartGame.classList.add('d-flex', 'flex-column', 'justify-content-start', 'p-3')

    input.classList.add('form-control', 'mr-3', 'w-25');
    input.setAttribute('id', 'idInput')
    labelInput.setAttribute('for', 'idInput')
    //input.type='number';
    buttonStar.type = 'submit';
    buttonStar.classList.add('btn', 'btn-primary');
    buttonReset.type = 'button';
    buttonReset.classList.add('btn', 'btn-danger');

    wraperRadioButton.classList.add('d-flex', 'flex-column', 'mb-3')
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
    labelRadioUnlimited.setAttribute('for', 'idRadioUnlimited');
    labelRadioUnlimited.classList.add('m-0', 'pl-1');

    subTitle.textContent = 'Количество пар не больше 5';
    input.placeholder = '1...5';
    input.style.width = '250px'
    labelRadioTimer.textContent = 'Таймер'
    labelRadioMistake.textContent = '3 ошибки'
    labelRadioUnlimited.textContent = 'Простая'
    buttonStar.textContent = 'Старт игры';
    buttonStar.disabled = true;
    buttonReset.textContent = 'Сброс игры';
    buttonReset.disabled = true;

    //добавляем поля друг в друша
    wrapperRadioTimer.append(inputRadioTimer, labelRadioTimer);
    wrapperRadioMistake.append(inputRadioMistake, labelRadioMistake)
    wrapperRadioUnlimited.append(inputRadioUnlimited, labelRadioUnlimited)
    wraperRadioButton.append(wrapperRadioTimer, wrapperRadioMistake, wrapperRadioUnlimited);
    formStartGame.append(subTitle);
    formStartGame.append(input, labelInput);
    formStartGame.append(wraperRadioButton);
    formStartGame.append(buttonStar);

    wraperTtile.append(appTitle);
    //событие инпута ввода количества карт и проврки на их кол-во и цифровое значени
    input.addEventListener('input', function () {
        if (!input.value == '') {
            if (!Number.isInteger(parseInt(input.value))) {
                console.log('lkjhdglskf')
                input.classList.add('text-danger');
                subTitle.classList.add('text-danger', 'font-weight-bold');
                subTitle.textContent = 'Введите число';
                return
            } else {
                subTitle.textContent = 'Количество пар не больше 5';
                input.classList.remove('text-danger')
                subTitle.classList.remove('text-danger', 'font-weight-bold');
            }
        } else {
            subTitle.textContent = 'Количество пар не больше 5';
        }
        if (parseInt(input.value) >= 5) {
            input.classList.add('text-danger');
            subTitle.classList.add('text-danger', 'font-weight-bold');
        } else {
            input.classList.remove('text-danger')
            subTitle.classList.remove('text-danger', 'font-weight-bold');
        }
        if (Number.isInteger(parseInt(input.value)) & parseInt(input.value) <= 5) {
            buttonStar.disabled = false;
        } else {
            buttonStar.disabled = true;
        }
    })
    //взаимодействие с формой
    formStartGame.addEventListener('submit', function (e) {
        e.preventDefault();
        // console.log('input.aval', input.value)
        if (!input.value) {
            return;
        }

        //радиокнопки
        if (inputRadioTimer.checked) {
            console.log('timer')
            timer(timeDalay, timerDisplay);
            timerId = setTimeout(openWrapGameOver, timeDalay);
            timerDisplay.textContent = `${minutes}:${seconds}`;
            wrapperNameGame.textContent = 'Игра на время'
        }
        if (inputRadioMistake.checked) {
            // mistakeCounter=mistakeCounter++;
            mistakeCounter = 0;
            //нужно создать функция для отображения кол-ва жизней
            timerDisplay.classList.add('text-success');
            timerDisplay.textContent = '♥ ♥ ♥';
            wrapperNameGame.textContent = 'Игра на жизнь'
            console.log('mistake', mistakeCounter)
        }
        if (inputRadioUnlimited.checked) {
            console.log('Unlimited');
            wrapperNameGame.textContent = 'Простая игра'
            timerDisplay.textContent = '***';
        }
        let idCart = 0;
        let openCloseStatus = false;
        let mixedArr = createMixedArr(parseInt(input.value));
        let twiceStatus = false;

        for (const elArr of mixedArr) {
            idCart = idCart + 1;
            //?
            let objElemCart = {
                idCart,
                openCloseStatus,
                twiceStatus,
                elArr,
            }

            let basicCart = createBasicCard(objElemCart);
            let oneCart = basicCart.objCart.wrapperCart;
            cartArr.push(basicCart);
            containerGame.append(oneCart)
        }
        buttonStar.disabled = false;
        buttonReset.disabled = false;

        buttonStar.remove();

        formStartGame.append(buttonReset);

        gameOver(buttonReset);

        input.setAttribute("disabled", "true");
    })
    return { formStartGame, wraperTtile, wrapperNameGame, timerDisplay };
}

//созадем одну карту

function createBasicCard(obj) {
    idCart = obj.idCart;
    let openCloseStatus = obj.openCloseStatus;
    let contentCart = obj.elArr;
    let twiceStatus = obj.twiceStatus;
    let objCart = {};
    let wrapperCart = document.createElement('div');
    let frontWrapperCart = document.createElement('div');
    let cartoonCartBackForFront=document.createElement('img')
    let backWrapperCart = document.createElement('div');
    let wrapperContentCart = document.createElement('h1');
    wrapperCart.classList.add('pt-5', 'd-inline-block', 'm-1');
    wrapperCart.classList.add('rounded', 'border', 'border-danger', 'text-center', 'position-relative');
    wrapperCart.style.transition = 'all 0.6s linear'
    wrapperCart.style.width = '23%';
    wrapperCart.style.height = '38%';
    // wrapperCart.style.top='50%';
    // wrapperCart.style.left='50%';
    // wrapperCart.style.transform='translate(-50%, -50%)';


    frontWrapperCart.classList.add('w-100', 'h-100', 'overflow-hidden', 'position-absolute',);
    frontWrapperCart.classList.add('bg-info', 'rounded', 'border', 'border-success', 'text-center');
    frontWrapperCart.style.backfaceVisibility = 'hidden';
    frontWrapperCart.style.transform = 'perspective(600px) rotateY(0deg)';
    // frontWrapperCart.style.transform='perspective(600px) rotateY(0deg) translate(-50%, -50%)';
    frontWrapperCart.style.transition = 'all 0.6s linear'
    frontWrapperCart.style.top = '0';
    frontWrapperCart.style.left = '0';
    // frontWrapperCart.style.transform='translate(-50%, -50%)';
    // frontWrapperCart.textContent = 'front' + contentCart;
    cartoonCartBackForFront.src='./img/kard-back-min.png';
    cartoonCartBackForFront.classList.add('w-100' ,'h-100')

    backWrapperCart.classList.add('w-100', 'h-100', 'overflow-hidden', 'position-absolute',);
    backWrapperCart.classList.add('bg-success', 'rounded', 'border', 'border-warning', 'text-center');
    backWrapperCart.style.backfaceVisibility = 'hidden';
    backWrapperCart.style.transform = 'perspective(600px) rotateY(180deg)';
    // backWrapperCart.style.transform='perspective(600px) rotateY(180deg) translate(-50%, -50%)';
    backWrapperCart.style.transition = 'all 0.6s linear'
    backWrapperCart.style.top = '0';
    backWrapperCart.style.left = '0';
    // backWrapperCart.style.transform='translate(-50%, -50%)';
    backWrapperCart.textContent = 'back';




    wrapperContentCart.textContent = contentCart;
    frontWrapperCart.append(cartoonCartBackForFront);
    backWrapperCart.append(wrapperContentCart);
    wrapperCart.append(backWrapperCart, frontWrapperCart);

    objCart = {
        idCart,
        openCloseStatus,
        wrapperContentCart,
        frontWrapperCart,
        backWrapperCart,
        wrapperCart,
        twiceStatus,
    }
    wrapperCart.addEventListener('click', function () {

        openCloseStatus = !openCloseStatus;
        idCart = obj.idCart;
        // mistakeCounter=mistakeCounter++;
        // console.log(mistakeCounter)
        checkStatusCart(objCart)
    })


    //при клике стату карточки не передается
    return {
        objCart,
    };
}
//вывод игры в браузер
function createSquare() {
    containerGame.classList.add('p-1', 'bg-primary', 'w-100', 'h-100', 'border', 'border-dark')
    leftContainer.classList.add('h-100', 'w-75')

    headWrap.classList.add('d-flex', 'justify-content-between', 'pl-5', 'pr-5')
    //headWrap.innerHTML='';
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
    headWrap.append(twiceTitle.wrapperNameGame);
    headWrap.append(twiceTitle.timerDisplay);
    leftContainer.append(headWrap, containerGame)
    //headWrap.append();
    container.append(leftContainer, twiceTitle.formStartGame);
    //container.append(containerGame);
}

//функция учета кликов и статуса карт(открыта - закрыта)

function checkStatusCart(obj) {
    //проверяем отрыкты ли парна карта, т.е. нах-ся она в statusArr если нет выходим из функции
    //если карта открыта она не кликается функция прерывается
    for (let elAtatusArr of statusArr) {

        if (statusArr.length > 1) {
            if (obj.idCart == elAtatusArr.idCart) {
                return;
            }
        }
    }
    //добавляем объетк кликуемой карты в массив в переменные присваем последний и предпоследний элемент
    statusArr.push(obj);
    let lastElement = statusArr.length - 1;
    let beforeLastElement = statusArr.length - 2;
    //если в массиве кликнутых карт не четное число
    if (statusArr.length % 2 == 1) {
        obj.frontWrapperCart.style.transform = 'perspective(600px) rotateY(-180deg)';
        obj.backWrapperCart.style.transform = 'perspective(600px) rotateY(0deg)';
    }
    //если в массиве кликнутых карт четное число
    if (statusArr.length % 2 == 0) {//если это одна и таже карта удаляем из массива последний элемент
        if (statusArr[beforeLastElement].idCart == statusArr[lastElement].idCart) {
            statusArr.pop();
        } else {
            obj.frontWrapperCart.style.transform = 'perspective(600px) rotateY(-180deg)';
            obj.backWrapperCart.style.transform = 'perspective(600px) rotateY(0deg)';
            if (mistakeCounter==1){
                console.log('1 ощибка')
            }
            console.log('нажатие', mistakeCounter)
            //    obj.wrapperCart.style.transform='perspective(100px) rotateY(0deg)';
            if (statusArr[beforeLastElement].wrapperContentCart.textContent == statusArr[lastElement].wrapperContentCart.textContent) {
                statusArr[beforeLastElement].twiceStatus = true;
                statusArr[lastElement].twiceStatus = true;
            } else {
                function transformCartBack(statusArr, frontWrapperCart) {
                    console.log(statusArr)
                    statusArr[beforeLastElement].frontWrapperCart.style.transform = 'perspective(600px) rotateY(0deg)';
                    statusArr[beforeLastElement].backWrapperCart.style.transform = 'perspective(600px) rotateY(180deg)';
                    statusArr[lastElement].frontWrapperCart.style.transform = 'perspective(600px) rotateY(0deg)';
                    statusArr[lastElement].backWrapperCart.style.transform = 'perspective(600px) rotateY(180deg)';
                    statusArr.pop();
                    statusArr.pop();
                }
                setTimeout(transformCartBack, 1000, statusArr)
                if (mistakeCounter != -1) {

                    mistakeCounter = mistakeCounter + 1;
                    console.log('407-ощибка', mistakeCounter)
                    console.log(timerDisplay.textContent)
                    startThreeMistake()
                }
            }
            setTimeout(openWrapGameOver, 1000, statusArr, mixedArr, 'Вы выиграли')
        }
    }
}

//функция открытия окна завершения игры
function openWrapGameOver(statusArr = 0, mixedArr = 0, gameResult = 'Вы проиграли') {
    // console.log(buttonReset);
    if (statusArr.length == mixedArr.length) {
        clearTimeout(timerId);
        const wrapGameOver = document.createElement('div');
        const titleGameOver = document.createElement('h2');
        const buttonGameOver = document.createElement('button');
        wrapGameOver.classList.add('pt-5', 'd-inline-block', 'm-1');
        wrapGameOver.style.position = 'absolute'
        wrapGameOver.style.top = '50%'
        wrapGameOver.style.left = '50%'
        wrapGameOver.style.width = '80%'
        wrapGameOver.style.height = '80%'
        wrapGameOver.style.transform = 'translate(-50%, -50%)'
        wrapGameOver.style.opacity = '0.9'
        // transform: translate(-50%, -50%);


        wrapGameOver.classList.add('bg-danger', 'rounded', 'border', 'border-danger', 'text-center')
        if (gameResult == 'Вы проиграли') {
            wrapGameOver.classList.remove('bg-success')
            wrapGameOver.classList.add('bg-danger')
        } else {
            wrapGameOver.classList.remove('bg-danger')
            wrapGameOver.classList.add('bg-success')
        }
        titleGameOver.textContent = gameResult;
        buttonGameOver.classList.add('btn', 'btn-primary');
        buttonGameOver.textContent = 'Начать новую игру';
        wrapGameOver.append(titleGameOver);
        wrapGameOver.append(buttonGameOver);
        containerGame.append(wrapGameOver);
        buttonReset.disabled = true;
        //buttonReset.remove();
        gameOver(buttonGameOver);

    }
}

// функция остановки игры
function gameOver(button) {
    button.addEventListener('click', function () {
        clearTimeout(timerId);
        container.innerHTML = '';
        containerGame.innerHTML = ''
        headWrap.innerHTML = '';
        statusArr = []; cartArr = []; mixedArr = [];
        // console.log('statusArr', statusArr);
        // console.log('cartArr', cartArr)
        // console.log('mixedArr', mixedArr)
        createSquare();
    })
}

//функция отображения таймера

function timer(timeDalay, timerDisplay) {
    // amountTimeValue=parseInt(amountTime.value)
    let time = timeDalay / 1000 - 1;
    //timerDisplay.innerHTML=time;
    function timerStap() {
        // const minutes =Math.floor(time / 60);
        // let seconds = time % 60;
        // seconds = seconds < 10 ? '0'+ seconds: seconds;
        timeDalayFormat = timeFormatDisplay(time);
        minutes = timeDalayFormat.minutes;
        seconds = timeDalayFormat.seconds;

        if (parseInt(time) <= 0) {
            timerDisplay.innerHTML = `${minutes}:${seconds}`;
            clearInterval(stopInterval)
        }
        if (time > 0) {
            timerDisplay.innerHTML = `${minutes}:${seconds}`;
            time--;
        }
    }
    let stopInterval = setInterval(timerStap, 1000);
}
//фукция правильного отображения секунд (01,02) на экране
function timeFormatDisplay(timeSeconds) {
    const minutes = Math.floor(timeSeconds / 60);
    let seconds = timeSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return {
        minutes,
        seconds,
    }
}

//фукция запуска 3 ощибок
function startThreeMistake() {
    if (mistakeCounter==1){
        timerDisplay.classList.add('text-warning');
        timerDisplay.textContent='○ ♥ ♥';
    }else if(mistakeCounter==2){
        timerDisplay.classList.add('text-danger');
        timerDisplay.textContent='○ ○ ♥';
    }else if (mistakeCounter == 3) {
        timerDisplay.textContent='○ ○ ○';
        console.log('3 mistake');
        setTimeout(openWrapGameOver, 1000)
        // openWrapGameOver();
        timerDisplay.classList.add('text-dark');
        mistakeCounter = -1;
    }
}


createSquare();

