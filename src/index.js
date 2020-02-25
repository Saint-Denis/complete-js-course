const delayPromise = (seconds) => {
    seconds = 1000;

    return new Promise(resolve => {
        setTimeout(function () {
            resolve();
        }, seconds);
    })
}

const loadAndSortTowns = () => {
    return fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
        .then(towns => towns.json())
        .then(towns => towns.reduce((acc, curr) => {
            return [...acc, curr.name]
        }, []))
        .then(towns => towns.sort())
        .then(towns => towns.reduce((acc, curr) => {
            return [...acc, { name: curr }]
        }, []))
}

export {
    delayPromise,
    loadAndSortTowns
};
