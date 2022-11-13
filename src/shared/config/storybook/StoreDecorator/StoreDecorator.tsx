import { Story } from "@storybook/react"
import { ReactElement } from "react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { loginReducer } from "@/features/AuthByUsername"
import { profileReducer } from "@/entities/Profile"
import { ReducersList } from "@/shared/lib"
import { addCommentFormReducer } from "@/features/AddCommentForm/model/slice/addCommentFormSlice"
import { articleDetailsCommentsReducer } from "@/pages/ArticleDetailsPage/model/slice/slice"
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice"

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  // TODO
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story): ReactElement => {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
