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



$(document).ready(function () {
    // console.log("Jquery on ready");

    // $('#my-button').click(function () {
    //
    //     // const margin = $('#my-button').css('margin');
    //     // $('#my-button').css('margin', (margin + 20).toString() +'px');
    //
    // });

    // console.log($('form').serializeArray());

    const data = $('form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    console.log(data);
    // $('.class');

    // $('button')


});



























