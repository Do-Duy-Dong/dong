module.exports.generateRandomString=(length)=>{
    const character="ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxy0123456789"
    let result="";
    for (let i=0;i<length;i++){
        result+=character.charAt(Math.floor(Math.random()*character.length));
    }
    return result;
}
