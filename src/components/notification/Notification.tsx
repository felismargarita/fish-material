import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom';
import {v4} from 'uuid'
interface INotificationProps {
  title:string;
  content?:string | React.ReactNode;
  placement?:string;
  timer?:number;
}

const Notification :React.FC<INotificationProps> = (props)=>{
  const {title,content,placement}=props

  const [visible,setVisible]=useState(false)

  useEffect(()=>{
    setVisible(true)
    setTimeout(()=>setVisible(false),3000)
  },[setVisible])


  const classes=classNames('notification',
  {
    'notification-show-position-top-right':visible && placement==='tr',
    'notification-hidden-position-top-right':!visible && placement==='tr'
  },
  {
    'notification-show-position-bottom-right':visible && placement==='br',
    'notification-hidden-position-bottom-right':!visible && placement==='br'
  }
  )
  return <div className={classes}>
    <div className="notification-title">{title}</div>
    <div className="notification-content">{content}</div>
  </div>
}
Notification.defaultProps={
  title:'',
  placement:'tr'
}


export default {
  open(config:INotificationProps){
    const {title,content,placement}=config
    const notificationNode=document.createElement('div')
    const uuid=v4()
    notificationNode.id=uuid
    document.body.appendChild(notificationNode)
    const timer=3000 //定时器
    //定时
    setTimeout(()=>notificationNode.remove(),timer+500)
    ReactDOM.render<React.ReactElement>(<Notification title={title} timer={timer} content={content} placement={placement}/>,notificationNode)
  }
}