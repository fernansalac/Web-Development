$(function () {
    //variables 
    var mode = 0; //app mode
    var timeCounter = 0; //time counter
    var lapCounter = 0; //lap counter
    var action; //variable for setInterval
    var lapNumber = 0; //number of laps
    //minutes,seconds,centiseconds for time and lap
    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
    
    //on app laod show start and lap buttons
    hideshowButtons("#startButton","#lapButton");
    
    //click on start button
    $("#startButton").click(function(){
         //mode on
        mode = 1;
        //show stop and lap buttons
        hideshowButtons("#stopButton","#lapButton")
        //start counter
        startAction();
    });
    
    //click on stop button
        //show resume and reset buttons
        //stop counter
        
    //click on resume button
        //shwo stop and lap buttons 
        //start action
    
    //click on reset button
        //reload the page
    
    //click on lap button
        //if mode is ON
            //stop action
            //reset lap and print lap details
            //start action        
    
    //functions 
    //hide/show function
    function hideshowButtons(x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    
    //start the counter
    function startAction() {
        action = setInterval(function(){
            timeCounter++;
            lapCounter++;
            updateTime();
        }, 10);
    }
    
    //Update time
    function updateTime() {
        //1min = 60sec * 100centisec = 6000centisec
        timeMinutes = Math.floor(timeCounter/6000);
        //1 sec = 100centisec 
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiseconds = (timeCounter%6000)%100;
        
        $("#timeminute").text(timeMinutes);
        $("#timesecond").text(timeSeconds);
        $("#timecentisecond").text(timeCentiseconds);
        
        //1min = 60sec * 100centisec = 6000centisec
        lapMinute = Math.floor(lapCounter/6000);
        //1 sec = 100centisec 
        lapSeconds = Math.floor((lapCounter%6000)/100);
        lapCentiseconds = (lapCounter%6000)%100;
        
        $("#lapminute").text(lapMinutes);
        $("#lapsecond").text(lapSeconds);
        $("#lapcentisecond").text(lapCentiseconds);
        
        /* sample */
        $(".sample").text(timeCounter);
        
    }
    
});
