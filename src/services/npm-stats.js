//https://github.com/npm/registry/blob/master/docs/download-counts.md

import dayjs from 'dayjs';

const NPM_API_URL = 'https://api.npmjs.org/downloads/range';
const MAX_MONTH_RANGE = 18;

export function prepareBatchCallsRanges(dateFrom, dateTo) {
    const batchArray = [];
    return getBatches(dateFrom, dateTo, batchArray);
}

function getBatches(dateFrom, dateTo, array) {
    const diff = getMonthsDifference(dateFrom, dateTo);
    if(diff < MAX_MONTH_RANGE) {
        array.push( { from: dateFrom, to: dateTo } );
        return array;
    } else {
        const newDateFrom = dayjs(dateFrom).add(MAX_MONTH_RANGE, 'month').toDate();
        const batch = { from: dateFrom, to: newDateFrom };
        array.push(batch);
        return getBatches( newDateFrom, dateTo, array );
    }
}

function getMonthsDifference(dateFrom, dateTo) {
    return Math.abs(dayjs(dateFrom).diff(dateTo, "month"));
}

export async function fetchNPMPackageDownloadCountSince(startDate, packageName) {
    const stats = await getStatistics(formatDate(startDate), formatDate(new Date()), packageName);
    return sumDownloads(stats.downloads);
}

async function getStatistics(from, to, packageName) {
    const response = await fetch(`${NPM_API_URL}/${from}:${to}/${packageName}`)
    return await response.json();
}

function formatDate(date) {
    return date.toISOString().substr(0, 10);
}

function sumDownloads(downloads) {
    return downloads.map(d => d.downloads).reduce((total, current) => {
        return total += current;
    }, 0);
}