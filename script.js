var nameIn = document.getElementById("name");
var spanName = document.getElementById("name-span");
nameIn.onblur = function(){
    var reName = /^(?![\s-])[a-zA-Z\S]*$/g;
    
    if(nameIn.value){
        if(reName.test(nameIn.value) === -1){
            spanName.innerText = "Enter valid Username";
            spanName.style.color= "red";
        } else if (nameIn.value === "") {
            spanName.innerText = "Enter Username";
            spanName.style.color = "red"
        } else if (nameIn.value.search(/^\S*$/)){
            spanName.innerText = "Spaces cannot allow";
            spanName.style.color = "red";
        } else if (nameIn.value.search(/[a-zA-Z]/) === -1){
            spanName.innerText = "Enter Valid Name";
            spanName.style.color = "red";
        } else {
            spanName.innerText = "Name Accepted";
            spanName.style.color = "green";
        }
    } else {
        spanName.innerText = "Min 5 characters needed";
        spanName.style.color= "red";
    }
};

var email = document.getElementById("email");
var spanEmail = document.getElementById("email-span");
email.onblur = function (){
    var reEmail = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,20})(.[a-z]{2,8})?$/;
            if (reEmail.test(email.value) === -1){
                spanEmail.innerText = "Enter Valid Email Address";  
                spanEmail.style.color = "red"; 
            } else if (email.value === ""){
                spanEmail.innerText = "Enter Email Address";
                spanEmail.style.color = "red";
            } else if (email.value.search(/@([a-z0-9-]+)/) === -1){
                spanEmail.innerText = "Invalid Domain Name";
                spanEmail.style.color = "red";
            } else if (email.value.search(/@([a-z0-9-]+)\.([a-z]{2,20})/) === -1){
                spanEmail.innerText = "Invalid Email Extension";
                spanEmail.style.color = "red";
            } else {
                spanEmail.innerText = "Email Verified";
                spanEmail.style.color = "green";
            }
}

var message = document.getElementById("message");
var spanMessage = document.getElementById("message-span");
message.onblur = function(){
    if(message.value === "" || message.value == null){
        spanMessage.innerText = "Write your Message in 150 Characters";
        spanMessage.style.color = "red";
    } else if (message.value.length > 150){
        spanMessage.innerText = "Character Limit 150";
        spanMessage.style.color = "red";
    }else{
        spanMessage.innerText = "Message saved";
        spanMessage.style.color = "green";
    }
}

document.getElementById('submit_btn').addEventListener('click', function(){
        if(spanName.innerText === "Name Accepted" && spanEmail.innerText === "Email Verified"){
            alert("Your Message was received successfully.");
        } else if (spanMessage.innerText === "Message Saved"){
            alert("Your Message was received successfully.");
        } else{
            alert("Recheck Inputs");
        }
});
//navbar scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
//scroll Top button
$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $("i").css({
          "opacity":"1", "pointer-events":"auto"
        });
      }else{
        $('i').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('i').click(function(){
      $('html').animate({scrollTop:0}, 500);
    });
  });