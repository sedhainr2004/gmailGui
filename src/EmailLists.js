import React from 'react'
import {
  IconButton,
  Checkbox,
} from '@material-ui/core'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RefreshSharpIcon from '@material-ui/icons/RefreshSharp'
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp'
import KeyboardArrowLeftSharpIcon from '@material-ui/icons/KeyboardArrowLeftSharp'
import KeyboardArrowRightSharpIcon from '@material-ui/icons/KeyboardArrowRightSharp'
import './EmailLists.css'
import InboxIcon from '@material-ui/icons/Inbox'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'
import Option from './Option'
import EmailRow from './EmailRow'

//this is where the checklist, refresh, and more bar is created
function EmailLists() {
  return (
    <div className='emailLists'>
      <div className='emailList_settings'>
        <div>
          <Checkbox />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          <IconButton>
            <RefreshSharpIcon />
          </IconButton>
          <IconButton>
            <MoreVertSharpIcon />
          </IconButton>
        </div>
        <div className='emailList_left'>
          <IconButton>
            <KeyboardArrowLeftSharpIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightSharpIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </div>
      </div>

      <div className='emailOptions'>
        <Option
          Icon={InboxIcon}
          title='Primary'
          color='Red'
          selected
        />
        <Option
          Icon={PeopleIcon}
          title='Social'
          color='Blue'
        />
        <Option
          Icon={LocalOfferIcon}
          title='Promotions'
          color='Green'
        />
      </div>

      <div className='emailList_rows'>
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class of 2023 Rohan'
          time='1am'
        />
        <EmailRow
          title='CalTech'
          subject='Congratulations'
          description='Welcome to the Class of 2023 Rohan'
          time='10pm'
        />
        <EmailRow
          title='Carnegie Mellon University'
          subject='Congratulations'
          description='Welcome to the Class of 2023 Rohan'
          time='12am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class of 2023 Rohan'
          time='2pm'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class of 2023 Rohan'
          time='5pm'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='3am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='4am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1:30pm'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='2:30pm'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='2:30pm'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='2:30pm'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
        <EmailRow
          title='MIT'
          subject='Congratulations'
          description='Welcome to the Class'
          time='1am'
        />
      </div>
    </div>
  )
}

export default EmailLists
