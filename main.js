let mSeg = 0 //valor inicial de microsegundos
let seg = 1 //valor inicial de seg
let min = 1 //valor inicial de min

const microSeg = $('#mSeg')//span microsegundos
const second = $('#seg')//span segundo
const minute = $('#min')//span minutos

let btnPlay = $("#play") //btn play
let btnPause = $("#pause") // btn pause
let btnStop = $("#stop") // btn stop

let idInterval //varibale que almacena el setInterval

let i = 0 //contador

function tempo(){//function que escribe el paso del tiempo

microSeg.text(mSeg)
    mSeg++ //aumenta el valor inicial de mSeg
    if (mSeg < 10){//microsegundo es mas grande que 10 se le agrega '0'
        microSeg.text('0' + mSeg++)
    }
    if(mSeg == 99){//reinicia dsp de 60 microsegundos
        mSeg = 0 //reinica el valor a 0
        if (seg < 10){
            second.text('0' + seg++)
        }else if(seg >= 10){
                second.text(seg++)
            }
    }
    if(seg > 59){
        if (min < 10){
            minute.text('0' + min++)//aumenta el valor inicial de min
        }else if(min > 10){
            minute.text(min++)
        }
        seg = 0
    }
    }
     if(min == 59){
        min = 0
    }   
function restoreBTN(){//function para restaurar los botenes
    btnPlay.css({'display': 'none'})
    btnStop.css({'display': 'none'})
    btnPause.css({'display': 'inline-block'})
    i = 0
}

function deleteBTN(){//function para eleminar los botenes
    btnPlay.css({'display': 'none'})
    btnPause.css({'display': 'inline-block'})
    btnStop.css({'display': 'none'})
    i = 1
}

function play(e){//inicia el intervalor de tiempo
    console.log(0);
    $('#cronoDiv__cicule--animation').css({'animation-play-state': 'running'})
    if(i == 0){
        deleteBTN()
        console.log('ingreso');
    }else{
        restoreBTN()
    }
    idInterval = setInterval(tempo, 10.2)//18
}
function pausar(e){//pausa el intervalo de tiempo
    console.log(i);
    $('#cronoDiv__cicule--animation').css({'animation-play-state': 'paused'})
    btnPlay.css({'display': 'inline-block'})
    btnStop.css({'display': 'inline-block'})
    btnPause.css({'display': 'none'})
    clearInterval(idInterval)
    console.log(i);
}

function stop(e) {//reinicia a 00:00:00 el paso del tiempo
    i = 0    
    if(i == 0){
        btnStop.css({'display': 'none'})
    }
    mSeg = '00'
    seg = '00'
    min = '00'
    microSeg.text(mSeg)
    second.text(seg)
    minute.text(min)
}

$('#play').on('click', play)

$('#pause').on('click', pausar)

$('#stop').on('click', stop)


