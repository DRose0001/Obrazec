const loginBtn = document.getElementById("loginBtn");

document.getElementById("loginBtn").addEventListener("click", function() {
        Swal.fire({
          title: "Successfully logined!",
          icon: "success",
          draggable: true,
		  iconColor:"#4B0000",     
		  confirmButtonColor:"#c50f18"   
        });
      });
	  
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function(e) {
    e.preventDefault(); // prepreči preusmeritev

    Swal.fire({
        title: "Successfully registered!",
        icon: "success",
        draggable: true,
        iconColor:"#4B0000",
        confirmButtonColor:"#c50f18"
    }).then(() => {
        window.location.href = "Netflix2.html"; // zdaj preusmeri
    });
});
