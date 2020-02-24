import { loadAndSortTowns } from './index'

const homeworkContainer = document.querySelector('#homework-container');
const loadingBlock = homeworkContainer.querySelector('#loading-block');
const filterBlock = homeworkContainer.querySelector('#filter-block');
const filterInput = homeworkContainer.querySelector('#filter-input');
const filterResult = homeworkContainer.querySelector('#filter-result');
let cities = [];

const loadTowns = () => {
    loadingBlock.innerHTML = '';
    filterBlock.style.display = 'inline-block';

    return loadAndSortTowns();

}

loadTowns()
    .then(res => {
        cities = res;
        loadingBlock.style.display = 'none';
        filterBlock.style.display = 'block';
    });

const isMatching = (full, chunk) => {
    if (full.toLowerCase().indexOf(chunk.toLowerCase()) !== -1) {
        return true;
    }

    return false;

}

filterInput.addEventListener('keyup', function () {

});

export {
    loadTowns,
    isMatching
};
