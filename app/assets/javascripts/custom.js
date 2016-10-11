$( document ).ready(function() {
    $(".action").click(function() {
      console.log( 'click!' );
      window.location.href='tasks/'+ $( this ).attr( "name" ) + '/tick';
    });
    $(".done").click(function() {
      console.log( 'done!' );
      window.location.href='/tasks/'+$( this ).attr( "value" ) + '/tick';
    });
});
