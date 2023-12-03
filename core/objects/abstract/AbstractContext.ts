import IDBContext, { IJoiningQuery, IThreeQueryableObject } from "../interfaces/IDBContext";
import AbstractSet from "./AbastractSet";


export default abstract class AbstractContext implements IDBContext , IThreeQueryableObject
{
    abstract Collection<T extends Object>(cTor: new (...args: any[]) => T): AbstractSet<T>;
    abstract UpdateDatabaseAsync(): Promise<void> ;
    abstract ExecuteNonQuery(query: string): Promise<void> ;
    abstract ExecuteQuery(query: string): Promise<any> ;
    abstract Join(...args: (new (...args: any[]) => Object)[]): IJoiningQuery ;
    
}

