describe('Javabuzz', function() {
  
  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {

    it('divisble by three', function(){
      expect(javabuzz.isDivisableByThree(3)).toEqual(true);
    });

    it('divisable by five', function(){
      expect(javabuzz.isDivisableByFive(5)).toEqual(true);
    });

    it('divisable by three and five', function(){
      expect(javabuzz.isDivisableByFifteen(15)).toEqual(true);
    });
  
  });


  describe('knows when a number is not', function(){ 

    it('not divisable by three', function(){
      expect(javabuzz.isDivisableByThree(1)).toEqual(false);
    });

    it('not divisable by five', function(){
      expect(javabuzz.isDivisableByFive(1)).toEqual(false);
    });

    it('not divisable by fifteen', function(){
      expect(javabuzz.isDivisableByFifteen(1)).toEqual(false);
    });

  });
  
  describe('prints fizz, buzz, fizzbuzz or number', function(){
    
    it('prints fizz when divisable by 3', function(){
      expect(javabuzz.prints(6)).toEqual('fizz'); 
    });

    it('prints buzz when divisable by 5', function(){
      expect(javabuzz.prints(10)).toEqual('buzz');
    })

  }); 

}); 
