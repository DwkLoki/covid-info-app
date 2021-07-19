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
            {/* {dataCovidProvinsi &&
                dataCovidProvinsi.map((itemKey, i) =>
                    <ul key={i}>   
                        <li className="list-provinsi">
                            <Link className="list-provinsi-item" to={`${match.url}/${toKebab(itemKey.provinsi)}`}>{itemKey.provinsi}</Link>
                        </li>
                    </ul>
                )
            } */}

            <div className="container pt-5">
                <div className="row list-provinsi">
                        {dataCovidProvinsi &&
                            dataCovidProvinsi.map((itemKey) =>
                                <div className="list-provinsi-item">
                                    <Link className="list-provinsi-item-name" to={`${match.url}/${toKebab(itemKey.provinsi)}`}>{itemKey.provinsi}</Link>
                                </div>
                            )
                        }
                </div>
            </div>

            <hr className='my-5'/>

            <Route exact path={`${match.path}/:namaProvinsi`}>
                <Provinsi />
            </Route>
        </div>
    )
}

export default ListOfProvinsi
