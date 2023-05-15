export class Skill {
    idskills?:number;
    name: string;
    type: string;
    progress: string;


    constructor(
        name: string,
        type: string,
        progress: string)
    {
        this.name = name;
        this.type = type;
        this.progress = progress;
    }   
}
