import './RecordDetailsPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bloodwork from '../../assets/images/bloodwork3.jpg';
import arrow from '../../assets/icons/down-arrow.png';
import stars from '../../assets/icons/stars.png';

export default function RecordDetailsPage() {
    const [showDetails, setShowDetails] = useState(false);
    const [content, setContent]= useState("");
    const [isCotnent, setIsContent] = useState(false);

    const openAIUrl = "http://localhost:8080/generate-content";
    let prompt = "Explain to an average person what a cholesterol result of 145 means for someone's health. Please only give a 3-4 sentence answer."

    useEffect(()=> {
        const fetchContent = async() => {
            const response = await axios.post(openAIUrl, {
                prompt: prompt
            });

            if(response){
                setContent(response.data);
            }
        }
        fetchContent();
    }, [])

    const handleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleGenerate = () => {
        setIsContent(!isCotnent);
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
                        <div>Patient id: 0956372</div>
                        <div>Test Name: Full Panel Bloodwork</div>
                        <div>Collection Date: 2024/08/01</div>
                        <div>Doctor's Name: Dr. Jane Doe</div>
                        <div>Lab Name: Life Labs</div>
                    </div>
                ) : (
                    <div className='details__empty'></div>
                )}
            </div>
            <div className='details__layout'>
                {isCotnent ? (
                        <div className='details__ai-content'>
                            <div>
                            <div className='details__insights'>
                                Ai Insights
                                <img src={stars} alt="ai-stars" className='details__ai-img'></img>
                            </div>
                            <div className='details__ai-response'>
                                {content}
                            </div>
                            </div>
                        </div>
                    ) : (
                        <div className='details__empty'></div>
                    )}
                <img 
                    src={bloodwork}
                    onClick={handleGenerate} 
                    className='details__img' 
                    alt="bloodwork"
                />
                <hr className='details__hr'></hr>
                <div className='details__buttons'>
                    <button className='details__button'>Discuss these Results</button>
                    <button className='details__button'>Download Documents</button>
                </div>
            </div>
        </section>
    );
}