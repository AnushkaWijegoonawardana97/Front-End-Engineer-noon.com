import Image from 'next/image'
import Link from 'next/link'
import noonLogo from '../src/noon-com-noon-seeklogo.com.svg'
import { FunctionComponent } from 'react'

const Header: FunctionComponent<any> = ({ title }) => {
    return (
        <div className='main_header'>
            {/* <Link href={'/'} className="header_logo">
                <Image src={noonLogo} alt="" />
            </Link> */}
            <h1>Welcome to the Noongram</h1>
        </div>
    )
}

Header.propTypes = {}

export default Header