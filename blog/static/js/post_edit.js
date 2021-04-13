$( document ).ready(function() {
    $(".saveAsDraft").on('click', function(){
        const data = $(".post-form").serialize() + "&draft=True";
        $.ajax({
            type: "POST",
            url: "/post/new/",
            data: data,
            cache: false,
            dataType: "JSON"
        }).done(function(data) {
            if (data.redirect) {
                window.location.href = '/drafts/';
            }
        });
    })
});