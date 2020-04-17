import moment from "moment";

export default class DateHelpers {
    static DEFAULT_DATE_FORMAT = 'MMM D, YYYY';

    static getRelativeFormattedDate(date) {
        return moment(date, "YYYYMMDD").fromNow();
    }

    static getFormattedDate(date, format) {
        return moment(date).format(format);
    }
}
