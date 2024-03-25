/**
* Représente la structure de données d'un Hacker

* L'id sera autogénéré par l'application (null si nouveau)
*/
export interface IHacker {
    ip: string,
    country_name: string,
    region_name: string,
    city: string,
    id?: string
    }