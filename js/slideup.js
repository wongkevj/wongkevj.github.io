function checkInput() {
    var password = document.getElementById('pass_text').value;
    if(password === "burningsoundfiles") {
	    $('#test').slideUp();
	    document.getElementById('header-div').className += " wrapper";
    }
}
