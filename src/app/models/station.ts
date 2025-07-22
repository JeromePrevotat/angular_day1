import { StationState } from "./station-state";

export interface Station {
    readonly id: number;
    stationName: string;
    latitude: number;
    longitude: number;
    priceRate: number;
    powerOutput: number;
    manual: string;
    state: StationState;
    grounded: boolean;
    busy: boolean;
    wired: boolean;
    spot_id: number;
    reservationList: number[];
    mediaList: number[];
    plugTypeList: number[];
}
