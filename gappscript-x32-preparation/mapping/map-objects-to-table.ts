import { toString } from "../utils/fp-library";
import { IMixerChannel, IPlan } from "../utils/interfaces";

const plansToTable = (plans: IPlan[]): string[][] => {
    const lines = [["Date / Time", "Plan ID", "Time ID"]];
    plans.forEach((plan) => {
        plan.times.forEach((time) => {
            lines.push([plan.date + " " + time.time, toString(plan.planId), toString(time.id)]);
        });
    });
    return lines;
};

const mixerPositionsToTable = (mixerChannels: IMixerChannel[]): string[][] => {
    const lines = [["Channel", "Channel Name", "In Ear", "Picture", "Position Type", "Person"]];
    mixerChannels.forEach((item) => {
        lines.push([
            toString(item.channelNumber),
            item.channelName,
            (item.inEar === null ? "" : toString(item.inEar)),
            (item.photoThumbnail.length > 5 ? item.photoThumbnail : ""),
            item.positionType,
            item.personName,
        ]);
    });
    return lines.sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10));
};

export { plansToTable, mixerPositionsToTable };
