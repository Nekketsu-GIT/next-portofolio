"use client";
import { FunctionComponent, useContext } from "react";
import Menu from "../menu/menu";
import ThemeContext from "../ThemeContext/ThemeContext";


const BodyContainer = ({children} : { children: React.ReactNode } )=> {

    const { isDark } = useContext(ThemeContext);

    return (
        <body className={isDark ? "dark" : ""}>
        <header>
          <Menu menuItems={
            [
              {
                name: 'Home',
                link: '/'
              },
              {
                name: 'Blog',
                link: '/blog'
              },
              {
                name: 'Projects',
                link: '/projects'
              },
            ]

          } />
        </header>
        <main>{children}</main>
        <footer>
          Made with ❤️ by&nbsp;<a href="/">Jose Dacosta</a>
        </footer>
      </body>
    )
}

export default BodyContainer