// 拓展组件demo，暂时无用
import Button from 'antd4/lib/button'
import type { ButtonProps, ButtonShape, ButtonType, ButtonGroupProps, ButtonSize }  from 'antd4/lib/button'

import React, { forwardRef, useState } from 'react'
import isNil from 'lodash/isNil'

type TLoading = boolean

interface VibeButtonProps extends ButtonProps {
  // 异步的点击自动进行spin
  asyncClickAutoLoading?: boolean
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<VibeButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Button.Group;
  __ANT_BUTTON: boolean;
}

const VibeButton = forwardRef<unknown, VibeButtonProps>((props: VibeButtonProps, buttonRef: any) => {
  const [loading, setLoading] = useState<TLoading>()

  const { asyncClickAutoLoading, ...antProps } = props
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if(!props.onClick)
      return

    if(!isNil(props.loading) || !asyncClickAutoLoading)
      return props.onClick(e)

    const data: any | Promise<any> = props.onClick(e)

    if(data instanceof Promise) {
      setLoading(true)
      data.finally(() => setLoading(false))
    }

    return data
  }

  return <Button {...antProps} loading={props.loading || loading} ref={buttonRef} onClick={handleClick}/>
}) as CompoundedComponent

VibeButton.displayName = 'Button';
VibeButton.Group = Button.Group;
VibeButton.__ANT_BUTTON = true;

export default VibeButton
export type { ButtonProps, ButtonShape, ButtonType, ButtonGroupProps, ButtonSize }
