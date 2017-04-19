$('.ui.star.rating')
  .rating({
    maxRating: 5,
    interactive: false
  });

  $('.ui.star.rating.edited-rating')
  .rating({
    maxRating: 5,
    interactive: true,
    fireOnInit: true,
  });

 // $('.ui.star.rating.edited-rating')
 //  .rating('setting', 'onRate', function(value) {
 //      // your amazing code here
 //    console.log(value)
 //  });