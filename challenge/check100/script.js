let getValues = () =>{
    let fi = document.querySelector('#firstNum');
    let se = document.querySelector('#secondNum');

    let first = Number(document.querySelector("#firstNum").value);
    let second = Number(document.getElementById('secondNum').value);
    // console.log(first);
    // console.log(second);
    if(first == 100 || second == 100){
        alert("TRUE");
    }else if(first + second == 100){
        alert("TRUE");
    }else{
        alert("FALSE")
    }
    fi.value = '';
    se.value = '';
}