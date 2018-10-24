$('#submit-form').click(function () {

    const userObject = $('form').serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    if (userObject['password'].length < 8){
        alert("your message");
    }else if (!(/\d/.test(userObject['password']))) {
        alert("password must min 8 characters")

        //min length for th epass
        //should include number
        //should include special character
        //check if pass meets you reqs
        //ifnot
        //add red border background to the passwrod input element
        //if yest print everything to the console, as before
        // alert("Password dosen't fit requirments")
        // console.log(userObject['username']);
        // console.log(userObject['password']);
        // console.log(userObject['email'])
    }else if (!hasLowerCase(userObject['password'])
        && !hasUpperCase(userObject['password'])) {
        alert("password must contain both upper and lower");
    }

    function hasLowerCase(str) {
        return (/[a-z]/.test(str));
    }

    function hasUpperCase(str) {
        return (/[A-Z]/.test(str));
    }

});
