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
});
















