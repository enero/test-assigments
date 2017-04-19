function httpGet(url, renderFn) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    renderFn(JSON.parse(xhr.responseText));
  }
}

function renderHtmlTable(data) {
  var fragment = document.createDocumentFragment(),
      html,
      row;

  row = document.createElement('div');
  row.className = 'table__row table__row_header';
  row.innerHTML = [
    '<div class="table__cell table__cell_name">Название</div>',
    '<div class="table__cell table__cell_year">Год</div>',
    '<div class="table__cell table__cell_color">Цвет</div>',
    '<div class="table__cell table__cell_status">Статус</div>',
    '<div class="table__cell table__cell_price">Цена</div>',
    '<div class="table__cell table__cell_action"></div>'
  ].join("\n");
  fragment.appendChild(row);

  for (var i = 0; i < data.length; i++) {
    row = document.createElement('div');
    row.className = 'table__row';
    row.innerHTML = [
      '<div class="table__cell table__cell_name">',
        '<div>' + data[i].title + '<br />' + data[i].description + '</div>',
      '</div>',
      '<div class="table__cell table__cell_year">' + data[i].year + '</div>',
      '<div class="table__cell table__cell_color">' + data[i].color + '</div>',
      '<div class="table__cell table__cell_status">' + data[i].status + '</div>',
      '<div class="table__cell table__cell_price">' + data[i].price + '</div>',
      '<div class="table__cell table__cell_action">',
        '<button class="button-delete">Удалить</button>',
      '</div>'
    ].join("\n");
    fragment.appendChild(row);
  }

  document.getElementsByClassName('table')[0].appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", function() {
  var dataUrl = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
  httpGet(dataUrl, renderHtmlTable);
});
