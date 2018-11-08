export class Appareil {
    desc: string[];
    isOn: boolean;
    startTime: string;
    endTime: string;

    constructor(public name: string){
        this.isOn = false;
        this.startTime = '';
        this.endTime = '';
    }
}