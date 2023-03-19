import { Story } from "@storybook/react"
import { Suspense } from "react"
import { Loader } from "@/features/Loader"

export const SuspenseDecorator = (StoryComponent: Story): JSX.Element => (
  <Suspense fallback={<Loader />}>
    <StoryComponent />
  </Suspense>
)
