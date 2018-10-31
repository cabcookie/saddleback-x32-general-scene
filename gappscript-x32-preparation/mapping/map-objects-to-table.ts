import { toString } from "../utils/fp-library";
import { IPlan } from "../utils/interfaces";

const plansToTable = (plans: IPlan[]): string[][] => {
    const lines = [["Date / Time", "Plan ID", "Time ID"]];
    plans.forEach((plan) => {
        plan.times.forEach((time) => {
            lines.push([plan.date + " " + time.time, toString(plan.planId), toString(time.id)]);
        });
    });
    return lines;
};

export { plansToTable };
