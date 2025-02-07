var dict =[]


function fun(){
    for (i in dict.length()){
        if (dict[i] == document.getElementById("password").value){ //use for each --> pg 544 in textbook
            window.open("secret.html");
            alert("Successful Login")
        }
        else{
            alert("Invalid login")
        }
    };
} 


function Register(){
    dict.push({
        key: document.getElementByID("username").value,
        value: document.getElementById("password").value
});
   
}





