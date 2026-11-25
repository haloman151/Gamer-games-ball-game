//P5 setup() bliver kaldt EN gang før siden vises 

function setup(){
    startTimer(3 , 0, null, ()=>{shiftPage('#page1')})
    select('#mainBnt1').mousePressed(()=>shiftPage('#page2'))
    select('#mainBnt2').mousePressed(()=>shiftPage('#page3'))
    select('#mainBnt3').mousePressed(()=>shiftPage('#page4'))

    
}


