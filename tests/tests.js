var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
	
	test('14.32 = error', function(){
		original.value = "14.32";
		calculate();
		assert.notEqual(converted.innerHTML, 14.32, "/ERROR/");
	});
	test('Ojo viruelo = error', function(){
		original.value = "Ojo viruelo";
		calculate();
		assert.equal(converted.innerHTML, 'ERROR! Try something like \'-4.2C\'',/ERROR/);
	});
});