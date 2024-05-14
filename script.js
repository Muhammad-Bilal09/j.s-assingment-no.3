function clearoutput(){
    document.getElementById("output").innerHTML= " "
}
function    clearinput ()    {
    document.getElementById("input field").innerHTML= " "
    console.log(clearinput)
}
function simplealert(){
    alert("alert function call" )  
}
function printname(){
    let name = document.getElementById("inputfield").value;
    if ( name ==="") {
        alert("please enter your name")
        return;
    }
    document.getElementById("output").innerHTML= name
}
let cities=[  "Faisalabad" ,"Lahore" ,"Islamabad","Karachi","Burewala" ,"Sheikhupura" ,"Kashmir"]
function printallcities(){
    document.getElementById("output").innerHTML= cities

} 
// function printallcities(){
//     document.getElementById("output").innerHTML= ""
//     for( index = 0, index<7,index++){
//         let num=i+1;
//         document.getElementById("output").innerHTML+= "num"+br
//     }
// }
function addcities(){
    let city = document.getElementById("inputfield").value;
    if(!city){
        alert("please enter city")
        return;
    }
    cities.push(city)
    document.getElementById("output").innerHTML =cities 
}
function genratetable(){
    let number = document.getElementById("inputfield").value
if(!number){
    alert("please enter  any number")
    return;
}
let n = document.getElementById("inputfield").value
for (let i=0; i<=10; i++){
   let  num=n*i;
    document.getElementById("output").innerHTML += +')'+ num + "<br>";
}
}