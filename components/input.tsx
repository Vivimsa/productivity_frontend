import { Input, InputProps } from '@heroui/input'
import { forwardRef } from 'react'
export const InputStyle = {
  inputWrapper: 'text-azul2 border-azul1 data-[focus=true]:border-azul3',
  label:
    'text-azul1 group-data-[focus=true] group-data-[filled=true]:text-azul2',
}

export const MeuInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <Input ref={ref} classNames={InputStyle} {...props} />
  },
)
