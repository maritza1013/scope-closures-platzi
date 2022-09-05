function fruits(){
    if(true){
        var fruit1 = 'banana'; //function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'apple'; // block scope
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
    
}

fruits();
