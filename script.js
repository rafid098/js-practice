let names = ["Rafid", "Nahid", "Kamrul", "Hasibul", "Mahafuj", "Humayon"]

function welcome(ourfriends){
    let utterance = new SpeechSynthesisUtterance(`wellcome ${ourfriends}`);
speechSynthesis.speak(utterance);
}
for(let i = 0; i<names.length; i++){
    welcome(names[i]);
}