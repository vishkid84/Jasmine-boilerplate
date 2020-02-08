describe("Calculator", function(){

    var calc = new Calculator;

    describe("Addition tests", function(){
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 16", function(){
            calc.add(9);
            calc.add(7);
            expect(calc.value).toBe(16);
        });
        it("should return an error if two numberS are not supplied", function(){
            spyOn(window, "alert");
            calc.add("Tom", "Jerry");
            expect(window.alert).toHaveBeenCalledWith("Error");
        })
    })
})

// describe("Calculator", function(){
//     describe("Additon tests", function(){
//         it("should return 42", function(){
//             expect(addition(20,22)).toBe(42);
//         });
//         it("should return 16", function(){
//             expect(addition(9,7)).toBe(16);
//         });
//         it("should return an error if two numberS are not supplied", function(){
//             spyOn(window, "alert");
//             addition("Tom", "Jerry");
//             expect(window.alert).toHaveBeenCalledWith("Error");
//         })
//     })
// })