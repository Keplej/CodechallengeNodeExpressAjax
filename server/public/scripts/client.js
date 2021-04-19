console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addingJokes);
    gettingJoke();
}

function addingJokes() {
    let funnyJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
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
            gettingJoke();
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
            render();
        })
        .catch(function (error) {
            console.log('Error from the server', error);
            alert('Sorry server is not working at the moment')
        })
        console.log('after making a server request...');
}

//adding in a render

//this is where we are getting a problem with the server.
//jokeArray is not iterable TypeError: jokeArray is not iterable
function render(jokeArray) {
    $('#outputDiv').empty();
    for (let item of jokeArray) {
        $('#outputDiv').append(`
            <div>
                <p>${item.whoseJoke}</p>
                <p>${item.jokeQuestion}</p>
                <p>${item.punchLine}</p>
            </div>
        `)
    }
}

//using this so I don't have to scroll up to look at what I wrote

// let funnyJoke = {
//     whoseJoke: $('whoseJokeIn').val(),
//     jokeQuestion: $('questionIn').val(),
//     punchLine: $('punchlineIn').val()