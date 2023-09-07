const cipher = require("../caesarCipher");

test("single character", () => {
  expect(cipher("a", 1)).toBe("b");
});

test("multiple shift", () => {
  expect(cipher("a", 4)).toBe("e");
});

test("multiple character string", () => {
  expect(cipher("hello", 7)).toBe("olssv");
});

test("over shift character", () => {
  expect(cipher("v", 52)).toBe("v");
});

test("with spaces", () => {
  expect(cipher("i have a story to tell", 7)).toBe("p ohcl h zavyf av alss");
});

test("ignore punctuation", () => {
  expect(cipher("hello,,, world!", 1)).toBe("ifmmp,,, xpsme!");
});
