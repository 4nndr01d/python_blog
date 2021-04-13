$( document ).ready(function() {
    const url = window.location.href;
    const id = url.split('/')[4];
    $(".addComment").on('submit', function(){
        const data = $(".post-form").serialize();
        const $form = $(this);
        $.ajax({
            type: "POST",
            url: `/post/${id}/comment/`,
            data: data,
            cache: false,
            dataType: "JSON"
        }).done(function(data) {
            $form.find("textarea[name='text']").val("")
        });
    })
});