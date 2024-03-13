function login(){
    var name = prompt("Enter your mail-id : ");
    while (!name || !name.trim()) {
        var name = prompt("Please enter a valid email address : ");
    }
    var parts = name.toLowerCase().split("@");
    var localPart = parts[0];
    var domainName = parts[1];
    var re = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
    while (!re.test(name)) {
        var name = prompt("Please enter a valid email address : ");
    }
    let a = false;
    if (re.test(name)){
        pass = true;
    }
    if (pass){
        var password = prompt("Enter your password : ");
        alert("WELCOME!!!!!!!!");
    }
}


$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
}
