function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("ans1").innerHTML="Addition is "+c;
    document.getElementById("head").innerHTML="Addition";
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("ans1").innerHTML="Substraction is "+c;
    document.getElementById("head").innerHTML="Substraction";
}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("ans1").innerHTML="Multiplication is "+c;
    document.getElementById("head").innerHTML="Multiplication";

}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("ans1").innerHTML="Dividion is "+c;
    document.getElementById("head").innerHTML="Division";
}
function mod(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("ans1").innerHTML="Modulus is "+c;
    document.getElementById("head").innerHTML="Modulus";
}
