"use strict";

// Yor code here ...
function dscount(str, s1, s2) {
	var s1 = s1.toLowerCase(),
			s2 = s2.toLowerCase(),
			str = str.toLowerCase(),
			count = 0;

  for (var i = 0; i < str.length - 1; i++) {
  	if (str[i] === s1 && str[i + 1] === s2) {
    	count++;
    }
  }

  return count;
}
// ... //

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests success passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
}
