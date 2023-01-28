function myFunction()
{
    var x = document.getElementById("myUser").value;
    var y = document.getElementById("myUSN").value;
    var z = document.getElementById("myNum").value;
    
    if (y != "" && x != "" && z != "")
    {
        alert("Your Request has been successfully sent");
        window.open("submit.html");
    }
    else
    {
        alert("Do Not Leave Fields Empty!");
    }

			
}