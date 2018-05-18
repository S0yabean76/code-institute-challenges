describe ("Fizzbuzz", function(){
    
    beforeEach(function(){
        fizzbuzz = new fizzBuzz;
    });
    
    describe ("Returns fizzbuzz, fizz or buzz depending on number divisible by", function(){
        it("shoud return FizzBuzz if number is divisible by 3 and 5", function(){
            var result = fizzBuzz (15);
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return Fizz if the number is divisible by 3", function(){
            var result = fizzBuzz (9);
            expect(result).toBe("Fizz");
        });
        
        it("should return Buzz if the number is divisble by 5", function(){
            var result = fizzBuzz (10);
            expect(result).toBe("Buzz");
        });
        
        it("should return the number if not divisible by 3 or 5", function(){
            var result = fizzBuzz (4);
            expect(result).toBe(4);
        });
        
        it("should return an alert if the value is not numeric", function (){
            var result = fizzBuzz("five");
            expect(result).toBe("This is not a number");
        });
    });
})