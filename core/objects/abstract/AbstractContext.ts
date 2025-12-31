import DBOperationLogHandler from "../handlers/DBOperationLogHandler";
import IDBContext, { IJoiningQuery, IThreeQueryableObject } from "../interfaces/IDBContext";
import AbstractSet from "./AbastractSet";


export default abstract class AbstractContext implements IDBContext 
{
    abstract Collection<T extends Object>(cTor: new (...args: any[]) => T): AbstractSet<T>;
    abstract UpdateDatabaseAsync(): Promise<void> ;
    abstract ExecuteNonQuery(query: string): Promise<void> ;
    abstract ExecuteQuery(query: string): Promise<any> ;
    abstract From<T extends Object>(arg: (new (...args: any[]) => T)): IJoiningQuery;
    abstract SetLogger(logger: DBOperationLogHandler): void;  
    abstract BeginTransactionAsync(): Promise<void>;
    abstract CommitAsync(): Promise<void>;
    abstract RollBackAsync(toSavepoint?: string): Promise<void>;
    abstract SavePointAsync(savepoint: string): Promise<void>;    

    
}

