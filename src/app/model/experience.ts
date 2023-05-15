export class Experience {
    id?:number;
    company: string;
    position: string;
    description: string;
    job_type: string;
    image: string;
    start: Date;
    end: Date;
  static company: any;


    constructor(
        company: string,
        position: string,
        description: string,
        job_type: string,
        image: string,
        start: Date,
        end: Date) 
    {
        this.company = company;
        this.position = position;
        this.description = description;
        this.job_type = job_type;
        this.image = image;
        this.start = start;
        this.end = end;
    }   
}