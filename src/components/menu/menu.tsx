"use client"
import styles from './menu.module.scss'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import ThemeContext from '../ThemeContext/ThemeContext'

type Props = {
    menuItems: {
        name: string
        link: string
    }[]
}

const Menu = ({ menuItems }: Props) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const { isDark, toggleTheme } = useContext(ThemeContext);
    

    return (
        <div className={styles.menu_container}>
            <div className={styles.menu_bar}>
                <div className={styles.logo}>
                    <Link href="/">
                        {/* <Image src={process.env.NEXT_PUBLIC_LOGO_URL ?? '/logo.png'} alt="logo" fill /> */}

                        {`J</>se`}{" "} <span>Dacosta</span>
                    </Link>
                </div>
                <div className={styles.links_and_toogle}>
                    {<button onClick={toggleTheme}>
                        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                    </button>}
                    {menuItems.map((item, index) => (
                        <Link href={item.link} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className={styles.menu_hamburger+ " " + (menuOpen ? styles.opened : "")}>    
                    <>
                    <button onClick={toggleTheme}>
                        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
                    </button></>
                </div>
            </div>
            {menuOpen && (
                <div className={styles.full_screen}>
                    <div className={styles.links}>
                    {menuItems.map((item, index) => (
                        <Link onClick={()=>setMenuOpen(!menuOpen)} href={item.link} key={index}>
                            {item.name}
                        </Link>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu