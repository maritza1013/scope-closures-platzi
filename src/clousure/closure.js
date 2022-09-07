function greeting(){
    let userName = 'kevin'

    function displayUserName() {
        return `hello ${userName}`;
    }
    return displayUserName;
}
const g = greeting();
console.log(g); 
console.log(g())
