
let accordians = document.querySelectorAll(".accordian-cantiner .accordian");
accordians.forEach(ans => {
	ans.onclick= () =>{
		accordians.forEach(subAcco => { subAcco.classList.remove("active") });
		ans.classList.add("active");
}

})


// email-----
const from = document.querySelector("from");
const fullNanme = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone")
// const subject = document.getElementById("subject");
const massage = document.getElementById("massage");

function sendEmail() {
	const bodymessage = `full Name:${fullNanme.value}<br> Email:${email.value}<br> phonenumber:${phone.value}<br>
massage:${massage.value}`;

	 Email.send({
    Host : "smtp.elasticemail.com",
    Username : "roopakumari2134@gmail.com",
    Password : "C09BC6DF39A73659D0229EEF16DE4B3D52C4",
    To : 'roopakumari2134@gmail.com',
    From : "",
   //  Subject : subject.value,
    Body : "bodymessage"
	 }).then(function (massage) {

		 Swal.fire({
  title: "thankyou!",
  text: "your massage send success full!",
  icon: "success"
});
	 });
}



