
$(document).ready(function (){
    aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner
    $("button").click(function (){
        $input = $("#essai").val();
        if (aleatoire >= $input){
            for (x=1; x <= $input;x++){
                $("#"+x).remove();
            }
        }
        else if (aleatoire <= $input){
            for (x=$input; x <= 100 ;x++){
                $("#"+x).remove();
            }
        }


    });
});