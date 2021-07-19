import "./dataCovid.scss";

const DataCovid = (props) => {
    return (
        <div className='data-covid'>
            <div className="data-covid-info">
                <h5 className='data-covid-desc'>{props.keterangan}</h5>
                <h3 className='data-covid-number'>{props.dataCovidApp}</h3>
            </div>
        </div>
    )
}

export default DataCovid
