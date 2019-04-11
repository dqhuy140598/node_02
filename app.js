const http = require('http');
http.createServer((req,res)=>{
    if(req.url !='/hello') return; 
    const method = req.method;
    const text = {
        GET:'',
        POST:' created',
        PUT:' updated',
        DELETE:' deleted'
    };
    const resText = text[method] || '';
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(`world${resText}`);
    res.end();
}).listen(3000,function(){
    console.log('Server is in port 3000');
});