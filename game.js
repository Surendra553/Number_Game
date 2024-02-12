function submit(){
    let user_input = document.getElementById("user_input");
    user_input = user_input.value
    let random_list = generateRandomList();
    if(checkNum(user_input,random_list)){
        document.getElementById("result").innerText="Congrats, You win...."
    }
    else{
        document.getElementById("result").innerText="Sorry, You lost...."
    }
    
    document.getElementById("generatedList").innerText = random_list;
    
}

function generateRandomList(){
    let random_list = []
    for(let i=0; i<20; i++){
        num = Math.round(Math.random()*100)
        random_list.push(num)
    }
    return random_list;
}

function checkNum(user_input,random_list){
    for(let i=0; i<20; i++){
        if(random_list[i] == user_input){
            return true
        }
    }
    return false
}
