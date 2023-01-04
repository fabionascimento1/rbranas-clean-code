import Circle from "./Circle";

test("Should Calculate the area of cicle", function () {
    const circle = new Circle(2)
    expect(circle.getarea()).toBe(12.566370614359172)
})