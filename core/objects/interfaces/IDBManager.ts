


export default interface IDBManager 
{
    CheckConnectionAsync() : Promise<boolean>;

    CheckDatabaseAsync(dababase : string) : Promise<boolean>;
    
    CreateDataBaseAsync(dababase : string) : Promise<void>;

    CheckTableAsync(cTor : Function) : Promise<boolean>;

    CreateTableAsync(cTor : Function) : Promise<void>;

    DropTableAsync(cTor : Function) : Promise<void>;

    CheckColumnAsync(cTor : Function, key : string) : Promise<boolean>;

    CheckColumnTypeAsync(cTor : Function, key : string) : Promise<string>;

    ChangeColumnTypeAsync(cTor : Function, key : string) : Promise<void>;
    
    CreateColumnAsync(cTor : Function, key : string) : Promise<void>;

    DropColumnAsync(cTor : Function, key : string) : Promise<void>;

    UpdateDatabaseForEntityAsync(cTor : Function) : Promise<void>;

    ExecuteNonQueryAsync(query : string) : Promise<void>;   
     
    ExecuteAsync(query : string) : Promise<any>;
    
}