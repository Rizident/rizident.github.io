


function Register()
{
    let done = document.getElementById("done").value
    let pass = document.getElementById("pass").value;
    let passVer = document.getElementById("passVer").value 
   // let passTxt = document.getElementById("passTxt").value
    //let nameInp = document.getElementById("nameInp").value
    let user = document.getElementById("user").value

    if(pass === "")
    {
        Swal.fire({
            
            icon: 'error',
            title: 'Oops...',
            text: 'You did not fill out all fields!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    if(done === "")
    {
        Swal.fire({
            
            icon: 'error',
            title: 'Oops...',
            text: 'You did not fill out your phone number, username or  email',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    if(user === "")
    {
        Swal.fire({
            
            icon: 'error',
            title: 'Oops...',
            text: 'You did not fill out all fields!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    
    else
    {
        if(pass == passVer)
        {
            {

             


         // alert(document.getElementById("done").innerHTML = "The user has successfully registered !");
           
        }
        if(pass == passVer)
       {
        window.location.href = "http://127.0.0.1:5501/index.html"; 
       }
       
        }
        


        
        else
        {
            Swal.fire({
            
                icon: 'error',
                title: 'Oops...',
                text: 'You have different passwords',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    }
}



//if(done ==  "")