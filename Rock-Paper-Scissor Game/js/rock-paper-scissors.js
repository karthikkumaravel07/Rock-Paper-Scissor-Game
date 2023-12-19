
      let score=JSON.parse(localStorage.getItem('score')) || {
          wins:0,
          loss:0,
          tie:0
        };

        //DOM
       updateScore();

       document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
          playGame('rock');
        }else  if(event.key==='p'){
          playGame('paper');
        }else  if(event.key==='s'){
          playGame('scissors');
        }
       })
      
       
        function playGame(playerMove){
        const computerMove=pickComputerMove();
        let result = '';
        if(playerMove==='scissors'){
          if(computerMove==='rock'){
            result='you lost';
          }else if(computerMove==='paper'){
            result='you won';
          } else if(computerMove==='scissors'){
            result='Tie';
          }
          
        }
        else if(playerMove==='paper'){
          if(computerMove==='rock'){
          result='you won';
          }else if(computerMove==='paper'){
          result='Tie';
          } else if(computerMove==='scissors'){
          result='you lost';
          }
        } 
       
      else if(playerMove==='rock'){
        if(computerMove==='rock'){
        result='Tie';
        }else if(computerMove==='paper'){
          result='you lost';
        } else if(computerMove==='scissors'){
          result='you won';
        }

      }
      if(result==='you won'){
        score.wins+=1;
      }else if(result==='you lost'){
        score.loss+=1;
      }else  if(result==='Tie'){
        score.tie+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      updateScore();

      document.querySelector('.js-result').innerHTML=result;

      document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class ="move-icon">  <img src="images/${computerMove}-emoji.png" class ="move-icon"> Computer`;

      }

      function updateScore(){
        document.querySelector('.js-score')
        .innerHTML=` Wins:${score.wins}
      Loss:${score.loss}
      Tie:${score.tie}`
      }



      function pickComputerMove(){
        const randomNumber=Math.random();
        let computerMove='';

        if(randomNumber>=0 && randomNumber<1/3){
          computerMove='rock';
        } else if(randomNumber>=1/3 && randomNumber<2/3){
          computerMove='paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
          computerMove='scissors';
        }
        console.log('computer move=='+computerMove);
        return computerMove;

      }

