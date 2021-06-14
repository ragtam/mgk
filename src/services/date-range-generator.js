import dayjs from 'dayjs';

export default function DateRangeGenerator(maxMonthRange) {
    let monthRange = maxMonthRange || 0;

    function getBatches(dateFrom, dateTo, array) {
        const diff = getMonthsDifference(dateFrom, dateTo);
        if(diff < monthRange) {
            return [...array, { from: dateFrom, to: dateTo }];
        } else {
            const dateFromWithShift = dayjs(dateFrom).add(monthRange, 'month');
            array.push({ from: dateFrom, to: dateFromWithShift.toDate() });
            return getBatches( dateFromWithShift.add(1, 'day').toDate(), dateTo, array );
        }
    }
    
    function getMonthsDifference(dateFrom, dateTo) {
        return Math.abs(dayjs(dateFrom).diff(dateTo, "month"));
    }

    return {
        generate: (dateFrom, dateTo) => {
            return getBatches(dateFrom, dateTo, []);
        }
    }
}
