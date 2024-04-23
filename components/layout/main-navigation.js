import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';
import { signOut } from 'next-auth/react';
import Router from "next/router"

function MainNavigation() {

  const handleLogout = async(e) => {
    signOut({ redirect: false }).then(res => {
      Router.push("/login")
    })
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={handleLogout} className='bg-white p-1 px-3 rounded-sm hover:opacity-60'>Logout</button>
          </li>
        </ul>
       
      </nav>
      
    </header>
  );
}

export default MainNavigation;