import { IHacker } from "./IHacker";

export class Hacker implements IHacker {
constructor(
public ip: string,
public country_name: string,
public region_name: string,
public city: string,
public id?: string) {
// rien à faire de plus ici
}
}