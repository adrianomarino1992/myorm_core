import IStatement from "./IStatement";


export interface IBaseSet<T extends Object, R extends IBaseSet<T, R>>
{
    AddAsync(obj : T) : Promise<T>;
    AddObjectAndRelationsAsync(obj : T, relations : (keyof T)[]) : Promise<T>;
    UpdateAsync(obj : T) : Promise<T>;
    UpdateSelectionAsync() : Promise<void>;
    Set<K extends keyof T>(key: K, value : T[K]) : R;
    UpdateObjectAndRelationsAsync(obj : T, relations : (keyof T)[]) : Promise<T>;
    DeleteAsync(obj : T) : Promise<T>;
    DeleteSelectionAsync() : Promise<void>;
    Where<K extends keyof T>(statement : IStatement<T, K>) : R;
    And<K extends keyof T>(statement : IStatement<T, K>) : R;
    Or<K extends keyof T>(statement : IStatement<T, K>) : R;
    OrderBy<K extends keyof T>(key : K) : R;    
    OrderDescendingBy<K extends keyof T>(key : K) : R;
    Take(quantity : number) : R;
    Offset(offset : number) : R;
    Load<K extends keyof T>(key : K) : R;
    ReloadCachedRealitionsAsync<K extends keyof T>(obj : T[], keys : K[]) : Promise<void>;
    ReloadCachedRealitionsAsync<K extends keyof T>(obj : T, keys : K[]) : Promise<void>;
    Limit(limit : number) : R;
    CountAsync() : Promise<number>;
    ExistsAsync() : Promise<boolean>;
    SelectAsync<U extends keyof T>(keys: U[]) : Promise<{[K in U] : T[K]}[]>;
    AsUntrackeds() : R;
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

export default interface IDBSet<T extends object> extends IBaseSet<T, IDBSet<T>>, IFluentQueryableObject<T, IDBSet<T>>{}