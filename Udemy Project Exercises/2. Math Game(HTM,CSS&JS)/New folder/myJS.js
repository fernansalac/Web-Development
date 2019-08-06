var playing = false;
var score;
//if we click on the start/reset
    document.getElementById("startreset").onclick = 
    function(){
    //if we are playing
        if(playing == true){
        //reload page
            location.reload();
        }else{
            score = 0;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("timeremaining").style.display = "block";
        }
    }
    
        
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1sec in loops
            //time left?
                //yes->continue
                //no->gameover
            //change button to reset
            //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score 
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1 sec