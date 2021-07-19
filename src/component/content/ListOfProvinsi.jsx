import { Link, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Provinsi from "./Provinsi";
import axios from 'axios';

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
        <div className="container">
            <nav>
                {dataCovidProvinsi &&
                    dataCovidProvinsi.map((itemKey, i) =>
                        <ul key={i}>
                            <li>
                                <Link to={`${match.url}/${toKebab(itemKey.provinsi)}`}>{itemKey.provinsi}</Link>
                            </li>
                        </ul>
                    )
                }
            </nav>
            <Route exact path={`${match.path}/:namaProvinsi`}>
                <Provinsi />
            </Route>
        </div>
    )
}

export default ListOfProvinsi
