export class Project {
    idachivements?:number;
    name: string;
    description: string;
    date: number;
    link: string;


    constructor(
        name: string,
        description: string,
        date: number,
        link: string)
    {
        this.name = name;
        this.description = description;
        this.date = date;
        this.link = link;
    }   
}