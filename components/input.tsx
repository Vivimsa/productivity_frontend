import { Input, InputProps } from '@heroui/input'
export const InputStyle = {
  inputWrapper: 'text-azul2 border-azul1 data-[focus=true]:border-azul3',
  label:
    'text-azul1 group-data-[focus=true] group-data-[filled=true]:text-azul2',
}

export const MeuInput = (props: InputProps) => {
  return <Input classNames={InputStyle} {...props} />
}
