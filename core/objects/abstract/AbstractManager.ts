import IDBManager from "../interfaces/IDBManager";

export default abstract class AbstractManager implements IDBManager
{
    abstract DropTableAsync(cTor: Function): Promise<void>;
    abstract CheckColumnTypeAsync(cTor: Function, key: string): Promise<string>;
    abstract ChangeColumnTypeAsync(cTor: Function, key: string): Promise<void>;
    abstract DropColumnAsync(cTor: Function, key: string): Promise<void>;
    abstract CheckConnectionAsync(): Promise<boolean> ;
    abstract CheckDatabaseAsync(dababase: string): Promise<boolean> ;
    abstract CreateDataBaseAsync(dababase: string): Promise<void> ;
    abstract CheckTableAsync(cTor: Function): Promise<boolean> ;
    abstract CreateTableAsync(cTor: Function): Promise<void> ;
    abstract CheckColumnAsync(cTor: Function, key: string): Promise<boolean> ;
    abstract CreateColumnAsync(cTor: Function, key: string): Promise<void> ;
    abstract UpdateDatabaseForEntityAsync(cTor: Function): Promise<void> ;
    abstract ExecuteNonQueryAsync(query: string): Promise<void> ;
    abstract ExecuteAsync(query: string): Promise<any> ;
    abstract BeginTransactionAsync(): Promise<void>;
    abstract CommitAsync(): Promise<void>;
    abstract RollBackAsync(toSavepoint?: string): Promise<void>;
    abstract SavePointAsync(savepoint: string): Promise<void>;
    
}