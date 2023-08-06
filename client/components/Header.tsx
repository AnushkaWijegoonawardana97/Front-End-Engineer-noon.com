import Image from 'next/image'
import Link from 'next/link'
import noonLogo from '../src/noon-com-noon-seeklogo.com.svg'

const Header = () => {
    return (
        <div className='main_header'>
            <Link href={'/'} className="header_logo">
                <Image src={noonLogo} alt="" />
            </Link>
        </div>
    )
}

Header.propTypes = {}

export default Header