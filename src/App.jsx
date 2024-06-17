import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { DoctorInfoSection } from './components/DoctorInfoSection'
import Loader from './components/Loader'
import SectionOne from './components/SectionOne'
import Map from './components/Map'
import Footer from './components/Footer'
import ServicesCard from './components/ServiceCard'
function App() {
  const [sectionOneLoaded, setSectionOneLoaded] = useState(false);
  const [doctorInfoLoaded, setDoctorInfoLoaded] = useState(false);
  const allLoaded = sectionOneLoaded && doctorInfoLoaded;



  return (
    <>
     {!allLoaded && <Loader />}
    <Navbar/>
    <SectionOne onLoad = {()=> setSectionOneLoaded(true)}/>
    <DoctorInfoSection onLoad = {()=> setDoctorInfoLoaded(true)}/>
      <ServicesCard/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
