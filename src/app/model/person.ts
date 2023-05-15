export class Person {
    id?:number
    firstname: string ;
    lastname: string;
    address: string;
    birthdate: Date;
    nationality: string;
    phone: number;
    email: string;
    ocupation: string;
    about_me: string;
    url_image: string;
    image_background_header: string;

    constructor(
        firstname:string, 
        lastname:string, 
        address:string,
        birthdate:Date,
        nationality:string,
        phone:number,
        email:string,
        ocupation:string,
        about_me:string, 
        url_image:string,
        image_background_header:string) 
    {
            this.firstname = firstname;
            this.lastname = lastname;
            this.address = address;
            this.birthdate = birthdate;
            this.nationality = nationality;
            this.phone = phone;
            this.email = email;
            this.ocupation = ocupation;
            this.about_me = about_me;
            this.url_image = url_image;
            this.image_background_header = image_background_header;
    }   
}