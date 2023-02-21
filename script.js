
$(document).ready(function (){
    let cpt = 0;
    aleatoire = Math.ceil(Math.random()*100); //le nombre à deviner
    $("button").click(function (){
        if (cpt === 0){
            $input = $("#essai").val();
            if (aleatoire > $input){
                cpt++;
                for (x=1; x <= $input;x++){
                    $("#"+x).remove();
                }
                $("#feedback").append("<div class='flex' id='try' ><p> Essais precedant : " + $input + "</p></div>").append("<p id='wrong' class='wrong reponse'>Nope !</p>").append("<p class='reponse' id='indice'>Trop petit</p>");


            }
            else if (aleatoire < $input){
                cpt++;
                for (x=$input; x <= 100 ;x++){
                    $("#"+x).remove();
                }
                $("#feedback").append("<div id='try' class='flex' ><p>Essais precedant : " + $input + "</p></div>").append("<p id='wrong' class='wrong reponse'>Nope !</p>").append("<p class='reponse' id='indice'>Trop grand</p>");
            }
            else {
                cpt++;
                for (x=1; x <= $input - 1;x++){
                    $("#"+x).remove();
                }
                for (x=+$input + 1 ; x <= 100 ;x++){
                    $("#"+x).remove();
                }
                $("#"+ $input).addClass("winner");
                $("#feedback").append("<p>Bravo tu as reussi !</p>");
                $("#reset").removeClass("invisible")
            }
        }
        else if(cpt < 9){
            $input = $("#essai").val();
            if (aleatoire > $input){
                cpt++;
                for (x=1; x <= $input;x++){
                    $("#"+x).remove();
                }
                $("#try").append("<p>,&nbsp;" + $input + "</p>")
                $("#indice").text("Trop petit")
            }
            else if (aleatoire < $input){
                cpt++;
                for (x=$input; x <= 100 ;x++){
                    $("#"+x).remove();
                }
                $("#try").append("<p>,&nbsp;" + $input + " </p>")
                $("#indice").text("Trop grand")
            }
            else {
                cpt++;
                for (x=1; x <= $input - 1;x++){
                    $("#"+x).remove();
                }
                for (x=+$input + 1 ; x <= 100 ;x++){
                    $("#"+x).remove();
                }
                $("#"+ $input).addClass("winner");
                $("#wrong").remove();
                $("#indice").remove();
                $("#feedback").append("<p class='winner reponse' >Bravo tu as reussi !</p>");
                $("#reset").removeClass("invisible")
            }
        }
        else{
            $("#try").append("<p>,&nbsp;" + $input + " </p>")
            $("#wrong").text("Ah non :'( Meilleur chance la prochaine fois");
            $("#soumettre").prop('disabled', true);
            $("#reset").removeClass("invisible")

        }
    });
    $("#reset").click(function() {
        location.reload(false);
    });
});