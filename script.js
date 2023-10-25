const reset = document.querySelector("button");
reset.addEventListener("click",()=>{
    history.go();
})


const buttons = document.querySelectorAll("input")
let counter=0;
function play(){
    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            button.value='X'
            // counter%2==0? button.value="X":button.value="O";
            counter++;
            button.disabled=true;
            Aiturn();
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
            }else if(counter===5){
                history.go();
            }
            
        })
    })
}

  

    // function isitWinner(){
    //     for(let i=0;i<9;i++){
    //         let buttoncopy=Array.from(buttons);
    //         for(let p=0;p<9;p++){
    //             let buttoncopy=Array.from(buttons);
    //             buttoncopy[i]='O';
    //             if(checkWinner(buttoncopy,'O')){
    //                 return i;
    //             }
    //         }
    //     }
    // }
//     function isitWinner() {
//         const copiedNodes = [];
//         for (let i = 0; i < 9; i++) {
//             buttons.forEach(node => {
//                 const copiedNode = node.cloneNode(true);
//                 copiedNodes.push(copiedNode);
//             });
//              copiedNodes[i].value = 'O';
//             if (checkWinner(copiedNodes, 'O')) {
//                 return i;
//             }
//         }
// }
function isitWinner() {
    for (let i = 0; i < 9; i++) {
        if (!buttons[i].disabled) {
            const buttoncopy = [];
            for (let j = 0; j < buttons.length; j++) {
                const button = buttons[j].cloneNode(true);
                buttoncopy.push(button);
            }

            buttoncopy[i].value = 'O';
            if (checkWinner(buttoncopy, 'O')) {
                return i;
            }
        }
    }
    return undefined; // Return undefined if no winning move is found
}

    function Aiturn(){
        
        number2= Math.floor(Math.random() * 9)
        number3= Math.floor(Math.random() * 9)
        number4= Math.floor(Math.random() * 9)
        number5= Math.floor(Math.random() * 9)
        number6= Math.floor(Math.random() * 9)
        number7= Math.floor(Math.random() * 9)
        number8= Math.floor(Math.random() * 9)

        
        if(isitWinner()!=undefined){
            buttons[isitWinner()].value='O'
        }else if(!(buttons[number2].disabled)){
            buttons[number2].value='O';
            buttons[number2].disabled=true;
        }else if(!(buttons[number3].disabled)){
            buttons[number3].value='O';
            buttons[number3].disabled=true;
        }else if(!(buttons[number4].disabled)){
            buttons[number4].value='O';
            buttons[number4].disabled=true;
        }else if(!(buttons[number5].disabled)){
            buttons[number5].value='O';
            buttons[number5].disabled=true;
        }else if(!(buttons[number6].disabled)){
            buttons[number6].value='O';
            buttons[number6].disabled=true;
        }else if(!(buttons[number7].disabled)){
            buttons[number7].value='O';
            buttons[number7].disabled=true;
        }else if(!(buttons[number8].disabled)){
            buttons[number8].value='O';
            buttons[number8].disabled=true;
        }

        // if(isitWinner()!=undefined){
        //     buttons[isitWinner()]='O'
        // }else if(!(buttons[0].disabled)){
        //     buttons[0].value='O';
        //     buttons[0].disabled=true;
        // }else if(!(buttons[6].disabled)){
        //     buttons[6].value='O';
        //     buttons[6].disabled=true;
        // }else if(!(buttons[4].disabled)){
        //     buttons[4].value='O';
        //     buttons[4].disabled=true;
        // }else if(!(buttons[2].disabled)){
        //     buttons[2].value='O';
        //     buttons[2].disabled=true;
        // }else if(!(buttons[8].disabled)){
        //     buttons[8].value='O';
        //     buttons[8].disabled=true;
        // }else if(!(buttons[7].disabled)){
        //     buttons[7].value='O';
        //     buttons[7].disabled=true;
        // }else if(!(buttons[8].disabled)){
        //     buttons[8].value='O';
        //     buttons[8].disabled=true;
        // }
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