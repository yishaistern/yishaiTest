export enum Gender {
    male = 'male',
    female = 'female'
}
export interface UserItem {
    name: string;
    gender: Gender;
    meteData: any;
    age: number;
    id: number;
}
