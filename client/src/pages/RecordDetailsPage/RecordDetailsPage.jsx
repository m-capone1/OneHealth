import './RecordDetailsPage.scss';
import { useState } from 'react';
import bloodwork from '../../assets/images/bloodwork.png';
import arrow from '../../assets/icons/down-arrow.png'
export default function () {

    const [showDetails, setShowDetails]= useState(false);

    const handleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <section className='details'>
            <div className='details__heading'>
                <h1 className='details__headers details__title'>Record: Full Panel Bloodwork</h1>
                <div className='details__more'>
                    <div>More details</div>
                    <img 
                        onClick={handleDetails} 
                        className= "details__arrow" 
                        src={arrow} alt="arrow"
                    ></img>
                </div>
            </div>
            {showDetails && (
                    <div className='details__content'>
                        <p>Details about the bloodwork go here...</p>
                    </div>
                )}
            <img 
                src={bloodwork} 
                className='details__img' 
                alt="bloodwork">
            </img>
        </section>
    )
}