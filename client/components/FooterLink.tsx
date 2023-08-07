import Image from 'next/image'
import Link from 'next/link'
import homeIcon from '../src/homesolid.svg'
import favouriteIcon from '../src/heart-solid.svg'
import createIcon from '../src/plus-solid.svg'
import { FunctionComponent } from 'react'

const FooterLink: FunctionComponent<any> = ({ menu }) => {
    return (
        <Link href={menu.link} className='footer_link'>
            {menu.icon == 'homeIcon' && <Image src={homeIcon} alt={menu.title} />}
            {menu.icon == 'favouriteIcon' && <Image src={favouriteIcon} alt={menu.title} />}
            {menu.icon == 'createIcon' && <Image src={createIcon} alt={menu.title} />}
        </Link>
    )
}

FooterLink.propTypes = {}

export default FooterLink