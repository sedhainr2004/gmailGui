import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { Help } from '@material-ui/icons'

//this is where the menu icon will show
//this is where the gmail image will show
//this is where the search bar will show 
function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
          alt=''
        />
      </div>
      <div className='header_mid'>
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input
          placeholders='Search Mail'
          type='text'
        />
        <IconButton>
        <ArrowDropDownIcon className='header_input' />
        </IconButton>
      </div>
      <div className='header_right'>
        <IconButton>
          <HelpIcon/>
        </IconButton>
        <IconButton>
          <SettingsIcon/>
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleRoundedIcon/>
        </IconButton>
        
        
      </div>
    </div>
  )
}

export default Header
