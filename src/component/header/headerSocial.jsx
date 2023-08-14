import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/olamilekan-ogunkanmbi-161a94127" target='_blannk'><BsLinkedin/></a>
        <a href="https://github.com/olamilekanAnelka" target='_blannk'><FaGithub /></a>
        <a href="https://twitter.com/anelka_ace" target='_blannk'><ImTwitter /></a>
    </div>
  )
}

export default HeaderSocial
