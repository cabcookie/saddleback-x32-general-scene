import { loadPcoPlanTimes } from "../import-data/load-pco-plans";
import { filterById, formatTime, toString } from "../utils/fp-library";
import { IPcoPeoples, IPcoPlans, IPcoTimes, IPeoplePosition, IPlan, ITime } from "../utils/interfaces";

const mapPlanTimes: (times: IPcoTimes) => ITime[] = (times) => times.data.map((item) => {
    return {
        id: item.id,
        time: formatTime(item.attributes.starts_at),
    };
});

const mapPlans: (serviceType: number) => (plans: IPcoPlans) => IPlan[] =
    (serviceType) => (plans) => plans.data.map((item) => {
        return {
            date: item.attributes.short_dates,
            planId: item.id,
            times: loadPcoPlanTimes(serviceType, item.id),
        };
    });

const mapPeople = (timeId: number) => (pcoPeople: IPcoPeoples): IPeoplePosition[] =>
    pcoPeople.data
        .filter((person) =>
            filterById(timeId, person.relationships.times.data).length > 0
            && person.attributes.status !== "D")
        .map((person) => {
            const attr = person.attributes;
            const data = person.relationships.person.data;
            return {
                declineReason: attr.decline_reason,
                name: attr.name,
                personId: toString(data.id),
                photoThumbnail: attr.photo_thumbnail,
                status: attr.status,
                teamPositionName: attr.team_position_name,
            };
        });

export { mapPlanTimes, mapPlans, mapPeople };
