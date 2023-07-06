export declare class MessagesRepository {
    findOne(id: string): Promise<any>;
    findALl(): Promise<any>;
    create(content: string): Promise<void>;
}
