import DataCovid from './DataCovid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./covidInfoContent.scss";

const Provinsi = () => {
    const [dataCovidProvinsi, setDataCovidProvinsi] = useState(null);
    let params = useParams();

    useEffect(() => {
        const getDataCovidProvinsi = async () => {
            const url = `https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more`;

            try {
                const response = await axios.get(url);

                // Untuk nyimpan key nya
                const nameOfProv = toTitle(params.namaProvinsi).toUpperCase();

                // Ngambil data pake forEach biar langsung set data ke state
                response.data.forEach((data) => {
                if (data.provinsi === nameOfProv) {
                    setDataCovidProvinsi(data);
                }
                });
            } catch (err) {
                console.log(err);
            }
        };

        getDataCovidProvinsi();
    }, [params.namaProvinsi]);

    // fungsi konversi kebab-case ke Title Case
    function toTitle(string) {
        return string
        .split('-')
        .map((word) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        })
        .join(' ');
    }

    return (
        <div>
            <div className='covid-info-data container'>
                <div className='covid-info-data-header'>
                    <h1 className='covid-info-data-title'>{`Jumlah Kasus Covid-19 di ${toTitle(params.namaProvinsi)} Saat Ini`}</h1>
                    <h6>Tanggal : {dataCovidProvinsi && dataCovidProvinsi.last_date}</h6>
                </div>
                <div className="row">
                    <div className="col-3">
                        { dataCovidProvinsi && 
                            <div style={{ color: 'DodgerBlue' }}>
                                <DataCovid 
                                    dataCovidApp={dataCovidProvinsi.kasus} 
                                    keterangan="Positif"
                                />
                            </div>
                        }
                    </div>
                    <div className="col-3">
                        { dataCovidProvinsi && 
                            <div style={{ color: 'red' }}>
                                <DataCovid 
                                    dataCovidApp={dataCovidProvinsi.meninggal} 
                                    keterangan="Meninggal"
                                />
                            </div>
                        }
                    </div>
                    <div className="col-3">
                        { dataCovidProvinsi && 
                            <div style={{ color: 'green' }}>
                                <DataCovid 
                                    dataCovidApp={dataCovidProvinsi.sembuh} 
                                    keterangan="Sembuh"
                                />
                            </div>
                        }
                    </div>
                    <div className="col-3">
                        { dataCovidProvinsi && 
                            <div style={{ color: 'orange' }}>
                                <DataCovid 
                                    dataCovidApp={dataCovidProvinsi.dirawat} 
                                    keterangan="Dirawat"
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provinsi
