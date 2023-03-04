"use client"
import styles from './menu.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type Props = {
    menuItems: {
        name: string
        link: string
    }[]
}

const Menu = ({ menuItems }: Props) => {

    const [menuOpen, setMenuOpen] = useState(false)
    

    return (
        <div className={styles.menu}>
            <div className={styles.menu_items}>
                {menuItems.map((item, index) => (
                    <Link href={item.link} key={index}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className={styles.menu_hamburger}>
                
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {menuOpen && (
                    <div className={styles.menu_mobile}>
                        {menuItems.map((item, index) => (
                            <Link href={item.link} key={index}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu