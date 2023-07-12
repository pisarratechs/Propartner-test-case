import React from 'react'


const Item = ({data, i, remove}) => {

   const [show, setShow] = React.useState(false)

   const premiumIcon = (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9006 0H2.09941C0.93994 0 0 0.93994 0 2.09941V17.9006C0 19.0601 0.93994 20.0001 2.09941 20.0001H17.9006C19.0601 20.0001 20.0001 19.0601 20.0001 17.9006V2.09941C20.0001 0.93994 19.0601 0 17.9006 0Z" fill="#141617"/><path d="M17.9006 0H2.09941C0.93994 0 0 0.93994 0 2.09941V17.9006C0 19.0601 0.93994 20.0001 2.09941 20.0001H17.9006C19.0601 20.0001 20.0001 19.0601 20.0001 17.9006V2.09941C20.0001 0.93994 19.0601 0 17.9006 0Z" fill="url(#paint0_linear_1_856)"/><path d="M6.55593 7.15631C7.6692 7.15631 8.1455 7.84493 8.1455 8.63597C8.1455 9.3833 7.71335 10.1889 6.55593 10.1889H5.01757C4.93679 10.1889 4.89308 10.2255 4.89308 10.3134V12.1007H4.02878V10.1448C4.02878 9.58812 4.26317 9.36079 4.80524 9.36079H6.58506C7.07593 9.36079 7.27369 9.02398 7.27369 8.67967C7.27369 8.33536 7.06136 8.02062 6.59257 8.02062H4.02171V7.15631H6.55637H6.55593Z" fill="white"/><path d="M11.4501 8.23291V8.98024H10.0878C9.74351 8.98024 9.5899 9.14136 9.5899 9.47817V12.1007H8.81343V9.36119C8.81343 8.58473 9.09903 8.23335 9.86093 8.23335H11.4505L11.4501 8.23291Z" fill="white"/><path d="M14.5204 8.23291C15.5459 8.23291 16.1978 8.86282 16.1978 10.1668C16.1978 11.4708 15.5459 12.1007 14.5204 12.1007H13.7073C12.6744 12.1007 12.0299 11.4708 12.0299 10.1668C12.0299 8.86282 12.6744 8.23291 13.7073 8.23291H14.5204ZM13.7806 8.98024C13.1065 8.98024 12.8139 9.33206 12.8139 10.1668C12.8139 11.0015 13.107 11.3463 13.7806 11.3463H14.4472C15.1137 11.3463 15.4139 11.002 15.4139 10.1668C15.4139 9.33162 15.1137 8.98024 14.4472 8.98024H13.7806Z" fill="white"/><defs><linearGradient id="paint0_linear_1_856" x1="0" y1="10" x2="20.0001" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#0096C7"/><stop offset="1" stop-color="#023E8A"/></linearGradient></defs></svg>)
   const companyIcon = (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_865)"><path d="M3.75 6C2.25 6 1.5 6.75 1.5 8.25V14.25C1.5 15.75 2.25 16.5 3.75 16.5H9.75C8.25 16.5 7.5 15.75 7.5 14.25V6M3.75 6H7.5M3.75 6V4.5C3.75 3.675 4.425 3 5.25 3H7.5825C7.5225 3.225 7.5 3.4725 7.5 3.75V6M10.5 6V9.75M13.5 6V9.75M4.5 9.75V12.75M12.75 12.75H11.25C10.8375 12.75 10.5 13.0875 10.5 13.5V16.5H13.5V13.5C13.5 13.0875 13.1625 12.75 12.75 12.75Z" stroke="#434545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 14.25V3.75C7.5 2.25 8.25 1.5 9.75 1.5H14.25C15.75 1.5 16.5 2.25 16.5 3.75V14.25C16.5 15.75 15.75 16.5 14.25 16.5H9.75C8.25 16.5 7.5 15.75 7.5 14.25Z" stroke="#434545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_865"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>)
   const jobIcon = (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4425 16.5C15.4425 13.5975 12.555 11.25 9 11.25C5.445 11.25 2.5575 13.5975 2.5575 16.5M9 9C9.99456 9 10.9484 8.60491 11.6516 7.90165C12.3549 7.19839 12.75 6.24456 12.75 5.25C12.75 4.25544 12.3549 3.30161 11.6516 2.59835C10.9484 1.89509 9.99456 1.5 9 1.5C8.00543 1.5 7.05161 1.89509 6.34834 2.59835C5.64508 3.30161 5.25 4.25544 5.25 5.25C5.25 6.24456 5.64508 7.19839 6.34834 7.90165C7.05161 8.60491 8.00543 9 9 9Z" stroke="#434545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>)
   const calendarIcon = (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1.5V3.75M12 1.5V3.75M2.625 6.8175H15.375M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#434545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.99625 10.275H9.00376M6.2205 10.275H6.228M6.2205 12.525H6.228" stroke="#434545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>)
   const dotsIcon = (<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1C1.9 1 1 1.9 1 3C1 4.1 1.9 5 3 5C4.1 5 5 4.1 5 3C5 1.9 4.1 1 3 1ZM17 1C15.9 1 15 1.9 15 3C15 4.1 15.9 5 17 5C18.1 5 19 4.1 19 3C19 1.9 18.1 1 17 1ZM10 1C8.9 1 8 1.9 8 3C8 4.1 8.9 5 10 5C11.1 5 12 4.1 12 3C12 1.9 11.1 1 10 1Z" stroke="#5B5C5D" stroke-width="1.5"/></svg>)
   const trashIcon = (<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 4.98333C13.725 4.70833 10.9333 4.56666 8.15 4.56666C6.5 4.56666 4.85 4.65 3.2 4.81666L1.5 4.98333M6.08333 4.14166L6.26667 3.05C6.4 2.25833 6.5 1.66666 7.90833 1.66666H10.0917C11.5 1.66666 11.6083 2.29166 11.7333 3.05833L11.9167 4.14166M14.7083 7.61666L14.1667 16.0083C14.075 17.3167 14 18.3333 11.675 18.3333H6.325C4 18.3333 3.925 17.3167 3.83333 16.0083L3.29167 7.61666M7.60833 13.75H10.3833M6.91667 10.4167H11.0833" stroke="#FF3C2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>)

  return (
    <article key={i} className="item">
      <aside>
         <div className="image"></div>

         <section className="details">
            <b className="name">{data.name} {data.premium && premiumIcon}</b>
            
            <span className="text">
               {companyIcon}
               {data.company}
            </span>

            <span className="text">
               {jobIcon}
               {data.job}
            </span>

            <span className="text">
               {calendarIcon}
               {data.startDate}
            </span>
         </section>
      </aside>


      <section className="actions">
         <button type='button' onClick={null} className="button">
            <span className="text">Mesaj</span>
         </button>

         <div onClick={() => setShow(!show)} className="dots">
            {dotsIcon}

            {
               show && (
                  <div onClick={remove} className="delete">
                     {trashIcon}
                     Bağlantıyı Kaldır
                  </div>
               )
            }
         </div>
      </section>
    </article>
  )
}

export default Item