/* ts-ignore */

import { classNames } from "./classNames"

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someclass")).toBe("someclass")
  })
  test("with additional param", () => {
    expect(classNames("someclass", {}, ["class1", "class2"])).toBe(
      "someclass class1 class2"
    )
  })
  test("with mods param", () => {
    const expected = "someclass class1 class2 hovered focused"
    expect(
      classNames(
        "someclass",
        // @ts-expect-error
        { hovered: true, focused: "of course", active: false, onFocus: 0 },
        ["class1", "class2"]
      )
    ).toBe(expected)
  })
  test("with undefined", () => {
    const expected = "someclass class1 class2 hovered"

    expect(
      classNames(
        "someclass",
        {
          hovered: true,
          active: false,
          // @ts-expect-error
          onFocus: undefined,
        },
        ["class1", "class2"]
      )
    ).toBe(expected)
  })
})
