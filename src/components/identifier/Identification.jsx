import React from 'react'
import Header from '../dashboard/Header'
import Right from './Right'
import MainContent from './MainContent'

const Identification = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <MainContent />
    </div>
  )
}

export default Identification
