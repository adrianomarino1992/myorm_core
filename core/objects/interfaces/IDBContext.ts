import IBaseSet from './IDBSet';
import IStatement from './IStatement';
export interface IBaseContext
{
    Collection<T extends Object>(cTor : {new (...args : any[]) : T}) : IBaseSet<T> | undefined;
    UpdateDatabaseAsync() : Promise<void>;
    ExecuteNonQuery(query : string) : Promise<void>;
    ExecuteQuery(query : string) : Promise<any>;        
}

export interface IThreeQueryableObject
{   
    Join(...args : {new (...args : any[]) : Object}[]) : IJoiningQuery;   
} 

export interface IJoiningQuery
{
    On<C extends Object, U extends Object>(cT : {new (...args : any[]) : C}, cKey : keyof C, uT : {new (...args : any[]) : U}, uKey : keyof U) : IJoiningQuery;
    Where<C extends Object, K extends keyof C>(cT : {new (...args : any[]) : C}, statement : IStatement<C, K>) :  IJoiningQuery;
    And<C extends Object, K extends keyof C>(cT : {new (...args : any[]) : C}, statement : IStatement<C, K>) :  IJoiningQuery;
    Or<C extends Object, K extends keyof C>(cT : {new (...args : any[]) : C}, statement : IStatement<C, K>) :  IJoiningQuery;   
    Select<C extends Object>(cT : {new (...args : any[]) : C}) : IJoinSelectable<C>;
}

export interface IJoinSelectable<T>
{
    ToListAsync() : Promise<T[]>;
    FirstOrDefaultAsync() : Promise<T | undefined>;
    Join<K extends keyof T>(key : K) : IJoinSelectable<T>;
    OrderBy<K extends keyof T>(key : K) : IJoinSelectable<T>;    
    OrderDescendingBy<K extends keyof T>(key : K) : IJoinSelectable<T>;    
}


export default interface IDBContext extends IBaseContext, IThreeQueryableObject{}