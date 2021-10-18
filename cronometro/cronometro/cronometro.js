
var seg=00;
var min=00;
var hor=00;
var intervalo
function doisdigitos(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function iniciar(){
    rel()
    intervalo= setInterval(rel,1)


}

function pausar(){
    clearInterval(intervalo)

}

function parar(){
    clearInterval(intervalo)
    seg=0
    min=0
   

}

function rel(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            min=0
            hor++
        }
    }    document.getElementById('rel').innerText=doisdigitos(hor)+':'+doisdigitos(min)+':'+doisdigitos(seg)
}