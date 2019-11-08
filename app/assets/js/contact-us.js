$("#contactUs").click(function (event) {
    event.preventDefault();
    var contactObj = {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        message: $('#message').val(),  
    }
    var request = $.ajax({
        url: 'http://localhost:8000/contact-us',
        type: "POST",
        data: JSON.stringify(contactObj),
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            alert("Sucessfully send")
        }
    });   
});
