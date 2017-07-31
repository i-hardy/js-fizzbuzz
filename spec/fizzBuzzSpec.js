describe("fizzBuzz", function (){
  it("prints things", function (){
    expect(fizzBuzz(1)).not.toBeNull();
  });

  it("prints numbers not divisible by 3 or 5 as numbers", function (){
    expect(fizzBuzz(4)).toEqual(4)
  });

  it("prints fizz when number is divisible by 3", function (){
    expect(fizzBuzz(3)).toEqual("fizz")
    expect(fizzBuzz(9)).toEqual("fizz")
  });

  it("prints buzz when number is divisible by 5", function (){
    expect(fizzBuzz(5)).toEqual("buzz")
    expect(fizzBuzz(10)).toEqual("buzz")
  });

  it("prints fizzbuzz when number is divisible by both 3 and 5", function (){
    expect(fizzBuzz(15)).toEqual("fizzbuzz")
    expect(fizzBuzz(30)).toEqual("fizzbuzz")
  });
});
