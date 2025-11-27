const registerBtn = document.getElementById("registerBtn");

document.getElementById("registerBtn").addEventListener("click", function() {
        Swal.fire({
          title: "Successfully registered!",
          icon: "success",
          draggable: true,
		  iconColor:"#4B0000",     
		  confirmButtonColor:"#c50f18"   
        });
      });
	  
