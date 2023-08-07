import React from 'react'
import PropTypes from 'prop-types'
import { FOOTER_MENU } from '@/app/contant'
import FooterLink from './FooterLink'

const Footer = () => {
    return (
        <div className="fixed_footer">
            {FOOTER_MENU.map((menu: any) => <FooterLink menu={menu}/>)}
        </div>
    )
}

Footer.propTypes = {}

export default Footer