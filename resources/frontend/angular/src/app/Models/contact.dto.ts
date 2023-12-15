export class ContactDTO {
    name: string;
    email: string;
    mobile_phone: string;
    title: string;
    msg: string;
    check_politiques: boolean;
    isBooking: boolean;
  
    constructor(
      name: string,
      email: string,
      mobile_phone: string,
      title: string,
      msg: string,
      check_politiques: boolean,
      isBooking: boolean,
    ) {
      this.name = name;
      this.email = email;
      this.mobile_phone = mobile_phone;
      this.title = title;
      this.msg = msg;
      this.check_politiques = check_politiques;
      this.isBooking = isBooking;
    }
  }
  