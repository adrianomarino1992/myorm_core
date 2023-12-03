import IDBSet, { IFluentField, IFluentQueryableObject } from "../interfaces/IDBSet";
import IStatement from "../interfaces/IStatement";

export default abstract class AbstractSet<T extends object> implements IDBSet<T> , IFluentQueryableObject<T, AbstractSet<T>>
{
    abstract AddAsync(obj: T): Promise<T> ;
    abstract UpdateAsync(obj: T): Promise<T> ;
    abstract UpdateSelectionAsync(): Promise<void> ;
    abstract Set<K extends keyof T>(key: K, value: T[K]): AbstractSet<T>;
    abstract UpdateObjectAndRelationsAsync(obj: T, relations: (keyof T)[]): Promise<T> ;
    abstract DeleteAsync(obj: T): Promise<T> ;
    abstract DeleteSelectionAsync(): Promise<void> ;
    abstract Where<K extends keyof T>(statement: IStatement<T, K>): AbstractSet<T> ;
    abstract And<K extends keyof T>(statement: IStatement<T, K>): AbstractSet<T> ;
    abstract Or<K extends keyof T>(statement: IStatement<T, K>): AbstractSet<T>;
    abstract OrderBy<K extends keyof T>(key: K): AbstractSet<T> ;
    abstract OrderDescendingBy<K extends keyof T>(key: K): AbstractSet<T>;
    abstract Take(quantity: number): AbstractSet<T> ;
    abstract Offset(offset: number): AbstractSet<T>;
    abstract Join<K extends keyof T>(key: K): AbstractSet<T> ;
    abstract Limit(limit: number): AbstractSet<T> ;
    abstract CountAsync(): Promise<number> ;
    abstract ToListAsync(): Promise<T[]> ;
    abstract FirstOrDefaultAsync(): Promise<T | undefined> ;
    abstract CleanQueryTree(): void ;
    abstract WhereField<K extends keyof T>(field: K): IFluentField<T, K, AbstractSet<T>> ;
    abstract WhereAsString(where: string): AbstractSet<T> ;
    abstract AndField<K extends keyof T>(field: K): IFluentField<T, K, AbstractSet<T>> ;
    abstract OrField<K extends keyof T>(field: K): IFluentField<T, K, AbstractSet<T>>;
    abstract LoadRelationOn<K extends keyof T>(field: K): AbstractSet<T> ;

}
