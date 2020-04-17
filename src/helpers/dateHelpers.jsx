import moment from "moment";

export default class DateHelpers {
    static getRelativeFormattedDate(date) {
        return moment(date, "YYYYMMDD").fromNow();
    }
}
