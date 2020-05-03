function askAge()
{
    var age = prompt("Enter your date of birth year");
    var days=(2020-age)*365;

    var h2 =document.createElement('h2');
    var textAnswer = document.createTextNode("you are "+ days + " days old");
    h2.setAttribute('id','askAge');
    h2.appendChild(textAnswer);
    document.getElementById("result").appendChild(h2);
}

function reset()
{
    document.getElementById("result").remove();
}