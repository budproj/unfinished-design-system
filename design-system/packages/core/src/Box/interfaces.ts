import { BoxProps as TUIBoxProps } from 'theme-ui'

type CustomBoxProps = {
  borderRadius?: number
}

export interface BoxProps extends TUIBoxProps, CustomBoxProps {}
