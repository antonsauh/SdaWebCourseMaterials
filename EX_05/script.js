$(document).ready(function () {
    // $.get('https://damp-island-30027.herokuapp.com/users', function(data, status) {
    //     console.log(data);
    //     console.log(status);
    // });
    // $.ajax({
    //
    // // })
    // let users;
    //
    // function someFunction(data, callback) {
    //     //some logic with the data
    //     callback();
    // }


    $.get('https://damp-island-30027.herokuapp.com/users', function (data, status) {
        console.log(status);
        console.log(data);
        data.forEach((user) => {
            console.log("Username: " + user.name);
            console.log("Password: " + user.password);
            console.log("Email: " + user.email);
            console.log("---------------------------");
            const $container = $('#container');
            $container.append('<p>' + user.name +'</p>');
            $container.append('<p>' + user.password +'</p>');
            $container.append('<p>' + user.email +'</p>');
            $container.append('<p>----------------------------------</p>');
        });
        // data.forEach(function(record){
        //
        // });
        $('h1').html(status.toString());
    });
    // console.log("Page has opened");

    // $.ajax(
    //     {
    //         url: 'https://damp-island-30027.herokuapp.com/users',
    //         type: "POST",
    //         beforeSend: function (request) {
    //             request.setRequestHeader('key', '1996');
    //         },
    //         success: function(data, textStatus, xhr) {
    //
    //             console.log("AJAX SUCCESS");
    //             console.log(xhr);
    //             console.log(textStatus);
    //             console.log(data);
    //         },
    //
    //         error: function (xhr, ajaxOptions, thrownError) {
    //             console.log("AJAX ERROR");
    //             console.log(xhr);
    //             console.log(ajaxOptions);
    //             console.log(thrownError);
    //         },
    //         data: JSON.stringify({
    //             name: "jsdg;ajdsg",
    //             email: "tonasdgasdgasdy@email.com",
    //             password: "123adsgasdgads?pass"
    //         }),
    //         contentType: "application/json"
    //
    //     }
    // );

    $.ajax({
        url: 'https://damp-island-30027.herokuapp.com/login',
        type: "POST",
        beforeSend: function (request) {
            request.setRequestHeader('key', '1996');
        },
        success: function(data, textStatus, xhr) {

            console.log("AJAX SUCCESS");
            console.log(xhr);
            console.log(textStatus);
            console.log(data);
        },

        error: function (xhr, ajaxOptions, thrownError) {
            console.log("AJAX ERROR");
            console.log(xhr);
            console.log(ajaxOptions);
            console.log(thrownError);
        },
        data: JSON.stringify({
            email: "tony@email.com",
            password: "123?pass"
        }),
        contentType: "application/json"

    })
    function callback() {
            console.log('success');
        }
});