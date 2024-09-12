export default interface DBOperationLogHandler
{
    (message : string, type : LogType) : void;
}


export enum LogType 
{
    CHECKCONNECTION = "CHECKCONNECTION",
    CHECKDATABASE = "CHECKDATABASE", 
    CREATEDATABASE = "CREATEDATABASE",
    CHECKTABLE = "CHECKTABLE", 
    CREATETABLE = "CREATETABLE", 
    CHECKCOLUMN = "CHECKCOLUMN", 
    CHECKCOLUMNTYPE = "CHECKCOLUMNTYPE", 
    CREATECOLUMN = "CREATECOLUMN", 
    CHANGECOLUMN = "CHANGECOLUMN", 
    CHECKENTITY = "CHECKENTITY", 
    QUERY = "QUERY"
}