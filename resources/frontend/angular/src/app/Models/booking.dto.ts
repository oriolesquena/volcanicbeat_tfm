export class BookingDTO {
    name: string;
    email: string;
    mobile_phone: string;
    activity: string;
    num_players: number;
    date: Date;
    msg: string;
    under_sixteen: boolean;
    check_politiques: boolean;
    isBooking: boolean;
  
    constructor(
      name: string,
      email: string,
      mobile_phone: string,
      activity: string,
      num_players: number,
      date: Date,
      msg: string,
      under_sixteen: boolean,
      check_politiques: boolean,
      isBooking: boolean,
    ) {
      this.name = name;
      this.email = email;
      this.mobile_phone = mobile_phone;
      this.activity = activity;
      this.num_players = num_players;
      this.date = date;
      this.msg = msg;
      this.under_sixteen = under_sixteen;
      this.check_politiques = check_politiques;
      this.isBooking = isBooking;
    }
  }
  