function addingEventListener() {
    function addEventListener(eventName,callback){
    }
    const input = document.getElementById('button');

    function clickAlert() {
        alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
    
}

addingEventListener()
