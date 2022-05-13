export class Airline {
    AirlineName?:string;
    ContactNumber?:string;
    ContactAddress?:string;
    Status?:boolean;
    Createdat?:Date;
}

export class Flight{
    AirlineId?:string;
    FromDate?:Date;
    ToDate?:Date;
    FromLocation?:string;
    ToLocation?:string;
    Food?:boolean;
    NoOfBUSeats?:number;
    NoOfNONBUSeats?:number;
    Remarks?:string;
    NoOfRows?:number;
    Price?:string;
    Sheduled?:string;
    Status?:boolean;
    Createdat?:Date;
}
export class PNR{
    UserId?:string;
  }
  export class PNRSearch{
    PNR?:string;
  }

  export class Persons{
    Name?:string;
    Age?:string;
    Gender?:string;
    Food?:string;
  }

  export class Booking{
    FlightId?:string;
    From?:string;
    To?:string;
    JourneyDate?:Date;
    UserId?:number;
    Createateat?:Date;
    Name?:string;
    Age?:string;
    Gender?:string;
    Food?:string;
  }
  export class Discount{
    DName?:string;
    DPrice?:string;
  }
  
