var assert = chai.assert;

suite('temperature', function() {
	test('Calcular función', function()
     {
      aux = new Temperatura();
     });
    test('32e4C to 2336.0F', function()
     {
        aux = new Temperatura(32e4,"F");
        assert.equal(aux.valor, "32e4");
		assert.equal(aux.tipo, "F");
     });
	 test ('108.2K to -131.7F', function()
	 {
		 aux = new Temperatura(108.2,"K");
		 assert.equal(aux.valor, "108.2");
		 assert.equal(aux.tipo, "K");
		 
	 });
	 
	  test ("El resultado es: 5F", function() {
      window.onload = function() {
        var temp = new Temperatura(5,0,"F");
        temp.mostrar_final();
        expect(fin.innerHTML).to.equal("El resultado es: 5 F");
      }
    });
	
		 test ('743e2K to 14586.9C', function()
	 {
		 aux = new Temperatura(743e2,"K");
		 assert.equal(aux.valor, "743e2");
		 assert.equal(aux.tipo, "K");
		 
	 });
	 
	   test("5X === ERROR! Prueba con algo como '52.8E4K'", function() {
      window.onload = function() {
        var aux = new Temperatura(5,0,"X");
        resolver();
        expect(fin.innerHTML).to.match("ERROR! Prueba con algo como '52.8E4K' ");
      }
    });
	
});
