export class Education {
    ideducation?:number;
    school: string;
    title: string;
    img: string;
    career: string;
    score: string;
    start: number;
    end: number;


    constructor(
        school: string,
        title: string,
        img: string,
        career: string,
        score: string,
        start: number,
        end: number) 
    {
        this.school = school;
        this.title = title;
        this.img = img;
        this.career = career;
        this.score = score;
        this.start = start;
        this.end = end;
    }   
}