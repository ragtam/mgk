import DateRangeGenerator from './date-range-generator';
import dayjs from 'dayjs';

function getDate(dateString) {
    return dayjs(dateString).toDate();
}

it('should return one batch if date difference is less than 18 months', () => {
    const from = getDate('2020-05-25');
    const to = getDate('2021-05-25');

    const res = new DateRangeGenerator(18).generate(from, to);

    expect(res.length).toEqual(1);
    expect(res[0].from).toEqual(from);
    expect(res[0].to).toEqual(to);
});

it('should return two batches if date difference is 19 months', () => {
    const from = getDate('2019-06-25');
    const to = getDate('2021-01-25');

    const res = new DateRangeGenerator(18).generate(from, to);

    expect(res.length).toEqual(2);
    expect(res[0].from).toEqual(from);
    expect(res[0].to).toEqual(getDate('2020-12-25'));
    expect(res[1].from.toISOString()).toEqual(getDate('2020-12-26').toISOString());
    expect(res[1].to).toEqual(to);
});