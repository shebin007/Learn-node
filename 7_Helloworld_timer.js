// setInterval(() => {
//     console.log('Hello world after every 3 seconds');
// }, 3*1000);

const timeId = setInterval(
    () => console.log('You will never see this one'), 0);

clearTimeout(timeId);