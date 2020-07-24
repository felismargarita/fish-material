import React from 'react'
import classNames from 'classnames'
interface ButtpnProps {
  type?:string;
  size?:string;
  className?:string;
  disabled?:boolean;
  onClick?:React.MouseEventHandler<HTMLElement>;
  style?:React.CSSProperties;
}


const Button:React.FC<ButtpnProps> = props=>{
  const {type,size,className,...rest}=props
  const classes=classNames('fish-btn',className,{
    'fish-btn-small':size==='small',
    'fish-btn-large':size==='large',
    'fish-btn-danger':type==='danger',
    'fish-btn-primary':type==='primary'
  })
  return <>
  <button className={classes} {...rest}>{props.children}</button>
  </>
}

Button.defaultProps={
  type:'',
  size:''
}

export default Button