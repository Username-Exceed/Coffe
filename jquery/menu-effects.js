$(document).ready(main);

var contador = 1;

function main(){
    $('.btn-bar').click(function(){
        //$('.nav-content').toggle();

        if(contador == 1){
            $('.nav-content').animate({
                bottom:'-266px'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.nav-content').animate({
                bottom:'423px'
            })
        }

    });
};
