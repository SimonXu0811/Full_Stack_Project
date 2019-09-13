
export class Patient {
    name: string;
    date: Date;
    time: Date;
    location: string;
    lastupdatetime: Date;
    constructor(name, date, time, location, lastupdatetime) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.lastupdatetime = lastupdatetime;
    }
}
