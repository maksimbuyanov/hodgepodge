import { FC, memo, useCallback } from "react"
import cls from "./AddCommentForm.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
} from "@/shared/lib"
import { Button, ButtonTheme, HStack, Input } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../model/selectors/addCommentFormSelectors"
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../model/slice/addCommentFormSlice"

export interface AddCommentFormProps {
  className?: string
  onSendComment?: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

export const AddCommentForm: FC<AddCommentFormProps> = props => {
  const { className = "", onSendComment } = props
  const { t } = useTranslation("article")
  const text = useSelector(getAddCommentFormText)
  const ___error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()
  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )
  const onSend = useCallback(() => {
    onSendComment?.(text ?? "")
    dispatch(addCommentFormActions.setText(""))
  }, [dispatch, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify={"center"}
        align={"center"}
        max={true}
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          placeholder={t("Введите текст комментария")}
          className={cls.input}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          className={cls.button}
          theme={ButtonTheme.OUTLINE}
          onClick={onSend}
        >
          {t("Отправить комментарий")}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
