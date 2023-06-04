function convert(){
    var numInput = document.getElementById("input").value
    var intPart = numInput
    var result= ""
    var binList = []

    if(numInput<0){
        intPart= intPart * -1
        result += "-"
    }else if(numInput==0){
        binList = [0]
    }
    
    while(intPart>=1){
        if(intPart%2==0){
            binList.push(0)
        }else{
            binList.push(1)
        }
        intPart=Math.floor(intPart/2)
    }
    for(var x=binList.length-1; x>=0;x--){
        result+=binList[x]
    }

    document.getElementById("result").innerHTML = `The number  ${numInput} in binary is: ${result}`
}