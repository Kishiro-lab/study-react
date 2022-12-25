import Link from "next/link";
import Image from 'next/image'
import classes from './Header.module.css'

export function Header(props) {
  return (
    <div className={classes.description}>
      <p>
        Get started by editing{" "}
        {props.children}&nbsp;
      </p>
      <div>
        <p>
          <Link href="/" className={classes.pageLink}>Index</Link>
        </p>
        <p>
          <Link href="/about" className={classes.pageLink}>About</Link>
        </p>
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