$(document).ready(
    function () {
        //when player clicks an image run the game function
        $("img").click(calculateWinner);
        //when player clicks next round button run the function to make all the images appear again
        $("#nextRound").click(nextRound);
        //when player clicks the restart button run the function to set the counter variables back to 0
        $("#restart").click(restartGame);

        //count how many times human won
        var countHumanWinner = 0;
        //count how many times computer won
        var countComputerWinner = 0;



        function calculateWinner()
        {

            if(countHumanWinner < 2 && countComputerWinner <2)
            {
                //human turn
                var chosenOption = $(this);
                var humanNum = chosenOption.attr("value");
                humanNum = parseFloat(humanNum);

                //computer turn
                //pick a random number 1 - 5
                var computerNum = Math.floor(Math.random() * 5) + 1;

                //see if human chose 1(rock)
                //if computer chose 1(rock) then tie
                //if computer chose 2(paper) then computer wins (covers)
                //if computer chose 3(scissors) then human wins (crushes)
                //if computer chose 4(lizard) then human wins (crushes)
                //if computer chose 5(spock) then computer wins (vaporizes)
                if(humanNum === 1)
                {
                    if(computerNum === 1)
                    {
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Rock <br>It's a tie");
                    }
                    else if(computerNum === 2)
                    {

                        $(".scissors").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Paper <br>Paper covers rock and computer wins");
                        countComputerWinner += 1;
                    }
                    else if(computerNum === 3)
                    {
                        $(".paper").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Scissors<br>Rock crushes Scissors and human wins");
                        countHumanWinner += 1;
                    }
                    else if(computerNum === 4)
                    {
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Lizard <br>Rock crushes Lizard and human wins");
                        countHumanWinner += 1;
                    }
                    else
                    {
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".lizard").hide();

                        $("#output").html("Computer chose Spock<br>Spock vaporizes Rock and computer wins");
                        countComputerWinner += 1;
                    }

                }
                    //see if human chose 2(paper)
                    //if computer chose 1(rock) then human wins (covers)
                    //if computer chose 2(paper) then tie
                    //if computer chose 3(scissors) then computer wins (cuts)
                    //if computer chose 4(lizard) then computer wins (eats)
                    //if computer chose 5(spock) then human wins (disproves)
                else if(humanNum === 2)
                {
                    if(computerNum === 1)
                    {
                        $(".scissors").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Rock<br>Paper covers Rock and human wins");
                        countHumanWinner += 1;
                    }
                    else if(computerNum === 2)
                    {
                        $(".rock").hide();
                        $(".scissors").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Paper <br>It's a tie");
                    }
                    else if(computerNum === 3)
                    {
                        $(".rock").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Scissors<br>Scissors cuts Paper and computer wins");
                        countComputerWinner += 1;
                    }
                    else if(computerNum === 4)
                    {
                        $(".scissors").hide();
                        $(".rock").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Lizard <br>Lizard eats Paper and computer wins");
                        countComputerWinner += 1;
                    }
                    else
                    {
                        $(".scissors").hide();
                        $(".lizard").hide();
                        $(".rock").hide();

                        $("#output").html("Computer chose Spock<br>Paper disproves Spock and human wins");
                        countHumanWinner += 1;
                    }
                }
                    //see if human chose 3(scissors)
                    //if computer chose 1(rock) then computer wins (crushes)
                    //if computer chose 2(paper) then human wins (cuts)
                    //if computer chose 3(scissors) then tie
                    //if computer chose 4(lizard) then human wins (decapitates)
                    //if computer chose 5(spock) then computer wins (smashes)
                else if(humanNum === 3)
                {
                    if(computerNum === 1)
                    {
                        $(".paper").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Rock<br>Rock crushes Scissors and computer wins");
                        countComputerWinner += 1;
                    }
                    else if(computerNum === 2)
                    {
                        $(".rock").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Paper <br>Scissors cuts Paper an human wins");
                        countHumanWinner += 1;
                    }
                    else if(computerNum === 3)
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".lizard").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Scissors<br>It's a tie");
                    }
                    else if(computerNum === 4)
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Lizard <br>Scissors decapitates Lizard and human wins");
                        countHumanWinner += 1;
                    }
                    else
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".lizard").hide();

                        $("#output").html("Computer chose Spock<br>Spock smashes Scissors and computer wins");
                        countComputerWinner += 1;
                    }
                }
                    //see if human chose 4(lizard)
                    //if computer chose 1(rock) then computer wins (crushes)
                    //if computer chose 2(paper) then human wins (eats)
                    //if computer chose 3(scissors) then computer wins (decapitates)
                    //if computer chose 4(lizard) then tie
                    //if computer chose 5(spock) then human wins (poisons)
                else if(humanNum === 4)
                {
                    if(computerNum === 1)
                    {
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Rock <br>Rock crushes Lizard and computer wins");
                        countComputerWinner += 1;
                    }
                    else if(computerNum === 2)
                    {
                        $(".rock").hide();
                        $(".scissors").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Paper <br>Lizard eats Paper and human wins");
                        countHumanWinner += 1;
                    }
                    else if(computerNum === 3)
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Scissors<br>Scissors decapitates Lizard and computer wins");
                        countComputerWinner += 1;
                    }
                    else if(computerNum === 4)
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".spock").hide();

                        $("#output").html("Computer chose Lizard <br>It's a tie");
                    }
                    else
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".scissors").hide();

                        $("#output").html("Computer chose Spock<br>Lizard poisons Spock and human wins");
                        countHumanWinner += 1;
                    }
                }
                    //see if human chose 5(spock)
                    //if computer chose 1(rock) then human wins (vaporizes)
                    //if computer chose 2(paper) then computer wins (disproves)
                    //if computer chose 3(scissors) then human wins (smashes)
                    //if computer chose 4(lizard) then computer wins (poisons)
                    //if computer chose 5(spock) then tie
                else if(humanNum === 5)
                {
                    if(computerNum === 1)
                    {
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".lizard").hide();

                        $("#output").html("Computer chose Rock <br>Spock vaporizes Rock and human wins");
                        countHumanWinner += 1;
                    }
                    else if(computerNum === 2)
                    {
                        $(".rock").hide();
                        $(".scissors").hide();
                        $(".lizard").hide();

                        $("#output").html("Computer chose Paper <br>Paper disproves Spock and computer wins");
                        countComputerWinner += 1;
                    }
                    else if(computerNum === 3)
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".lizard").hide();

                        $("#output").html("Computer chose Scissors<br>Spock smashes Scissors and human wins");
                        countHumanWinner += 1;
                    }
                    else if(computerNum === 4)
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".scissors").hide();

                        $("#output").html("Computer chose Lizard <br>Lizard Poisons Spock and computer wins");
                        countComputerWinner += 1;
                    }
                    else
                    {
                        $(".rock").hide();
                        $(".paper").hide();
                        $(".scissors").hide();
                        $(".lizard").hide();

                        $("#output").html("Computer chose Spock<br>It's a tie");
                    }
                }
                //make winner of the round appear
                $("#output").show();
            }

            //if human won twice announce that
            if(countHumanWinner === 2)
            {
                $("#endAnnouncement").show();
                $("#endAnnouncement").text(`Game Over Human Won`);
            }

            //if computer won twice announce that
            else if(countComputerWinner === 2)
            {
                $("#endAnnouncement").show();
                $("#endAnnouncement").text(`Game Over Computer Won`);
            }


        }
        //make all the pictures appear again for the next round
        function nextRound()
        {
            $(".rock").show();
            $(".paper").show();
            $(".scissors").show();
            $(".lizard").show();
            $(".spock").show();
            $("#output").hide();
            $("#endAnnouncement").hide();
        }

        //make pictures appear again and restart the counter variables
        function restartGame()
        {
            $(".rock").show();
            $(".paper").show();
            $(".scissors").show();
            $(".lizard").show();
            $(".spock").show();
            $("#output").hide();
            $("#endAnnouncement").hide();
            countHumanWinner = 0;
            countComputerWinner = 0;
        }
    }
);