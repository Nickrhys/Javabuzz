describe('Javabuzz', function() {
  
  var javabuzz;

  describe('knows when a number is', function() {

    it('divisble by three', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisableByThree(3)).toEqual(true);
    });

  });

}); 
