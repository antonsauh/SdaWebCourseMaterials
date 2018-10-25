(function($) {
    $.fn.toJSON = function() {
        const $elements = {};
        const $form = $(this);
        $form.find('input').each(function(){
            const name = $(this).attr('name');
            if(name){
                let $value;
                $value = $(this).val();

                $elements[$(this).attr('name')] = $value
            }
        });
        return JSON.stringify( $elements )
    };
    $.fn.fromJSON = function(json_string) {
        const $form = $(this);
        const data = JSON.parse(json_string);
        $.each(data, function(key, value) {
            let $elem = $('[name="'+key+'"]', $form);
            $elem.val(value);
        })
    };
}( jQuery ));

//
// DEMO CODE
//
$(document).ready(function(){
    $("#_save").on('click', function(){
        console.log("Saving form data...");
        const data = $("form#myForm").toJSON();
        console.log(data);
        localStorage['form_data'] = data;

        return false;
    });

    $("#_load").on('click', function(){
        if(localStorage['form_data']){
            console.log("Loading form data...");
            console.log(JSON.parse(localStorage['form_data']));
            $("form#myForm").fromJSON(localStorage['form_data'])
        } else {
            console.log("Error: Save some data first")
        }

        return false;
    })
});
















