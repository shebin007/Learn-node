setTimeout(() => {
    process.exit();
}, 2000);

process.on('exit', () => {
    console.log('Process will exit now , see you soon');
});

console.log('Hello world');
