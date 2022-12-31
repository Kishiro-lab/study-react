import Link from "next/link";
import Image from 'next/image'
import classes from 'src/components/Header/Header.module.css'

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

export const Header = (props) => {
  return (
    <div className={classes.description}>
      <p className={classes.getStarted}>
        アイテムの数は&nbsp;
        {props.children}&nbsp;個です
      </p>
      <div className={classes.pageLinks}>
        {NAV_ITEMS.map((item) => {
          return (
            <p key={item.href}><Link href={item.href} className={classes.pageLink}>{item.label}</Link></p>
          )
        })}
      </div>
      <div className={classes.byVercel}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={classes.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
      </div>     
    </div>
  )
}