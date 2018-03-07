import React from 'react'
import { socialGroups } from 'index/constants'
import {Link} from 'components/Link'
import classes from './styles.scss'
import Icon from 'react-icons-kit'

import { facebook as Facebook } from 'react-icons-kit/icomoon/facebook'
import { linkedin2 as LinkedIn } from 'react-icons-kit/icomoon/linkedin2'

const iconPack = {
  Facebook,
  LinkedIn
}

function SocialButtons(props) {
  return (
    <ul className={classes.container}>
      {Object.keys(socialGroups).map((item, index) => (
        <li key={index}>
          <Link to={socialGroups[item]} title={item} className={classes[item]}>
            <Icon icon={iconPack[item]}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SocialButtons
