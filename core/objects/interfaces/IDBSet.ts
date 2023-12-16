import IStatement from "./IStatement";


export interface IBaseSet<T extends Object>
{
    AddAsync(obj : T) : Promise<T>;
    AddObjectAndRelationsAsync(obj : T, relations : (keyof T)[]) : Promise<T>;
    UpdateAsync(obj : T) : Promise<T>;
    UpdateSelectionAsync() : Promise<void>;
    Set<K extends keyof T>(key: K, value : T[K]) : IBaseSet<T>;
    UpdateObjectAndRelationsAsync(obj : T, relations : (keyof T)[]) : Promise<T>;
    DeleteAsync(obj : T) : Promise<T>;
    DeleteSelectionAsync() : Promise<void>;
    Where<K extends keyof T>(statement : IStatement<T, K>) : IBaseSet<T>;
    And<K extends keyof T>(statement : IStatement<T, K>) : IBaseSet<T>;
    Or<K extends keyof T>(statement : IStatement<T, K>) : IBaseSet<T>;
    OrderBy<K extends keyof T>(key : K) : IBaseSet<T>;    
    OrderDescendingBy<K extends keyof T>(key : K) : IBaseSet<T>;
    Take(quantity : number) : IBaseSet<T>;
    Offset(offset : number) : IBaseSet<T>;
    Join<K extends keyof T>(key : K) : IBaseSet<T>;
    Limit(limit : number) : IBaseSet<T>;
    CountAsync() : Promise<number>;
    ToListAsync() : Promise<T[]>;
    FirstOrDefaultAsync() : Promise<T | undefined>;
    CleanQueryTree() : void;
}


export interface IFluentQueryableObject<T extends Object, R extends IDBSet<T>>
{
    WhereField<K extends keyof T>(field : K) : IFluentField<T, K, R>
    WhereAsString(where : string) : R;
    AndField<K extends keyof T>(field : K) : IFluentField<T, K, R>
    OrField<K extends keyof T>(field : K) : IFluentField<T, K, R>
    LoadRelationOn<K extends keyof T>(field : K) : R;    
}


export interface IFluentField<T extends Object, K extends keyof T, R extends IDBSet<T>>
{
    IsGreaterThan(value : T[K]) : R;
    IsEqualTo(value : T[K]) : R;
    IsNotEqualTo(value : T[K]) : R;
    IsSmallerThan(value : T[K]) : R;
    IsInsideIn(value : T[K][]) : R;
    Constains(value : T[K]) : R;
    StartsWith(value : T[K]) : R;
    EndsWith(value : T[K]) : R;
    IsNull() : R;    
}

export default interface IDBSet<T extends object> extends IBaseSet<T>, IFluentQueryableObject<T, IDBSet<T>>{}