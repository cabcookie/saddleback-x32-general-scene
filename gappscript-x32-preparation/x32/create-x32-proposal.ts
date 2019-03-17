import { loadPeoplePositions } from "../import-data/load-people-positions";
import { mapArrayToOneDimArray } from "../mapping/map-arrays";
import { mixerPositionsToTable } from "../mapping/map-objects-to-table";
import { mapPeoplePositions } from "../mapping/map-people-positions";
import { mapPositionsToMixer } from "../mapping/map-positions-to-mixer";
import { flow } from "../utils/fp-library";
import { IMixerChannel } from "../utils/interfaces";

const createX32Proposal = (
    serviceType: number,
    planId: number,
    timeId: number,
    channelsOfTheMixer: any[],
    posSettings: string[][],
    positionsNotForMixer: any[],
    namesForNonPcoPositions: string[][]) => (): IMixerChannel[] => {
        if (!(channelsOfTheMixer && channelsOfTheMixer.length > 0)) {
            throw new Error("channelsOfTheMixer is not defined");
        }
        if (!(positionsNotForMixer && positionsNotForMixer.length > 0)) {
            throw new Error("positionsNotForMixer is not defined");
        }

        const pipe = flow(
            loadPeoplePositions(serviceType, planId, timeId),
            mapPeoplePositions(posSettings, namesForNonPcoPositions, mapArrayToOneDimArray(positionsNotForMixer)),
            mapPositionsToMixer(mapArrayToOneDimArray(channelsOfTheMixer)),
        );

        return pipe();
    };

export { createX32Proposal };
