setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    if ((hour<12) && (hour>6)){
        document.getElementById("a31").innerHTML = "GRAB SOME HEALTHY BREAKFAST";      
                
    }
    else if((hour<16)){
        document.getElementById("a31").innerHTML = "LET'S HAVE SOME LUNCH"; 

    }
    else if((hour<20)){
        document.getElementById("a31").innerHTML = "STOP YAWNING, GET SOME TEA... IT'S JSUT EVENING!";     

    }
    else{
        document.getElementById("a31").innerHTML = "CLOSE TOUR EYES AND GO TO SLEEP";
        
    }
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }
   
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    
    
    document.getElementById("sp1")
            .innerHTML = `${hour}\n hrs` ;
    document.getElementById("sp2")
            .innerHTML = `${min}\n mins`;
    document.getElementById("sp3")
            .innerHTML = `${sec}\n sec`;
    document.getElementById("sp4")
            .innerHTML = am_pm;
    
}
 showTime();
function dataGet(){
    let op=document.getElementById("first")
    let Tone=op.options[op.selectedIndex].text;
    // let toneone=document.getElementById("t1");
    document.getElementById("t1").textContent="Wake_up Time:" + Tone  ;
    let op1=document.getElementById("second")
    let Ttwo=op1.options[op1.selectedIndex].text;
    document.getElementById("t2").textContent="Lunch Time:"+Ttwo;
    let op2=document.getElementById("third")
    let Tthree=op2.options[op2.selectedIndex].text;
    document.getElementById("t3").textContent="Nap Time:"+ Tthree;
    let op4=document.getElementById("four")
    let Tfour=op4.options[op4.selectedIndex].text;
    document.getElementById("t4").textContent="Night Time:"+Tfour;

    let time = new Date();
    let hour = time.getHours();
    let brkfst=document.getElementById("first")
    let k1=(brkfst[brkfst.selectedIndex].value)
    let lunch=document.getElementById("second")
    let k2=(lunch[lunch.selectedIndex].value)
    let nap=document.getElementById("third")
    let k3=(nap[nap.selectedIndex].value)
    let sleep1=document.getElementById("four")
    let k4=(sleep1[sleep1.selectedIndex].value)
    if (hour==parseInt(k1)){
        document.getElementById('a3').innerHTML="GOOD MORNING !! WAKE UP!!";
        
        document.getElementById("final").src="brkphoto.jpg"
        
    }
    else if(hour==parseInt(k2)){
        document.getElementById('a3').innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("final").src="lunch.png"
       

    }
    else if(hour==parseInt(k3)){
        document.getElementById('a3').innerHTML="GOOD EVENING!!";
        document.getElementById("final").src="evening.png"

    }
    else if(hour==parseInt(k4)){
        document.getElementById('a3').innerHTML="GOOD NIGHT!!";
        document.getElementById("final").src="sleep.png"


    }
        

}




