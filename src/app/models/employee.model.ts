export class Employee{    
    id:number = null;
    name:string = "";
    phone:string = "";
    address:Address = new Address();
}

export class Address{
    city:string = "";
    address_line1:string = "";
    address_line2:string = "";
    postal_code:string = ""
}