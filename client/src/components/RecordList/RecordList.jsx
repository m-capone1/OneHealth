import { useState } from "react"
import Record from "../Record/Record"
import './RecordList.scss'

const RecordList = ({ recordListData }) => {

    const [ allRecords, setAllRecords ] = useState(recordListData)

    const handleSearch = (event) => {
        const searchString = event.target.value
        
        const filteredRecords = recordListData.filter((record) => (
            record.recordName.toLowerCase().includes(searchString.toLowerCase()) ||
            record.date.includes(searchString) ||
            record.details.toLowerCase().includes(searchString.toLowerCase())
        ))
        setAllRecords(filteredRecords)
    }

    return(
        <>
        <section className="recordList">
            <h2 className="recordList__title">Record List</h2>
            <input className="recordList__search" type="text" placeholder="Search" onChange={handleSearch}/>
            <div className="recordList__table">
                <div className="recordList__row">
                    <div className="recordList__header">Record</div>
                    <div className="recordList__header">Date</div>
                    <div className="recordList__header">Details</div>
                </div>
                <div className="recordList__content">
                    {
                        allRecords.map((record)=>(
                            <Record record={record}
                            />
                        ))
                    }
                </div>    
            </div>
        </section>
            
        </>
    )
}
export default RecordList