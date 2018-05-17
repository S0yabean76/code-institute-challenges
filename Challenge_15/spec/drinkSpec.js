describe("DrinkAbout", function() {
    
    beforeEach(function() {
       drink = new whatCanIDrink();
   });
    
   describe("whatCanIDrink method", function() {
       
       it("should return incorrect age when age is -1", function() {
            var result = whatCanIDrink(-1);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
       
       it("should return drink toddy when age is 13", function() {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        
        it("should return drink coke when age is 17", function() {
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when age is 20", function() {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink whisky when age is 129", function() {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink Whisky");
        });
        
        it("should return incorrect age when age is not numeric", function() {
            var result = whatCanIDrink("twenty");
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
       
   });
})