import { loadAndSortTowns } from './index'

const homeworkContainer = document.querySelector('#homework-container');
const loadingBlock = homeworkContainer.querySelector('#loading-block');
const filterBlock = homeworkContainer.querySelector('#filter-block');
const filterInput = homeworkContainer.querySelector('#filter-input');
const filterResult = homeworkContainer.querySelector('#filter-result');
let cities = [];

const makeErrorBlock = () => {
    if (filterBlock.querySelector('.error-block')) return
    
    const errorBlock = document.createElement('div');
    const button = document.createElement('button');
    errorBlock.className = "error-block"
    const p = document.createElement('p');
    button.textContent = "Повторить"
    p.textContent = 'Не удалось загрузить города'
    filterInput.style.display = 'none'
    filterBlock.appendChild(errorBlock)
    errorBlock.appendChild(button)
    errorBlock.appendChild(p)
}

const showLoading = () => {
    loadingBlock.innerHTML = 'Загрузка...';
    filterBlock.style.display = 'none';
}

const hideLoading = () => {
    loadingBlock.innerHTML = '';
    filterBlock.style.display = 'inline-block';
}

const loadTowns = () => loadAndSortTowns()

const getTowns = () => {
    loadTowns()
        .then(res => {
            setTimeout(() => {
                hideLoading()
                cities = res
                return cities
            }, 1500)
        })
        .catch(() => {
            setTimeout(() => {
                hideLoading()
                makeErrorBlock()
            }, 1500)
        })
}


const isMatching = (full, chunk) => {
    if (full.toLowerCase().indexOf(chunk.toLowerCase()) !== -1) {
        return true;
    }
    return false;
}

//Events

document.addEventListener("DOMContentLoaded", getTowns);

document.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        showLoading()
        getTowns()
    } 
    return
})

filterInput.addEventListener('keyup', function () {
    filterResult.innerHTML = this.value ?
    cities
        .filter(city => isMatching(city.name, this.value))
        .map(city => {
            return (
                `<div>${city.name}</div>`
            )
        }).join(' ')
    : ''
});


export {
    loadTowns,
    isMatching
};
