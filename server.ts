import * as http from 'http'

export const server = http.createServer((req,res)=> {
    res.end('Hello')
});