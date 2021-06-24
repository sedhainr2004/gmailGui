import React from 'react'
import { IconButton } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { Check } from '@material-ui/icons'
import StarOutlineIcon from '@material-ui/icons/StarOutline'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import './EmailRow.css'

function EmailRow({
  id,
  title,
  subject,
  description,
  time,
}) {
  return (
    <div className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className='emailRow_title'>{title}</h3>
      <div className='emailRow_msg'>
        <h4>
          {subject}
          <span className='emailRow_desc'>
            {' '}
            - {description}
          </span>
        </h4>
      </div>
      <p className='emailRow_time'>{time}</p>
    </div>
  )
}

export default EmailRow
