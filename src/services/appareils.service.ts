import { Appareil } from "../models/Appareil";

export class AppareilsService {
    appareilsList: Appareil[] = [
        {
            name: 'Machine à laver',
            desc: [
                'Volume: 6 litres',
                'Temps de lavage: 2 heures',
                'Consommation: 173kwh/an'
            ],
            isOn: true
        },
        {
            name: 'Télévision',
            desc: [
                'Dimensions: 40 pouces',
                'Consommation: 22kwh/an'
            ],
            isOn: true
        },
        {
            name: 'Volet',
            desc: [
                'Marque: DELL',
                'Consommation: 500kwh/an'
            ],
            isOn: false
        }
        
    ];
}