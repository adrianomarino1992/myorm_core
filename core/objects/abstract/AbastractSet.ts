import IDBSet, { IFluentField, IFluentQueryableObject, ITypeMapping } from "../interfaces/IDBSet";
import IStatement from "../interfaces/IStatement";

export default abstract class AbstractSet<T extends object> implements IDBSet<T> 
{
    abstract AddAsync(obj: T): Promise<T> ;
    abstract AddObjectAndRelationsAsync(obj: T, relations: (keyof T)[]): Promise<T> ;
    abstract UpdateAsync(obj: T): Promise<T> ;
    abstract UpdateSelectionAsync(): Promise<number> ;
    abstract Set<K extends keyof T>(key: K, value: T[K]): IDBSet<T>;
    abstract UpdateObjectAndRelationsAsync(obj: T, relations: (keyof T)[]): Promise<T> ;
    abstract DeleteAsync(obj: T): Promise<T> ;
    abstract DeleteSelectionAsync(): Promise<number> ;
    abstract Where<K extends keyof T>(statement: IStatement<T, K>): IDBSet<T> ;
    abstract And<K extends keyof T>(statement: IStatement<T, K>): IDBSet<T> ;
    abstract Or<K extends keyof T>(statement: IStatement<T, K>): IDBSet<T>;
    abstract OrderBy<K extends keyof T>(key: K): IDBSet<T> ;
    abstract OrderDescendingBy<K extends keyof T>(key: K): IDBSet<T>;
    abstract Take(quantity: number): IDBSet<T> ;
    abstract AsUntrackeds(): IDBSet<T> ;
    abstract Offset(offset: number): IDBSet<T>;
    abstract Load<K extends keyof T>(key: K): IDBSet<T> ;
    abstract ReloadCachedRealitionsAsync<K extends keyof T>(obj : T[], keys : K[]) : Promise<void>;
    abstract ReloadCachedRealitionsAsync<K extends keyof T>(obj : T, keys : K[]) : Promise<void>;
    abstract Limit(limit: number): IDBSet<T> ;
    abstract CountAsync(): Promise<number> ;
    abstract ExistsAsync() : Promise<boolean>;
    abstract SelectAsync<U extends keyof T>(keys: U[]) : Promise<{[K in U] : T[K]}[]>;
    abstract ToListAsync(): Promise<T[]> ;
    abstract FirstOrDefaultAsync(): Promise<T | undefined> ;
    abstract CleanQueryTree(): void ;
    abstract WhereField<K extends keyof T>(field: K): IFluentField<T, K, IDBSet<T>> ;
    abstract WhereAsString(where: string): IDBSet<T> ;
    abstract AndField<K extends keyof T>(field: K): IFluentField<T, K, IDBSet<T>> ;
    abstract OrField<K extends keyof T>(field: K): IFluentField<T, K, IDBSet<T>>;
    abstract LoadRelationOn<K extends keyof T>(field: K): IDBSet<T> ;   
    abstract GetTypeMapping(): ITypeMapping<T>; 

}
