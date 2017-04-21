/**
 * @callback requestCallback
 */

/**
 * Получить данные с помощью AJAX.
 *
 * @param {string} url
 * @param {requestCallback} renderFn
 */
function httpGet(url, renderFn) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();

  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else if (typeof(renderFn) == 'function' ) {
    renderFn(JSON.parse(xhr.responseText));
  } else {
    alert('Ошибка!');
  }
}

/**
 * Сгенерировать временный ID.
 *
 * @returns {string}
 */
function generateId() {
  return 'TMP_' + Math.random().toString(36).substr(2, 10);
}

/**
 * Создать HTML-элемент ячейки таблицы.
 *
 * @param {Object} field
 * @returns {HTMLElement}
 */
function createCell(field) {
  var cell = document.createElement('div');

  cell.className = field.class;

  if (field.hasOwnProperty('html')) {
    cell.innerHTML = field.html;
  } else {
    cell.appendChild(document.createTextNode(field.text));
  }

  return cell;
}

/**
 * Создать HTML-элемент строки заголовка таблицы.
 *
 * @returns {HTMLElement}
 */
function htmlHeadRow() {
  var headRow = document.createElement('div'),
      headFields = [
        {
          class: 'table__cell table__cell_name',
          text: 'Название'
        },
        {
          class: 'table__cell table__cell_year',
          text: 'Год'
        },
        {
          class: 'table__cell table__cell_color',
          text: 'Цвет'
        },
        {
          class: 'table__cell table__cell_status',
          text: 'Статус'
        },
        {
          class: 'table__cell table__cell_price',
          text: 'Цена'
        },
        {
          class: 'table__cell table__cell_action',
          text: ''
        }
      ];

  headRow.className = 'table__row table__row_header';
  headFields.forEach(function(field) {
    headRow.appendChild(createCell(field));
  });

  return headRow;
}

/**
 * Создать HTML-элемент строки данных таблицы.
 *
 * @param {Object} data
 * @returns {HTMLElement}
 */
function htmlDataRow(data) {
  var row = document.createElement('div'),
      div = document.createElement('div'),
      fields = [
        {
          class: 'table__cell table__cell_name',
          html: '<div class="table-cell__title">' + data.title + '</div>'
        },
        {
          class: 'table__cell table__cell_year',
          text: data.year
        },
        {
          class: 'table__cell table__cell_color',
          text: data.color
        },
        {
          class: 'table__cell table__cell_status',
          text: data.status
        },
        {
          class: 'table__cell table__cell_price',
          text: new Intl.NumberFormat('ru-RU').format(data.price) + ' руб.'
        },
        {
          class: 'table__cell table__cell_action',
          html: '<button class="button-remove">Удалить</button>'
        }
      ];

  row.className = 'table__row';
  row.setAttribute('data-id', data.id);
  fields.forEach(function(field) {
    row.appendChild(createCell(field));
  });
  div.className = 'table-cell__description';
  div.appendChild(document.createTextNode(data.description));
  row.appendChild(div);

  return row;
}

/**
 * Создать HTML-элемент таблицы.
 *
 * @param {Object[]} data
 */
function htmlTable(data) {
  var fragment = document.createDocumentFragment();

  fragment.appendChild(htmlHeadRow());
  for (var i = 0; i < data.length; i++) {
    fragment.appendChild(htmlDataRow(data[i]));
  }

  document.getElementsByClassName('table')[0].appendChild(fragment);
}


document.addEventListener("DOMContentLoaded", function() {
  var dataUrl = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json',
      form = document.getElementsByClassName('form')[0],
      fieldId = form.querySelector('[name=id]'),
      table = document.getElementsByClassName('table')[0];

  fieldId.setAttribute('value', generateId());
  httpGet(dataUrl, htmlTable);

  // Добавление новой позиции
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var formFields = {
      id: '',
      title: '',
      year: '',
      price: '',
      description: '',
      color: '',
      status: ''
    };

    for (var name in formFields) {
      if (formFields.hasOwnProperty(name)) {
        formFields[name] = this.elements[name].value;
      }
    }

    document.getElementsByClassName('table')[0].appendChild(htmlDataRow(formFields));
    this.reset();
  });

  // Удаление позиции
  table.addEventListener('click', function(e) {
    if (e.target.className == 'button-remove') {
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
  });
});
