import { StationState } from "./station-state";

export interface Station {
    readonly id: number | null;
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
    spot_id: number | null;
    reservationList: number[] | null;
    mediaList: number[] | null;
    plugTypeList: number[] | null;
}
