/* ts-ignore */

// import { classNames } from "./classNames"

import { classNames } from "@/shared/lib/classnames/classNames"

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someclass")).toBe("someclass")
  })
  test("with additional param", () => {
    expect(classNames("someclass", {}, ["class1", "class"])).toBe(
      "someclass class1 class"
    )
  })
  test("with mods param", () => {
    const expected = "someclass class1 class2 hovered focused"
    expect(
      classNames(
        "someclass",
        { hovered: true, focused: "of course", active: false },
        ["class1", "class2"]
      )
    ).toBe(expected)
  })
  test("with mods para", () => {
    const expected = "someclass class1 class2 hovered focused"
    expect(
      classNames(
        "someclass",
        { hovered: true, focused: "of course", active: false, onFocus: "" },
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
          onFocus: undefined,
        },
        ["class1", "class2"]
      )
    ).toBe(expected)
  })
})
