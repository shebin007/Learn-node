import {createServer} from 'http';
const server = createServer((req,res) => {
	res.end('Hello world 2');
});

server.listen(4242,()=>{
console.log('Server is running');
});
