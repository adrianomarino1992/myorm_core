import IDBConnection from "../interfaces/IDBConnection";

export default abstract class AbstractConnection implements IDBConnection
{
    abstract HostName: string;
    abstract Port: number;
    abstract DataBaseName: string;
    abstract UserName: string;
    abstract PassWord: string;
    abstract IsOpen: boolean;
    abstract OpenAsync(): Promise<void> ;
    abstract QueryAsync(query: string): Promise<any>;
    abstract CloseAsync(): void ;
    abstract ExecuteNonQueryAsync(query: string): Promise<void> ;
    abstract ExecuteAsync(query: string): Promise<any> ;
    
}