$(document).ready(() => {
    const ogHeight = $('#vs').height;
    let userChoice = "none";
    const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");
    const fightButton = document.getElementById("fightButton");
    const playAgainButton = document.getElementById("playAgainButton");
    const uResult = document.getElementById("uResult");
    const cResult = document.getElementById("cResult");
    const uChoice = document.getElementById("uChoice");
    const cChoice = document.getElementById("cChoice");

    adjustHeightMiddle();

    //This function changes the height of the middle column
    //dependent on whether or not the user has made a choice yet
    function adjustHeightMiddle(){
        if(userChoice === 'none'){
            let height = $("div[name]").height()
            $("#vs").css("height", height);
        }else{
            $("#vs").css("height", ogHeight);
        }
    }

    function adjustHeightSides(){
        let targetHeight = $("#vs").height();
        $(".handsColumn").css("height", targetHeight);
    }

    $('.handButton').on('click', event => {
        $('.handButton').removeClass('active');
        $(event.currentTarget).toggleClass('active');
    })

    rockButton.addEventListener('click', () => {
        userChoice = "r";
        uChoice.innerHTML = "Rock";
        $('#uChoice').removeClass("hidden");
        $('#uChoice').css("font-size", "300%");
        adjustHeight();
        //$(rockButton).css("background-color", 'red');
        console.log("user choice: " + userChoice);
    });

    paperButton.addEventListener('click', () => {
        userChoice = "p";
        uChoice.innerHTML = "Paper";
        $('#uChoice').removeClass("hidden");
        $('#uChoice').css("font-size", "300%");
        adjustHeight();
        console.log("user choice: " + userChoice);
    });

    scissorsButton.addEventListener('click', () => {
        userChoice = "s";
        uChoice.innerHTML = "Scissors";
        $('#uChoice').removeClass("hidden");
        $('#uChoice').css("font-size", "300%");
        adjustHeight();
        console.log("user choice: " + userChoice);
    });

    fightButton.addEventListener('click', () => {
        console.log("fight button clicked");
        
        if(userChoice === "none"){
            window.alert("Must select a hand to play!");

        }else{
            //make visual changes
            $('#fightButton').addClass("gone");
            fadeOutOtherUserOptions(userChoice);


            const compChoice = getComputerChoice();
            console.log("computer chose: " + compChoice);
            fadeOutOtherCompOptions(compChoice);
            adjustHeightSides();
            writeCompChoice(compChoice);
            $("#cChoice").removeClass("hidden");
            const winner = determineWinner(userChoice, compChoice);
            dealWithWinner(winner);
            console.log("winner is " + winner);
            
            $("#playAgainButton").removeClass("hidden");
            console.log("done");
        }
    });

    playAgainButton.addEventListener('click', () => {
        location.reload();
    });

    function writeCompChoice(compChoice){
        if(compChoice === 'r'){
            cChoice.innerHTML = "Rock";

        }else if(compChoice === 'p'){
            cChoice.innerHTML = "Paper";
        }else{
            cChoice.innerHTML = "Scissors";
        }
        $('#cChoice').css("font-size", "300%");
    }

    function fadeOutOtherUserOptions(userChoice){
        if(userChoice === 'r'){
            $('#paperButton').slideUp();
            $('#scissorsButton').slideUp();
            $('#rockButton').removeClass("active");
        }else if(userChoice === 'p'){
            $('#scissorsButton').slideUp();
            $('#rockButton').slideUp();
            $('#paperButton').removeClass("active");
        }else{
            $('#rockButton').slideUp();
            $('#paperButton').slideUp();
            $('#scissorsButton').removeClass("active");
        }
    }

    function fadeOutOtherCompOptions(compChoice){
        if(compChoice === 'r'){
            $('#cPaper').slideUp();
            $('#cScissors').slideUp();
        }else if(compChoice === 'p'){
            $('#cScissors').slideUp();
            $('#cRock').slideUp();
        }else{
            $('#cRock').slideUp();
            $('#cPaper').slideUp();
        }
    }

    function getComputerChoice(){
        const choices = ["r", "p", "s"];
        let num = Math.floor(Math.random() *3);
        return choices[num];
    }

    function determineWinner(uChoice, cChoice){
        if(uChoice === cChoice){
            return 'tie';
        }

        if(uChoice === 'r'){
            if(cChoice === 's'){
                return 'user';
            }else{
                return 'computer';
            }
        }else if(uChoice === 'p'){
            if(cChoice === 'r'){
                return 'user';
            }else{
                return 'computer';
            }
        }else{
            if(cChoice === 'p'){
                return 'user';
            }else{
                return 'computer';
            }
        }
    }

    function dealWithWinner(winner){
        if(winner === 'user'){
            $('#uResult').hide();
            $('#cResult').hide();
            uResult.innerHTML="WINNER";
            cResult.innerHTML="LOSER";
            $('#uResult').fadeIn(3000);
            $('#cResult').fadeIn(3000);

            $('#cResult').css("color", "#58111A");
            $('#uResult').css("color", "#00563B");
            $('.userHands').css("background-color", "#90BE6D");
            $('.computerHands').css("background-color", "#F94144");
        }else if(winner === 'computer'){
            $('#uResult').hide();
            $('#cResult').hide();
            uResult.innerHTML="LOSER";
            cResult.innerHTML="WINNER";
            $('#uResult').fadeIn(3000);
            $('#cResult').fadeIn(3000);

            $('#uResult').css("color", "#58111A");
            $('#cResult').css("color", "#00563B");
            $('.userHands').css("background-color", "#F94144");
            $('.computerHands').css("background-color", "#90BE6D");
        }else{
            $('#uResult').hide();
            $('#cResult').hide();
            uResult.innerHTML="TIE";
            cResult.innerHTML="TIE";
            $('#uResult').fadeIn(3000);
            $('#cResult').fadeIn(3000);

            $('.userHands').css("background-color", "#F9844A");
            $('.computerHands').css("background-color", "#F9844A");
        }
    }

    //Below is JS for the header buttons
    let homeButton = document.getElementById("homeButton");
    homeButton.addEventListener('click', () => {
        window.open('index.html', '_self');
    });

    let rpsButton = document.getElementById("rpsButton");
    rpsButton.addEventListener('click', () => {
        window.open('rockpaperscissors.html', '_self');
    });
});
    

    
