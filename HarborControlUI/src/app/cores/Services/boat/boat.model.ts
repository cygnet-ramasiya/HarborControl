import { BoatTypes, BoatStatus } from '../../../models/enums';

export class Boat {
    boatId: number;
    boatType: BoatTypes;
    boatSpeed: number;
    duration: number;
    boatStatus: BoatStatus;
    warning: string;
}