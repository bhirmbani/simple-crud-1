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


 $('.ui.form.signup')
  .form({
    fields: {
      firstname: {
        identifier: 'firstname',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your first name'
          }
        ]
      },
      lastname: {
        identifier: 'lastname',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your last name'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your email'
          }
        ]
      },
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a username'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
          },
          {
            type   : 'minLength[6]',
            prompt : 'Your password must be at least {ruleValue} characters'
          }
        ]
      },
      benar: {
        identifier: 'benar',
        rules: [
          {
            type   : 'checked',
            prompt : 'Pastikan dulu datanya'
          }
        ]
      }
    }
  });

  $('.ui.form.login')
  .form({
    fields: {
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a username'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
          },
          {
            type   : 'minLength[6]',
            prompt : 'Your password must be at least {ruleValue} characters'
          }
        ]
      },
    }
  });