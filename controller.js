login.addEventListener('click',(e)=>{

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email.length != 0 && password.length != 0){
      if(password.length>=8){
        location.href="/Renault/renault.html"
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña no puede tener menos de 8 caracteres',
        })
      }
    
    }
                 
    else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No estan llenos los campos',
            })
          }  
})