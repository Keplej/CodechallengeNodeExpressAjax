console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
}

function addingJokes() {
    let funnyJoke = {
        whoseJoke: $('whoseJokeIn').val(),
        jokeQuestion: $('questionIn').val(),
        punchLine: $('punchlineIn').val()
    }
    console.log('testing funnyJoke', funnyJoke);
    
    $.ajax({
        method: 'POST',
        url: '/joke',
        data: funnyJoke
    })
        .then(function (response) {
            console.log('adding joke');
            //we add this part when we start our second ajax
        })
        .catch(function (error) {
            console.log('checking for errors');
            alart('sorry!')
        })
        //emptying after pressing add joke
        $('whoseJokeIn').val('');
        $('questionIn').val('');
        $('punchlineIn').val('');
}

function gettingJoke() {
    $.ajax({
        method: 'GET',
        url: '/joke'
    })
        .then(function (response) {
            console.log('response from the server', response);
            //add this from the render
        })
        .catch(function () {
            
        })
}
