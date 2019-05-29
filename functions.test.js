const { greeting, returnTwo, add, subtract, divide, multiply } = require("./functions")

test(
  "returnTwo should return 2",
  () => {
    expect(returnTwo()).toEqual(2)
  }
)

test(
  "greeting should return dynamic greeting based on the name",
  () => {
    expect(greeting("Chris")).toEqual("Hello, Chris.")
    expect(greeting("Jill")).toEqual("Hello, Jill.")
  }
)

// test(
//   "add should add two number values together",
//   () => {
//     expect(add(2, 3)).toEqual(5)
//     expect(add(6, 3)).toEqual(9)
//   }
// )

describe("Math functions", () => {
  test(
    "add should add two number values together",
    () => {
      expect(add(2, 3)).toEqual(5)
      expect(add(6, 3)).toEqual(9)
    }
  )

  test(
    "subtract should subtract two number values together",
    () => {
      expect(subtract(3, 2)).toEqual(1)
      expect(subtract(6, 3)).toEqual(3)
    }
  )

  test(
    "divide should divide two number values together",
    () => {
      expect(divide(3, 3)).toEqual(1)
      expect(divide(6, 3)).toEqual(2)
    }
  )

  test(
    "multiply should multiply two number values together",
    () => {
      expect(multiply(2, 3)).toEqual(6)
      expect(multiply(6, 3)).toEqual(18)
    }
  )
})

