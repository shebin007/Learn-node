let counter = 0;
const timer = setInterval(() => {
    counter++;
    
    if(counter >= 5){
        clearTimeout(timer);
    }
    console.log('Hello world');
}, 500);
