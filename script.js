function calculate(){
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var e = weight / (height * height)

    if (height === "" || weight === ""){
        alert("please input your input and height!")
    } else {
        if(e<18.5){
            alert("you are underweight")
        }
        else if(e>18.5&&24.9>e){
            alert("you are normal")
        }
        else if(e>25&&29.9>e){
            alert("you are overweight")
        }
        else if(e>30&&e<34.9){
            alert("you are obses")
        }
        else if(e>35){
            alert("you are extremly obese!!!")
        }
        document.getElementById("weight").value=""
        document.getElementById("height").value=""
    }


}