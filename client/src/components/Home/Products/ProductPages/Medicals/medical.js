import React from 'react'
import MedicalBanner from './MedicsBanner/MedicalBanner'
import MedicalContent from './MedicsContent/MedicalContent'
import MedicalFooter from './MedicsFooter/MedicalFooter'

const Medical = () => {
    return (
        <div className="medical">
            <MedicalBanner/>
            <MedicalContent/>
            <MedicalFooter/>
        </div>
    )
}

export default Medical
