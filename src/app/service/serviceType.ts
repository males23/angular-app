//fichier comportant 5 services et new fonctionnalites
import { Service } from './service';
  
export const SERVICES: Service[] = [
    {
        id: 1,
        name: "Webapp",
        hp: 2,
        cp: 4,
        picture: "https://media.giphy.com/media/EeZ6mLsRRik8cgnh3D/giphy.gif",
        types: ["Application Web", "Responsive", "Securisée"],
        created: new Date()
    },
    {
        id: 2,
        name: "Website",
        hp: 1,
        cp: 18,
        picture: "https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif",
        types: ["Site Web", "Vitrine", "e-commerce"],
        created: new Date()
    },
    {
        id: 3,
        name: "Webdesign",
        hp: 100,
        cp: 7,
        picture: "https://media.giphy.com/media/povenlBAIz14s/giphy.gif",
        types: ["Cartes Visite", "Invitation", "Menu"],
        created: new Date()
    },
    {
        id: 4,
        name: "Affiches",
        hp: 16,
        cp: 13,
        picture: "https://media.giphy.com/media/NSkhLelh5HmCkukeVe/giphy.gif",
        types: ["Flyers", "Posters", "Faire-part"],
        created: new Date()
    },
    {
        id: 5,
        name: "Logo",
        hp: 1,
        cp: 15,
        picture: "https://media.giphy.com/media/26gsqTc6nx6zX3KkU/giphy.gif",
        types: ["Vectoriel", "Unique", "Diversifié"],
        created: new Date()
    },
    {
         id: 6,
         name: "Vidéos",
         hp: 2,
         cp: 10,
         picture: "https://media.giphy.com/media/3pyq3AhCWxpgslhRzO/giphy.gif",
         types: ["Présentation", "Montage", "Haute-qualité"],
         created: new Date()
}
];
 
