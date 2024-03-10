import { useContext } from 'react';
import { GlobalContext } from '../../provider/Provider'
import { Icon } from '../common/icon/Icon';
import './Header.scss'

export const Header = () => {
    return(
        <header className='Header'>
            <HamburgerMenu />
            <Logo />
            <Nav />
            <Sign />
        </header>
    );
}

const Logo = () => {
    return(
        <h1 className='Header-h1'>
            <a href="#" className='Header-a'>
                Hola
            </a>
        </h1>
    )
}

const Nav = () => {
    const { header } = useContext(GlobalContext);
    console.log(header);

    return(
        <nav className='Header-nav'>
            <ul className='Header-ul'>
                {header.map((item) => {
                    return (<li key={item.id} className='Header-li'>
                                <a href={item.href} className='Header-a'>{item.title}</a>
                            </li>)
                })}
            </ul>
        </nav>
    )
}

const HamburgerMenu = () => {
    return(
        <button className='Header-menu'>
            <Icon name='menu' />
        </button>
    )
}

const Sign = () => {
    return(
        <button className='Header-btn'>
            <svg className='Header-sign'></svg>
            <span className='Header-span'>Sign In</span>
        </button>
    )
}