import { Link, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Provinsi from "./Provinsi";
import axios from 'axios';
import "./listOfProvinsi.scss";

const ListOfProvinsi = () => {
    const [dataCovidProvinsi, setDataCovidProvinsi] = useState(null);
    let match = useRouteMatch();
    // console.log(match);

    useEffect(() => {
        getDataCovidProvinsi()
    }, [])

    const getDataCovidProvinsi = async () => {
        const url = `https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more`

        try {
            const response = await axios.get(url)
            setDataCovidProvinsi(response.data)
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    // fungsi untuk konversi berbagai case penulisan ke kebab-case
    function toKebab(string) {
        return string
            // ...
            .replace(/[_\s]+/g, '-').toLowerCase();
    }

    return (
        <div>
            <div className="container pt-lg-5 pt-3">
                <h1 className='choose-list'>Silahkan pilih provinsi di bawah :</h1>
                <div className="row list-provinsi">
                        {dataCovidProvinsi &&
                            dataCovidProvinsi.map((itemKey, i) =>
                                <div className="list-provinsi-item" key={i}>
                                    <Link className="list-provinsi-item-name" to={`${match.url}/${toKebab(itemKey.provinsi)}`}>{itemKey.provinsi}</Link>
                                </div>
                            )
                        }
                </div>
            </div>

            <hr className='my-lg-5 my-3'/>

            <Route exact path={`${match.path}/:namaProvinsi`}>
                <Provinsi />
            </Route>
        </div>
    )
}

export default ListOfProvinsi
