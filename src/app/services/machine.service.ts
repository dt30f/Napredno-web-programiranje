import {Injectable} from '@angular/core';
import {Machine, MachineState} from "../model";

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private machines: Machine[] = [
    { ji: 1, state: MachineState.AVAILABLE, napravioJe: 1, aktivan: true },
    { ji: 2, state: MachineState.UNAVAILABLE, napravioJe: 2, aktivan: true },
    { ji: 3, state: MachineState.UNAVAILABLE, napravioJe: 2, aktivan: false }
  ];

  getAll(): Machine[] {
    return this.machines;
  }

  create(machine: Machine): void {
    this.machines.push(machine);
  }
}
