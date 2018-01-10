$(document).ready(function() {
  /* llamo al id del button y lo guardo en una variable */
  var searchBtn = $('#searchBtn');
  /* llamo al id del input y lo guardo en una variable */
  var titleFilm = $('#title');

/* creo el evento de click en el boton */
  searchBtn.click(function searchMovie(){
    /* creo una variable que guardara los datos del input */
    var titleText = titleFilm.val();
    //alert('searchMovie ' + titleText);
    /* creo variable en donde guarda la informacion de la data */
    /* que en este caso seria los titulos de peliculas */
    var url = 'http://www.omdbapi.com/?apikey=3a181f1c&s=' + titleText;
    console.log(url);
    $.ajax({
      type: 'GET',
      url: url,
      success: renderMovies,
      error: renderError
    })
  })
  function renderMovies (response){
    //console.log(response);
    var movies = response.Search;
    var resultsUl = $('#results');
    resultsUl.empty();

    for (var i in movies) {
      var movie = movies[i];
      var title = movie.Title;
      var imdbID = movie.imdbID;
      var poster = movie.Poster;

      console.log([title, imdbID, poster]);

      var liMovie = $('<li class="list-group-item"></li>');
      var posterImg = $('<img src="' + poster + '" width="50px"/>');
      liMovie.append(posterImg);
      liMovie.append(title);
      resultsUl.append(liMovie);
      liMovie.click(function renderDetails(){
        console.log('render');
      });
    }

  }
  function renderError (error){
    console.log(error);
  }




  $('nav').hide();
  $('#section1').hide();
  $('#section2').hide();


/*
* LOG IN
*/
  $('#btn1').click(function(){
    $('#login').hide();
    $('nav').show();
    $('#section1').show();
    $('#section2').show();
  })



})




/*
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?apikey=3a181f1c&s=type",
    dataType: "xml",
    success: function(data) {

        console.log(data);

*/
/*
      $("ul").children().remove();
        $(data).find("MenuCompleto").each( function() {
          var info = '<li>Fecha: ' + $(this).find("FechaString").text() + '</li>';
            $("ul").append(info);
        });
    }
  });
*/


/**
 * Función para Carrusel
 */
 (function(){
   $('#carousel123').carousel({ interval: 2000 });

   $('.carousel-showsixmoveone .item').each(function(){
     var itemToClone = $(this);

     for (var i=1;i<6;i++) {
       itemToClone = itemToClone.next();

       // wrap around if at end of item collection
       if (!itemToClone.length) {
         itemToClone = $(this).siblings(':first');
       }

       // grab item, clone, add marker class, add to collection
       itemToClone.children(':first-child').clone()
         .addClass("cloneditem-"+(i))
         .appendTo($(this));
     }
   });
 }());
 /**
  * Fin de Función para Carrusel
  */


