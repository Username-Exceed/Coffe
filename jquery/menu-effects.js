$(document).ready(main);

var contador = 1;

function main(){
    $('.btn-bar').click(function(){
        //$('.nav-content').toggle();

        if(contador == 1){
            $('.nav-content').animate({
                bottom:'-265px' 
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
