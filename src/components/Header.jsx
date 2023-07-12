import React from 'react'

const Header = () => {

   const connectionsIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.41 3.99999C18.35 3.99999 19.91 5.56999 19.91 7.49999C19.91 9.38999 18.41 10.93 16.54 11C16.4536 10.99 16.3664 10.99 16.28 11M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14M9.15997 10.87C9.05997 10.86 8.93997 10.86 8.82997 10.87C7.68217 10.831 6.59461 10.3468 5.7976 9.51995C5.00059 8.69307 4.55671 7.58844 4.55997 6.43999C4.55997 3.98999 6.53997 1.99999 8.99997 1.99999C10.1762 1.97877 11.3127 2.42568 12.1594 3.2424C13.0061 4.05912 13.4938 5.17875 13.515 6.35499C13.5362 7.53123 13.0893 8.66771 12.2726 9.51444C11.4558 10.3612 10.3362 10.8488 9.15997 10.87ZM4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke="#434545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>)
   const listIcon = (<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H19M1 6H19M1 11H19" stroke="#434545" stroke-width="1.5" stroke-linecap="round"/></svg>)


  return (
      <header>
         {window.innerWidth < 600 && connectionsIcon}
         {window.innerWidth < 600 && listIcon}
      </header>
  )
}

export default Header