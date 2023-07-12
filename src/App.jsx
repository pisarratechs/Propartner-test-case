import React, { useState } from 'react'
import Header from './components/Header'
import Links from './components/Links'
import Sidebar from './components/Sidebar'
import Item from './components/Item'
import Navbar from './components/Navbar'

const App = () => {

  const [data, setData] = useState([
    {
      name: "Leslie Alexander",
      company: "Good Burger",
      job: "Nursing Assistant",
      startDate: "07.05.2023",
      premium: true
    },
    {
      name: "Cameron Williamson",
      company: "Good Burger",
      job: "Marketing Coordinator",
      startDate: "07.05.2023",
      premium: true
    },
    {
      name: "Ronald Richards",
      company: "Good Burger",
      job: "Marketing Coordinator",
      startDate: "07.05.2023",
      premium: false
    },
    {
      name: "Wade Warren",
      company: "Good Burger",
      job: "Dog Trainer",
      startDate: "07.05.2023",
      premium: true
    },
    {
      name: "Jane Cooper",
      company: "Good Burger",
      job: "Web Designer",
      startDate: "07.05.2023",
      premium: false
    },
    {
      name: "Jacob Jones",
      company: "Good Burger",
      job: "President of Sales",
      startDate: "07.05.2023",
      premium: false
    },
    {
      name: "Esther Howard",
      company: "Good Burger",
      job: "Medical Assistant",
      startDate: "07.05.2023",
      premium: true
    },
  ])
  const [search, setSearch] = useState("")

  const searchIcon = (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3333 18.3333L16.6667 16.6667M9.58334 17.5C10.623 17.5 11.6524 17.2952 12.6129 16.8974C13.5734 16.4995 14.4461 15.9164 15.1813 15.1813C15.9164 14.4461 16.4995 13.5734 16.8974 12.6129C17.2952 11.6524 17.5 10.623 17.5 9.58332C17.5 8.54369 17.2952 7.51424 16.8974 6.55375C16.4995 5.59325 15.9164 4.72052 15.1813 3.98539C14.4461 3.25026 13.5734 2.66713 12.6129 2.26928C11.6524 1.87143 10.623 1.66666 9.58334 1.66666C7.48371 1.66666 5.47007 2.50073 3.98541 3.98539C2.50075 5.47006 1.66667 7.48369 1.66667 9.58332C1.66667 11.683 2.50075 13.6966 3.98541 15.1813C5.47007 16.6659 7.48371 17.5 9.58334 17.5Z" stroke="#5B5C5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>)


  const filteredData = data.filter(x => {
    if(search == ""){
      return x
    }

    if(x.name.toLowerCase().includes(search.toLowerCase())){
      return x
    }
  })

  const removeHandle = item => {
    if(window.confirm("Bu bağlantıyı kaldırmak istediğinizden emin misiniz ?")){
      const newData = data.filter(x => x !== item)

      setData(newData)
    }
  }

  const Divider = () => <div style={{width:'100%', backgroundColor: "#f1f1f1", height:2}} ></div>



  return (
    <main className="container">
      <Header />
      <article className="content">
        {window.innerWidth > 600 && <Sidebar />}

        <section className="connections">
          <div className="header">
            <h3 className="text">Bağlantılarım</h3>
            <span className="count">321</span>
          </div>

          <div className="input-container">
            {searchIcon}
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input"
              placeholder='Bağlantılarda ara'
            />
          </div>

          <div className="list">
            {
              filteredData.length > 0 ?
                filteredData.map((item, index) => {
                  return(
                    <>
                      <Item i={index} data={item} remove={() => removeHandle(item)} />
                      <Divider />
                    </>
                  )
                }) :
                <span className="text">Hiçbir sonuç bulunamadı...</span>
            }
          </div>
        </section>

        {window.innerWidth > 600 && <Links />}
      </article>
        {window.innerWidth < 600 && <Navbar />}
    </main>
  )
}

export default App