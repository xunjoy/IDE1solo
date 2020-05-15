$(function(){
    $('#feeling').keyup(function(){
        $('#greet').text('I am feeling ' + $('#feeling').val());
    })
})