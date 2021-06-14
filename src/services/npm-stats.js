import DateRangeGenerator from './date-range-generator';

//https://github.com/npm/registry/blob/master/docs/download-counts.md
const NPM_MAX_MONTH_RANGE = 18;
const NPM_API_URL = 'https://api.npmjs.org/downloads/range';

export async function fetchNPMPackageDownloadCountSince(startDate, packageName) {
    const batches = new DateRangeGenerator(NPM_MAX_MONTH_RANGE).generate(startDate, new Date());
    const statsInBatches = await getStatistics(batches, packageName);
    return sumStatiscitsFromBatches(statsInBatches);
}

async function getStatistics(batches, packageName) {
    return await Promise.all(batches.map( ({ from, to }) => {
        return new Promise(async resolve => {
            const res = await fetch(makeUrl(from, to, packageName)).then();
            resolve(res.json());
        });
    } ));
}

function makeUrl(from, to, packageName) {
    return `${NPM_API_URL}/${formatDate(from)}:${formatDate(to)}/${packageName}`
}

function formatDate(date) {
    return date.toISOString().substr(0, 10);
}

function sumStatiscitsFromBatches(statsInBatches) {
    return statsInBatches.reduce( (total, batch) => {
        return total += sumDownloads(batch.downloads);
    }, 0 );
}

function sumDownloads(downloads) {
    return downloads.map(d => d.downloads).reduce((total, current) => {
        return total += current;
    }, 0);
}