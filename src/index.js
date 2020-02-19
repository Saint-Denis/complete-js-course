const createDivWithText = (text) => {
    const div = document.createElement('div');

    div.textContent = text;

    return div;
}

const prepend = (what, where) => where.prepend(what)

const findAllPSiblings = (where) => {
    let array = []

    for (const node of where.children) {
        if (node.nextElementSibling && node.nextElementSibling.tagName === 'P') {
            array.push(node)
        }
    }

    return array;
}

const findError = (where) => {
    var result = [];

    for (let child of where.children) {
        if (child.innerText === undefined) {
            return
        }
        result.push(child.innerText);
    }

    return result;
}

const deleteTextNodes = (where) => {
    for (let node of where.childNodes) {
        if (node.nodeType === 3) {
            where.removeChild(node)
        }
    }

}

const deleteTextNodesRecursive = (where) => {
    for (let i = 0; i < where.childNodes.length; i++) {
        let child = where.childNodes[i];

        if (child.nodeType === 3) {
            where.removeChild(child);
            i--;
        } else if (child.nodeType === 1) {
            deleteTextNodesRecursive(child);
        }
    }
}

const collectDOMStat = (root) => {
  
}

/*
 Задание 8 *:

 8.1: Функция должна отслеживать добавление и удаление элементов внутри элемента переданного в параметре where
 Как только в where добавляются или удаляются элементы,
 необходимо сообщать об этом при помощи вызова функции переданной в параметре fn

 8.2: При вызове fn необходимо передавать ей в качестве аргумента объект с двумя свойствами:
   - type: типа события (insert или remove)
   - nodes: массив из удаленных или добавленных элементов (в зависимости от события)

 8.3: Отслеживание должно работать вне зависимости от глубины создаваемых/удаляемых элементов

 Рекомендуется использовать MutationObserver

 Пример:
   Если в where или в одного из его детей добавляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'insert',
     nodes: [div]
   }

   ------

   Если из where или из одного из его детей удаляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'remove',
     nodes: [div]
   }
 */
function observeChildNodes(where, fn) {
}

export {
    createDivWithText,
    prepend,
    findAllPSiblings,
    findError,
    deleteTextNodes,
    deleteTextNodesRecursive,
    collectDOMStat,
    observeChildNodes
};
