

export default interface IDBConnection
{
    HostName : string;
    Port : number;
    DataBaseName : string;
    UserName : string;
    PassWord : string;    
    IsOpen : boolean;
    OpenAsync() : Promise<void>;
    QueryAsync(query : string) : Promise<any>;
    CloseAsync() : void;
    ExecuteNonQueryAsync(query : string) : Promise<void>;    
    ExecuteAsync(query : string) : Promise<any>;
     
}