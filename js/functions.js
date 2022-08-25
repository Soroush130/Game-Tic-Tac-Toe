var start_user_game = 1;


function PressButton(e) {
    if(e.getAttribute('data-isClick') === null){
        if(start_user_game===1){
            e.innerHTML = `<i class="fa fa-circle-o"></i>`;
            e.setAttribute('data-isClick', 'true');
            e.setAttribute('data-idUser', 1);
            start_user_game = 2;
            FinishGame()
        }else if(start_user_game ===2){
            e.innerHTML = `<i class="fa fa-close"></i>`;
            e.setAttribute('data-isClick', 'true');
            e.setAttribute('data-idUser', 2);
            start_user_game = 1;
            FinishGame()
        };
    };
};

function FinishGame() {
    var cells = document.querySelectorAll('.cell'),
    cell,
    is_finish=0;
    for(let c=0; c<cells.length; c++){
        cell = cells[c];
        if(cell.getAttribute('data-isClick') == 'true'){
            is_finish += 1;
        };
    };

    // console.log(is_finish);

    if (is_finish === 9){
        let mylist=[], myuser='0';
        ReGame(mylist, myuser, false)
    };

    CheckWinningUser();
};

function CheckWinningUser() {

    var button1,button2,button3,button4,
        button5, button6, button7, button8, button9;
    
    button1 = document.getElementById('1').getAttribute('data-idUser');
    button2 = document.getElementById('2').getAttribute('data-idUser');
    button3 = document.getElementById('3').getAttribute('data-idUser');
    button4 = document.getElementById('4').getAttribute('data-idUser');
    button5 = document.getElementById('5').getAttribute('data-idUser');
    button6 = document.getElementById('6').getAttribute('data-idUser');
    button7 = document.getElementById('7').getAttribute('data-idUser');
    button8 = document.getElementById('8').getAttribute('data-idUser');
    button9 = document.getElementById('9').getAttribute('data-idUser');


    // User1 Win
    if((button1 === '1')&&(button2 === '1')&&(button3==='1')){
        ReGame([1,2,3], '1', true);
    }
    if((button4 === '1')&&(button5 === '1')&&(button6==='1')){
        ReGame([4,5,6], '1', true);
    }
    if((button7 === '1')&&(button8 === '1')&&(button9==='1')){
        ReGame([7,8,9], '1', true);
    }
    if((button1 === '1')&&(button4 === '1')&&(button7==='1')){
        ReGame([1,4,7], '1', true);
    }
    if((button2 === '1')&&(button5 === '1')&&(button8==='1')){
        ReGame([2,5,8], '1', true);
    }
    if((button3 === '1')&&(button6 === '1')&&(button9==='1')){
        ReGame([3,6,9], '1', true);
    }
    if((button1 === '1')&&(button5 === '1')&&(button9==='1')){
        ReGame([1,5,9], '1', true);
    }
    if((button3 === '1')&&(button5 === '1')&&(button7==='1')){
        ReGame([3,5,7], '1', true);
    }


    // User2 Win
    if((button1 === '2')&&(button2 === '2')&&(button3==='2')){
        ReGame([1,2,3], '2', true);
    }
    if((button4 === '2')&&(button5 === '2')&&(button6==='2')){
        ReGame([4,5,6], '2', true);
    }
    if((button7 === '2')&&(button8 === '2')&&(button9==='2')){
        ReGame([7,8,9], '2', true);
    }
    if((button1 === '2')&&(button4 === '2')&&(button7==='2')){
        ReGame([1,4,7], '2', true);
    }
    if((button2 === '2')&&(button5 === '2')&&(button8==='2')){
        ReGame([2,5,8], '2', true);
    }
    if((button3 === '2')&&(button6 === '2')&&(button9==='2')){
        ReGame([3,6,9], '2', true);
    }
    if((button1 === '2')&&(button5 === '2')&&(button9==='2')){
        ReGame([1,5,9], '2', true);
    }
    if((button3 === '2')&&(button5 === '2')&&(button7==='2')){
        ReGame([3,5,7], '2', true);
    }
    
};


function ReGame(list, user, status){

    if(status === true){
        for(let i=0; i<list.length;i++){
            document.getElementById(list[i].toString()).style.backgroundColor = '#68e252';
            document.getElementById(list[i].toString()).style.boxShadow = 'inset 1px 1px 10px #050505, inset -1px -1px 10px #050505';
        };
    
    
        if(user === '1'){
            document.querySelector('.showResult1').innerHTML = "You Win";
        }else if(user === '2'){
            document.querySelector('.showResult2').innerHTML = "You Win";
        };
    
        // start agin geme
    
        setTimeout(() => {
            document.querySelector('.showResult1').innerHTML = "";
            document.querySelector('.showResult2').innerHTML = "";
            
            for(let i=0; i<list.length;i++){
                document.getElementById(list[i].toString()).style.backgroundColor = '';
            };
    
            for(let i=1; i<10; i++){
                var button = document.getElementById(i.toString());
                button.removeAttribute('data-idUser');
                button.removeAttribute('data-isClick');
                button.innerHTML = '';
            };
    
            start_user_game = 1;
    
    
        }, 2000);

    }else if(status===false){
        document.querySelector('.showResult1').innerHTML = "Equal";
        document.querySelector('.showResult2').innerHTML = "Equal";
        
        
        setTimeout(() => {
            document.querySelector('.showResult1').innerHTML = "";
            document.querySelector('.showResult2').innerHTML = "";
            
            for(let i=0; i<list.length;i++){
                document.getElementById(list[i].toString()).style.backgroundColor = '';
            };
    
            for(let i=1; i<10; i++){
                var button = document.getElementById(i.toString());
                button.removeAttribute('data-idUser');
                button.removeAttribute('data-isClick');
                button.innerHTML = '';
            };
    
            start_user_game = 1;
    
    
        }, 2000);
    }

    
}