console.clear();
import{createServer} from 'http';

const httpServer = createServer(()=>{
console.log("PETRICION RECIBIDA");

});

httpServer.listen(3000);
