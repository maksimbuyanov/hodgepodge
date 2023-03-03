import { componentRender } from "@/shared/lib/componentRender"
import { EditableProfileCard } from "./EditableProfileCard"
import { Profile } from "@/entities/Profile"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { screen } from "@testing-library/react"
import { userEvent } from "@storybook/testing-library"
import { editableProfileReducer } from "@/features/EditableProfileCard/model/slice/slice"
import { $api } from "@/shared/api"

const profileValue: Profile = {
  city: "Tar-tarary",
  age: 100,
  username: "TwitterChief",
  lastname: "Mask",
  first: "Ilon",
  country: Country.RU,
  currency: Currency.EUR,
  id: "123",
}

const options = {
  route: "/",
  initialState: {
    profile: { data: profileValue, form: profileValue, readonly: true },
    user: { authData: { id: "123", username: "TwitterChief" } },
  },
  asyncReducer: { profile: editableProfileReducer },
}

describe("features/EditableProfileCard", () => {
  test("проверяем кнопку Редактировать", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options)

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )

    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument()
  })

  test("проверяем запрос на отправку", async () => {
    const mocked = jest.spyOn($api, "put")
    componentRender(<EditableProfileCard id={"1"} />, options)

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )

    await userEvent.type(screen.getByTestId("ProfileCard.InputName"), "user")

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    )

    expect(mocked).toBeCalled()
  })
})
