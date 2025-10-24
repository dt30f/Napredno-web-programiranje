export interface Machine{
  ji: number, //Jedinstveni indetifikator korisnika
  state: MachineState, //trenutno stanje masine
  napravioJe: number, //referenca na korisnika koji je napravio masinu
  aktivan: boolean, //da li je masina obrisana ili nije (meko brisanje)
}

export enum MachineState {//mozda treba da se promeni na SLOBODNA, ZAUZETA
  AVAILABLE, UNAVAILABLE,
}
export interface User {
  id: number;
  ime: string;
  prezime: string;
  email: string;
  lozinka?: string;
  dozvole: string[]; // ["create_user", "read_machine", ...]
}
