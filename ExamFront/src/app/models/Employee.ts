export interface Employee{
    id?: number;
    name: string;
    last_name: string;
    birthday: number|string;
    group_id?:number;
    isSelected?:boolean;
}