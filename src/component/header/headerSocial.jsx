import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://linkedin.com" target='_blannk'><BsLinkedin/></a>
        <a href="https://github.com" target='_blannk'><FaGithub /></a>
        <a href="https://twitter.com" target='_blannk'><ImTwitter /></a>
    </div>
  )
}

export default HeaderSocial
