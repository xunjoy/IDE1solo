$(function(){
    $('#feeling').keyup(function(){
        $('#greet').text('I am feeling ' + $('#feeling').val() +  ' out of 10');
    });

    $('#new-feeling').click(function(){
        $('#greet').text('Feeling submitted');

        $('#greet2').text('Last time  you  were feeling ' + $('#feeling').val() + ' out of 10');

        chrome.storage.sync.get('mood', function(avgMood){
            
            var newMood = 0;

            if (avgMood.mood){
                newMood += parseInt(avgMood.mood);
            }

            var feelingNum = $('#feeling').val();

            if ('#new-feeling'){
                //newMood += parseInt(feelingNum);
                newMood = parseInt(feelingNum);
            }

            chrome.storage.sync.set({'mood' : newMood});

            

            $('#feeling').val('');
        })

    })
});