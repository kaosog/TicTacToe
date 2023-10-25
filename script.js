



const reset = document.querySelector("button");
reset.addEventListener("click",()=>{
    history.go();
})


const buttons = document.querySelectorAll("input")
let counter=0;
function play(){
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        counter%2==0? button.value="X":button.value="O";
        counter++;
        button.disabled=true;
        if(checkWinner(buttons , 'X')){
            document.querySelector('.board').style.display = 'none'
            document.querySelector('.winner').style.backgroundImage = 'url("/images/X.jpg")'
            document.querySelector('.word').style.display = 'block';
            document.querySelector('.words').style.display = 'block';
            setTimeout(function(){
                history.go();
            },1500)
        }else if(checkWinner(buttons,'O')){
            document.querySelector('.board').style.display = 'none'
            document.querySelector('.winner').style.backgroundImage = 'url("/images/O.jpg")'
            document.querySelector('.word').style.display = 'block';
            document.querySelector('.words').style.display = 'block';
            setTimeout(function(){
                history.go();
            },1500)
        }else if(counter===9){
            history.go();
        }
        
    })
})
}

function checkWinner(board,symbol){
    for(let i=0;i<7;i+=3){
        if(board[i].value===symbol && board[i+1].value===symbol && board[i+2].value==symbol){
        console.log("true");
        return true;
        }
    }
    for(let i=0;i<3;i++){
        if(board[i].value===symbol && board[i+3].value===symbol && board[i+6].value ==symbol){
        return true;
        }
    }
    if(board[0].value===symbol&&board[4].value===symbol&&board[8].value===symbol||board[6].value===symbol&&board[4].value===symbol&&board[2].value===symbol){
        return true;
    }
}


play();    



