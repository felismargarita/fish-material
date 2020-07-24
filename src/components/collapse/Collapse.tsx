import React,{useState,useEffect} from 'react'
import classNames from 'classnames'
interface PannelProps {
  title:string,
  expand?:boolean,
  index?:number,
  changeExpand?:(index:number)=>void
}

const Pannel:React.FC<PannelProps> = ({expand,index,changeExpand,title,children})=>{
  const classes=classNames({
    'microvast-collapse-pannel-conetent-open':expand,
    'microvast-collapse-pannel-conetent-close':!expand,
  })
  return <>
  <div className="microvast-collapse-pannel-bar" onClick={()=>{
    if(changeExpand){
      if(index===0 || index){
        changeExpand(index)
      }
    }
  }}>{title}</div>
  <div className={classes}>{ children}</div>
  </>
}
export {Pannel}

const Collapse:React.FC = (props)=>{

  const [list,setList]=useState<Array<boolean>>()

  useEffect(()=>{
    const pannelOCList=React.Children.map(props.children,()=>false)
    setList(pannelOCList || [])
    // eslint-disable-next-line 
  },[])

  const changeExpand=(index:number)=>{
    const newList=list?.map((pannelExpand,idx)=>{
      if(index===idx){
        return !list[index]
      }else{
        return false
      }
    })
    setList(newList||[])
  }

  return <>
  {
    React.Children.map(props.children,(child,index)=>{
      const childElement=child as React.FunctionComponentElement<PannelProps>
      return React.cloneElement(childElement,{
        expand:list ? list[index]:false,
        index,
        changeExpand:changeExpand
      })
    })
  }
  </>
}
export default Collapse