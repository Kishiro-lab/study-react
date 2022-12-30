import { Inter } from '@next/font/google'

import classes from 'src/components/Footer/Footer.module.css'

const inter = Inter({ subsets: ['latin'] })



export function Footer({items}) {

  return (
    
    <div className={classes.grid}>
      
      {items.map((item) => {
        return (
          <a
          key={item.href}
          href={item.href}
          className={classes.card}
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {item.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {item.description}
            </p>
          </a>
        )
      })}
    </div>
  )
}
