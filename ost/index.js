var Panel = function () {
    var count = 0;

    function click() {
        var counterElem = document.getElementsByClassName(this.className + '-counter')[0];
        counterElem.innerText = ++count;
    }

    function init(panelElement) {
        panelElement.addEventListener('click', click);
    }

    return {
        init: init,
        count: count
    }
};


function main () {
    var panelsElements = document.querySelector('.wrapper');
    [].slice.apply(panelsElements.children).forEach(function (panelElement) {
        var panel = new Panel();
        panel.init(panelElement);
    });
}

window.onload = main;