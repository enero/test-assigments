// Лучше дать аргументам функции понятные имена
function func(s, a, b) {
  // -1 вынести в переменную
  // Достаточно проверить s.length == 0
	if (s.match(/^$/)) {
		return -1;
	}

  // Все объявления переменных перенести под один var через запятую
  // i переименовать в currentIndex
	var i = s.length - 1;
	var aIndex = -1;
	var bIndex = -1;

  // Самый первый символ будет участвовать в итерации, поэтому изменить условие (i >= 0)
  // Заменить сравнения на строгие: ===, !==
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
      // В es5 символ строки можно взять как элемент массива по индексу,
      // т.е. s[i]
      if (s.substring(i, i + 1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i + 1) == b) {
	    	bIndex = i;
    	}
      // --i короче
	    i = i - 1;
	}

  /*
  Код ниже записать короче
  if (aIndex !== -1 && aIndex >= bIndex) {
    return aIndex;
  } else if (bIndex !== -1 && bIndex >= aIndex) {
    return bIndex;
  }

  return -1;
  */

	if (aIndex != -1) {
	    if (bIndex == -1) {
	        return aIndex;
	    }
	    else {
	        return Math.max(aIndex, bIndex);
	    }
	}

	if (bIndex != -1) {
	    return bIndex;
	}
	else {
	    return -1;
	}
}
