(function($) {
    $.fn.toJSON = function() {
        const $elements = {};
        const $form = $(this);
        $form.find('input, select, textarea').each(function(){
            const name = $(this).attr('name');
            const type = $(this).attr('type');
            if(name){
                let $value;
                if(type === 'radio'){
                    $value = $('input[name='+name+']:checked', $form).val()
                } else if(type === 'checkbox'){
                    $value = $(this).is(':checked')
                } else {
                    $value = $(this).val()
                }
                $elements[$(this).attr('name')] = $value
            }
        });
        return JSON.stringify( $elements )
    };
    $.fn.fromJSON = function(json_string) {
        const $form = $(this);
        const data = JSON.parse(json_string);
        $.each(data, function(key, value) {
            const $elem = $('[name="'+key+'"]', $form);
            const type = $elem.first().attr('type');
            if(type === 'radio'){
                $('[name="'+key+'"][value="'+value+'"]').prop('checked', true)
            } else if(type === 'checkbox' && (value === true || value === 'true')){
                $('[name="'+key+'"]').prop('checked', true)
            } else {
                $elem.val(value)
            }
        })
    };
}( jQuery ));