import './Record.scss'

const Record = ({ record }) => {
    
    return(
        <>
            <div className="record">
                <div className="record__col">{record.recordName}</div>
                <div className="record__col">{record.date}</div>
                <div className="record__col">{record.details}</div>
            </div>
        </>
    )
}
export default Record