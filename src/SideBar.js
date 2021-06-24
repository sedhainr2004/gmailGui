import React from 'react'
import './SideBar.css'
import { Button } from '@material-ui/core'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import { IconButton } from '@material-ui/core'
import InboxRoundedIcon from '@material-ui/icons/InboxRounded'
import SidebarMenu from './SidebarMenu'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import SendIcon from '@material-ui/icons/Send'
import DraftsIcon from '@material-ui/icons/Drafts'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import VideocamIcon from '@material-ui/icons/Videocam'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined'

//this is the sidebar that contains the inbox, starred, compose, etc
function SideBar() {
  return (
    <div className='sideBar'>
      <IconButton className='addIcon'>
        <AddRoundedIcon />
      </IconButton>
      <SidebarMenu
        Icon={InboxRoundedIcon}
        Title={'Inbox'}
        Notifications={'100'}
      />
      <SidebarMenu
        Icon={GradeRoundedIcon}
        Title={'Starred'}
        Notifications={'100'}
      />
      <SidebarMenu
        Icon={WatchLaterIcon}
        Title={'Snoozed'}
        Notifications={'100'}
      />
      <SidebarMenu
        Icon={SendIcon}
        Title={'Sent'}
        Notifications={'100'}
      />
      <SidebarMenu
        Icon={DraftsIcon}
        Title={'Drafts'}
        Notifications={'100'}
      />
      <SidebarMenu
        Icon={ExpandMoreIcon}
        Title={'More'}
        Notifications={'100'}
      />

      <div className='sideBar_bottom'>
        <SidebarMenu
          Icon={VideocamIcon}
          Title={'New Meeting'}
        />
        <SidebarMenu
          Icon={KeyboardIcon}
          Title={'Join Meeting'}
        />
        
       
      </div>
    </div>
  )
 
}

export default SideBar
