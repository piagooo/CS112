
function sendMail(){

    event.preventDefault();

    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        user_input : document.getElementById("user_input").value,
        cellphone : document.getElementById("cellphone").value,
    }

    const serviceID = "service_p58rnai"
    const templateID = "template_cb2ns3q"

    emailjs.send(serviceID, templateID ,params)
    
    .then(function(response){
        alert("Successfully submitted form");
        console.log("It works!", response.status, response.text);
        // document.getElementById("contact").reset();
    })

    .then(window.open("login.html"))

}

const public_key = "I04DKm1VfutbJauvd"
