$(function () {

    $('#submit-form').click(function() {

        const userObject = $('form').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});

        // min length for the pass
        // should include number
        // should include special character***
        // check if pass meets your reqs
        // if not
            // alert("Password doesn't fit reqs");
            // add red border to the password input element
        // if yes
            // print everything to the console, as before
        console.log(userObject['username']);
        console.log(userObject['password']);
        console.log(userObject['email']);

        // localStorage.setItem(userObject['email'], JSON.stringify(userObject))

    });
});


// window.onload = () => {
//
// };
// $(document).ready(() => {
//     const x = $('form').serializeArray();
//     x.forEach((a) => {
//         console.log(a.value);
//     })
// });
// $(() => {
//
// });

// function isFormValid() {
//     const x = $('form').serializeArray();
//
//     const data = $('form').serializeArray().reduce(function(obj, item) {
//         obj[item.name] = item.value;
//         return obj;
//     }, {});
//     console.log(data['password']);
//
//     return true;
// }



// $(document).ready(function () {
//
// });
// $(document).ready(() => {
//
// });
//
// $(function () {
//
// });
//
// $(() => {
//
// });



// $(document).ready(function () {
    // console.log("Jquery on ready");

    // $('#my-button').click(function () {
    //
    //     // const margin = $('#my-button').css('margin');
    //     // $('#my-button').css('margin', (margin + 20).toString() +'px');
    //
    // });

    // console.log($('form').serializeArray());
    // const data = $('form').serializeArray().reduce(function(obj, item) {
    //     obj[item.name] = item.value;
    //     return obj;
    // }, {});
    //
    // console.log(data);
    // $('.class');

    // $('button')


// });



























