describe("add", function() {
  it("should return 0 for the empty string", function() {
    expect(add('')).toEqual(0);
  });

  it ("should return the value when the string is a single number", function() {
    expect(add('5')).toEqual(5);
    expect(add('27')).toEqual(27);
  });

  it ("should return the sum when the string contains 2 numbers", function() {
    expect(add('1,2')).toEqual(3);
    expect(add('3,5')).toEqual(8);
  });

  it ("should allow the newline as a delimiter", function() {
    expect(add('1\n2')).toEqual(3);
    expect(add('3,4\n2')).toEqual(9);
  });

  it ("should allow custom delimiters", function() {
    expect(add('//;\n9;4;2')).toEqual(15);
    expect(add('//x\n2x3x4x4')).toEqual(13);
  });
});
