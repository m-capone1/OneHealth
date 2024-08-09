import './RecordDetailsPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bloodwork from '../../assets/images/bloodwork3.jpg';
import arrow from '../../assets/icons/down-arrow.png';

export default function RecordDetailsPage() {
    const [showDetails, setShowDetails] = useState(false);
    const [content, setContent]= useState({});

    const openAIUrl = "";
    const date = '2024/08/01';
    let prompt = "Explain what "

    useEffect(()=> {
        const fetchContent = async() => {
            const response = axios.post(openAIUrl, {
                prompt: {}
            })
        }

    }, [])

    const handleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleGenerate = () => {

    }

    return (
        <section className='details'>
            <div className='details__heading'>
                <h1 className='details__headers details__title'>Record: Full Panel Bloodwork</h1>
                <div className='details__dropdown'>
                    <div className='details__more'>More details</div>
                    <img 
                        onClick={handleDetails} 
                        className="details__arrow" 
                        src={arrow} 
                        alt="arrow"
                    />
                </div>
            </div>
            <div className='details__content-wrapper'>
                {showDetails ? (
                    <div className='details__content'>
                        <div>Test Name: {date}</div>
                        <div>Collection Date: {date}</div>
                        <div>Test Results: {date}</div>
                        <div>Lab Name: {date}</div>
                    </div>
                ) : (
                    <div className='details__empty'></div>
                )}
            </div>
            <div className='details__layout'>
                <img 
                    src={bloodwork} 
                    className='details__img' 
                    alt="bloodwork"
                />
            </div>
        </section>
    );
}