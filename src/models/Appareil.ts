export class Appareil {
    desc: string[];
    isOn: boolean;

    constructor(public name: string){
        this.isOn = false;
    }
}