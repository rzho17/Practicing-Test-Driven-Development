const analyze = require("../analyzeArray");

test("find average", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("find min", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("find max", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("find length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
