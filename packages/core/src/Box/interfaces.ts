import { BoxProps as TUIBoxProps } from 'theme-ui'

type CustomBoxProps = {
  borderColor?: string
}

export interface BoxProps extends TUIBoxProps, CustomBoxProps {}
