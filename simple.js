for(let i = 1; i < 6; i++){
    console.log(i);
}

// recurtion

function consolNumber(i){
    if(i > 5){
        return;
    }
    console.log(i);
    consolNumber(i+1);
}

consolNumber(1);