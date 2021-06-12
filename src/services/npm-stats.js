//https://github.com/npm/registry/blob/master/docs/download-counts.md

const NPM_API_URL = 'https://api.npmjs.org/downloads/range';

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