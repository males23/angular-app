//Notre modele de service

/** On va definir des valeurs par 
 * defaut dans notre modele de service */
export class Service {
    id: number | undefined;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: string[];
    created: Date;

    constructor( 
        name: string = 'Entrer un nom...',
        hp: number = 100, 
        cp: number = 10,
        picture: string = 'https://media.giphy.com/media/xxx/giphy.gif',
        types: string[] = ['Normal'],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}


