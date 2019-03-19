//he comentat totes les parts de jquery que no formen part de coneixemen JSON

function buscar(){

    // per a mostrar el contingut, amagat per defecte
    document.getElementById('content').style = '';

    // cada cop que s'inicii la funcio, es reseteja el contingut
    $('#content').empty();
    $('#content').html('<div id="informacio"><br><div id="title"></div><br><div id="jquerytext"></div><br></div>')

    //la variable agafa el valor del element amb id "input"
    var userinput = $('#input').val();
   
    $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=60c3c3f96bc2734921a137c98412f20f&query="+userinput+ "&callback=?",function(apiimg) {
 
    // he introduit el inputuser a la busqueda de la api de imatges i no al de peliculles perque va molt millor,
    // per aixo despres amb el nom exacte el busco en la api de films

        $('#content').prepend('<img id="img" src=\"http://image.tmdb.org/t/p/w500/'+apiimg.results[0].poster_path+'\" class=\"img-responsive\">');
                
        $.getJSON("https://www.omdbapi.com/?t="+apiimg.results[0].title+"&apikey=70b60e71",function(apifilms) {

            //elmateix que ((( getelementbyid("id").append = contingut  )))
            $('#jquerytext').append("<b>Títol: </b>"+apifilms["Title"]+"<br>");      
            $('#jquerytext').append("<b>Any: </b>"+apifilms["Year"]+"<br>");
            $('#jquerytext').append("<b>Rated: </b>"+apifilms["Rated"]+"<br>");
            $('#jquerytext').append("<b>Duració: </b>"+apifilms["Runtime"]+"<br>");
            $('#jquerytext').append("<b>Gènere: </b>"+apifilms["Genre"]+"<br>");
            $('#jquerytext').append("<b>Director: </b>"+apifilms["Director"]+"<br>");
            $('#jquerytext').append("<b>Productora: </b>"+apifilms["Production"]+"<br>");
            $('#jquerytext').append("<b>País: </b>"+apifilms["Country"]+"<br>");
            $('#jquerytext').append("<b>Actors:</b><br>"+apifilms["Actors"]+"<br>");
            $('#jquerytext').append("<b>Sinopsi:</b><br>"+apifilms["Plot"]+"<br>");    

        });   
    
    });

}

// amb jquery els eventos son molt mes senzills
//picar boto 
$('#button').click(buscar);

// per a quan hi hagi focus en el input i es piqui la tecla Enter, es cridi la funcio
$(document).keyup(function(event) {
    if ( $("#input").is(":focus") && event.key=="Enter") {
        buscar();
    }
});



