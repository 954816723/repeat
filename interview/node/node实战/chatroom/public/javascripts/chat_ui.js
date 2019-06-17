function divEscapedContentElement(message){
    let div = document.createElement('div');
    div.innerText = message;
    return div;
}
function divSystemContentElement(message){
    let div = document.createElement('div');
    div.innerHTML = message;
    return div;
}