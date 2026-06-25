import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisynav from './Components/Daisynav/daisynav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json')
  .then(res => res.json())
const marksPromise = axios.get('marksData.json')
function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
      </header>
      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <Suspense>
        <ResultChart></ResultChart>
      </Suspense>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
      </main>
    </>
  )
}

export default App
