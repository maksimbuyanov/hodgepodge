import { parseViewers } from "./parseViewers"

describe("parseViewers.test", () => {
  test("return 555", () => {
    const result = parseViewers(555)
    expect(result).toEqual(`555`)
  })
  test("return 13К", () => {
    const result = parseViewers(12598)
    expect(result).toEqual(`13К`)
  })
  test("return 12.4М", () => {
    const result = parseViewers(12_359_999)
    expect(result).toEqual(`12.4М`)
  })
  test("return 12.36ММ", () => {
    const result = parseViewers(12_358_999_999)
    expect(result).toEqual(`12.36ММ`)
  })
  test("return empty string", () => {
    const result = parseViewers(undefined)
    expect(result).toEqual("")
  })
})
