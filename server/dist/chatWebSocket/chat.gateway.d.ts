import { Server } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    findAll(data: any): any;
    identity(data: number): Promise<number>;
}
