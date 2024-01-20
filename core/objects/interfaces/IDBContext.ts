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
    From<T extends Object>(arg : {new (...args : any[]) : T}) : IJoiningQuery;   
} 

export interface IJoining
{
    On<T extends Object, U extends Object>(cT : {new (...args : any[]) : T}, cKey : keyof T, uT : {new (...args : any[]) : U}, uKey : keyof U) : IJoiningQuery;
}

export interface IJoiningQuery
{
    InnerJoin(arg : {new (...args : any[]) : Object}) : IJoining; 
    LeftJoin(arg : {new (...args : any[]) : Object}) : IJoining;
    Where<C extends Object, K extends keyof C>(cT : {new (...args : any[]) : C}, statement : IStatement<C, K>) :  IJoiningQuery;
    And<C extends Object, K extends keyof C>(cT : {new (...args : any[]) : C}, statement : IStatement<C, K>) :  IJoiningQuery;
    Or<C extends Object, K extends keyof C>(cT : {new (...args : any[]) : C}, statement : IStatement<C, K>) :  IJoiningQuery;   
    Select<C extends Object>(cT : {new (...args : any[]) : C}) : IJoinSelectable<C>;
}

export interface IJoinSelectable<T>
{
    ToListAsync() : Promise<T[]>;
    FirstOrDefaultAsync() : Promise<T | undefined>;
    Load<K extends keyof T>(key : K) : IJoinSelectable<T>;
    OrderBy<K extends keyof T>(key : K) : IJoinSelectable<T>;    
    OrderDescendingBy<K extends keyof T>(key : K) : IJoinSelectable<T>;
    Take(quantity : number) : IJoinSelectable<T>;
    Offset(offset : number) : IJoinSelectable<T>;    
    Limit(limit : number) : IJoinSelectable<T>;
    CountAsync() : Promise<number>;
    ToListAsync() : Promise<T[]>;
    FirstOrDefaultAsync() : Promise<T | undefined>; 
}


export default interface IDBContext extends IBaseContext, IThreeQueryableObject{}