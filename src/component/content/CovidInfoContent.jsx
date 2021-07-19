import stayHomeImg from "../../assets/img/stay-at-home.svg";
import aboutUsImg from "../../assets/img/about-corona.svg";
import penularanPertamaImg from "../../assets/img/batuk.svg";
import penularanKeduaImg from "../../assets/img/bersentuhan.svg";
import penularanKetigaImg from "../../assets/img/objek.svg";
import gejalaCovidImg from "../../assets/img/gejala-covid.svg";
import one from "../../assets/img/one.svg";
import two from "../../assets/img/two.svg";
import three from "../../assets/img/three.svg";
import four from "../../assets/img/four.svg";
import pakaiMasker from "../../assets/img/pake-masker.svg";
import cuciTangan from "../../assets/img/cuci-tangan.svg";
import gunakanLap from "../../assets/img/gunakan-lap.svg";
import jagaJarak from "../../assets/img/jaga-jarak.svg";
import "./covidInfoContent.scss";
import DataCovid from "./DataCovid";
import { useState, useEffect } from 'react';
import axios from 'axios';

const CovidInfoContent = () => {
    const [ dataCovid, setDataCovid ] = useState(null);

    useEffect(() => {
        getDataCovid()
    }, [])

    const getDataCovid = async () => {
        const url = `https://apicovid19indonesia-v2.vercel.app/api/indonesia/more`

        try {
            const response = await axios.get(url)
            setDataCovid( response.data )
            // console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='covid-info-content'>
            <div className="home-section container-fluid pt-5">
                <div className="row home-section-first-row">
                    <div className="home-section-left col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="home-section-left-content">
                            <p className="home-section-left-first-line">Lekas Sembuh Bumiku !</p>
                            <h1 className="home-section-left-main">Ayo Bantu <br />
                                Pulihkan Bumi, <br />
                                Mulai Dari Kita
                            </h1>
                            <p className="home-section-left-last-line">Tetap Di Rumah Aja Untuk Menghentikan Virus Corona.
                                Bila Harus Meninggalkan Rumah, <strong>Jangan Lupa !</strong>
                                 Untuk Tetap Patuhi Protokol Kesehatan. <br /><br />
                                Jaga Kesehatan dan Jaga Dirimu.
                            </p>
                        </div>
                    </div>
                    <div className="home-section-right col-lg-6 col-md-6 col-sm-6 col-12">
                        <img className='home-section-img' src={stayHomeImg} alt="stay at home" />
                    </div>
                </div>
                <div className="row home-section-second-row">
                    <div className="row still-home-section">
                        <div className="still-home-section-left col-lg-6 col-md-6 col-sm-6 col-12">
                            <img className='still-home-img' src={aboutUsImg} alt="about us" />
                        </div>
                        <div className="still-home-section-right d-flex justify-content-center align-items-center col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="covid-article">
                                <div className="covid-article-header">Coronavirus</div>
                                <div className="covid-article-content">
                                    COVID-19 (coronavirus disease 2019) adalah penyakit yang disebabkan oleh jenis coronavirus baru yaitu Sars-CoV-2,
                                    yang dilaporkan pertama kali di Wuhan Tiongkok pada tanggal 31 Desember 2019. 
                                    Sejak itu wabah/pandemi ini mulai merambah ke berbagai negara
                                    termasuk salah satunya adalah Indonesia. Indonesia mengonfirmasi 
                                    kasus pertama infeksi virus corona penyebab Covid-19 pada awal Maret 
                                    2020. Sejak itu, berbagai upaya penanggulangan dilakukan pemerintah 
                                    untuk meredam dampak dari pandemi Covid-19 di berbagai sektor.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="covid-info-data container pt-2">
                    <div className='covid-info-data-header'>
                        <h1 className='covid-info-data-title'>Jumlah Kasus Covid-19 di Indonesia Saat Ini</h1>
                        <h6 className='covid-info-data-tgl'>Tanggal : {dataCovid && dataCovid.penambahan.tanggal}</h6>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            { dataCovid && 
                                <div style={{ color: 'DodgerBlue' }}>
                                    <DataCovid 
                                        dataCovidApp={dataCovid.total.positif} 
                                        keterangan="Positif"
                                    />
                                </div>
                            }
                        </div>
                        <div className="col-lg-3 col-12">
                            { dataCovid && 
                                <div style={{ color: 'red' }}>
                                    <DataCovid 
                                        dataCovidApp={dataCovid.total.meninggal} 
                                        keterangan="Meninggal"
                                    />
                                </div>
                            }
                        </div>
                        <div className="col-lg-3 col-12">
                            { dataCovid && 
                                <div style={{ color: 'green' }}>
                                    <DataCovid 
                                        dataCovidApp={dataCovid.total.sembuh} 
                                        keterangan="Sembuh"
                                    />
                                </div>
                            }
                        </div>
                        <div className="col-lg-3 col-12">
                            { dataCovid && 
                                <div style={{ color: 'orange' }}>
                                    <DataCovid 
                                        dataCovidApp={dataCovid.total.dirawat} 
                                        keterangan="Dirawat"
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="penularan-section container py-lg-5 py-3">
                <div className="covid-article-third text-center mb-5">
                    <div className="covid-article-header-third">Penularan</div>
                    <div className="covid-article-content-third">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                        A newly identified type
                    </div>
                </div> 
                <div className="penularan-content row text-center d-flex justify-content-center">
                    <div className="penularan-content-card px-4 py-5 col-lg-3 col-md-3 col-sm-3 col-12">
                        <img className="penularan-content-img" src={penularanPertamaImg} alt="penularan 1" />
                        <div className="covid-article-secondary">
                            <div className="covid-article-header-secondary">Penularan</div>
                            <div className="covid-article-content-secondary">
                                Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                                A newly identified type
                            </div>
                        </div> 
                    </div>
                    <div className="penularan-content-card px-4 py-5 col-lg-3 col-md-3 col-sm-3 col-12">
                        <img className="penularan-content-img" src={penularanKeduaImg} alt="penularan 2" />
                        <div className="covid-article-secondary">
                            <div className="covid-article-header-secondary">Penularan</div>
                            <div className="covid-article-content-secondary">
                                Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                                A newly identified type
                            </div>
                        </div> 
                    </div>
                    <div className="penularan-content-card px-4 py-5 col-lg-3 col-md-3 col-sm-3 col-12">
                        <img className="penularan-content-img" src={penularanKetigaImg} alt="penularan 2" />
                        <div className="covid-article-secondary">
                            <div className="covid-article-header-secondary">Penularan</div>
                            <div className="covid-article-content-secondary">
                                Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                                A newly identified type
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="gejala-section container py-lg-5 py-3">
                <div className="covid-article-third text-center mb-5">
                    <div className="covid-article-header-third">Gejala</div>
                    <div className="covid-article-content-third">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                        A newly identified type
                    </div>
                </div> 
                <div className="gejala-content text-center">
                    <img className="gejala-content-img" src={gejalaCovidImg} alt="gejala covid" />
                </div>
            </div>

            <div className="pencegahan-section container py-lg-5 py-3">
                <div className="covid-article-third text-center mb-5">
                    <div className="covid-article-header-third">Pencegahan</div>
                    <div className="covid-article-content-third">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                        A newly identified type
                    </div>
                </div> 
                <div className="pencegahan-section-content">
                    <div className="row py-lg-5 py-2 pencegahan-section-reverse">
                        <div className="pencegahan-section-item d-flex justify-content-center align-items-center col-lg-6 col-12">
                            <div className="covid-article-secondary ">
                                <div className="pencegahan-section-item-header d-flex vertical-align-middle">
                                    <img className="pencegahan-section-item-header-number" src={one} alt="first step" /> 
                                    <span className='covid-article-header-secondary pencegahan-section-item-header-title'>Menggunakan Masker</span>
                                </div>
                                <p className='covid-article-content-secondary pencegahan-section-item-content'>
                                    Continually seize impactful vortals rather than future-proof supply chains. 
                                    Uniquely exploit emerging niches via fully tested meta-services. 
                                    Competently pursue standards compliant leadership skills vis-a-vis 
                                    pandemic "outside the box" thinking. Objectively 
                                </p>
                            </div>
                        </div>
                        <div className="pencegahan-section-img text-center col-lg-6 col-12">
                            <img className="pencegahan-section-img-item" src={pakaiMasker} alt="pakai masker icon" />
                        </div>
                    </div>
                    <div className="row py-lg-5 py-2">
                        <div className="pencegahan-section-img text-center col-lg-6 col-12">
                            <img className="pencegahan-section-img-item" src={cuciTangan} alt="cuci tangan icon" />
                        </div>
                        <div className="pencegahan-section-item d-flex justify-content-center align-items-center col-lg-6 col-12">
                            <div className="covid-article-secondary ">
                                <div className="pencegahan-section-item-header d-flex vertical-align-middle">
                                    <img className="pencegahan-section-item-header-number" src={two} alt="second step" /> 
                                    <span className='covid-article-header-secondary pencegahan-section-item-header-title'>Menggunakan Masker</span>
                                </div>
                                <p className='covid-article-content-secondary pencegahan-section-item-content'>
                                    Continually seize impactful vortals rather than future-proof supply chains. 
                                    Uniquely exploit emerging niches via fully tested meta-services. 
                                    Competently pursue standards compliant leadership skills vis-a-vis 
                                    pandemic "outside the box" thinking. Objectively 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row py-lg-5 py-2 pencegahan-section-reverse">
                        <div className="pencegahan-section-item d-flex justify-content-center align-items-center col-lg-6 col-12">
                            <div className="covid-article-secondary ">
                                <div className="pencegahan-section-item-header d-flex vertical-align-middle">
                                    <img className="pencegahan-section-item-header-number" src={three} alt="third step" /> 
                                    <span className='covid-article-header-secondary pencegahan-section-item-header-title'>Menggunakan Masker</span>
                                </div>
                                <p className='covid-article-content-secondary pencegahan-section-item-content'>
                                    Continually seize impactful vortals rather than future-proof supply chains. 
                                    Uniquely exploit emerging niches via fully tested meta-services. 
                                    Competently pursue standards compliant leadership skills vis-a-vis 
                                    pandemic "outside the box" thinking. Objectively 
                                </p>
                            </div>
                        </div>
                        <div className="pencegahan-section-img text-center col-lg-6 col-12">
                            <img className="pencegahan-section-img-item" src={gunakanLap} alt="gunakan lap icon" />
                        </div>
                    </div>
                    <div className="row py-lg-5 py-2">
                        <div className="pencegahan-section-img text-center col-lg-6 col-12">
                            <img className="pencegahan-section-img-item" src={jagaJarak} alt="pakai masker icon" />
                        </div>
                        <div className="pencegahan-section-item d-flex justify-content-center align-items-center col-lg-6 col-12">
                            <div className="covid-article-secondary ">
                                <div className="pencegahan-section-item-header d-flex vertical-align-middle">
                                    <img className="pencegahan-section-item-header-number" src={four} alt="fourth step" /> 
                                    <span className='covid-article-header-secondary pencegahan-section-item-header-title'>Menggunakan Masker</span>
                                </div>
                                <p className='covid-article-content-secondary pencegahan-section-item-content'>
                                    Continually seize impactful vortals rather than future-proof supply chains. 
                                    Uniquely exploit emerging niches via fully tested meta-services. 
                                    Competently pursue standards compliant leadership skills vis-a-vis 
                                    pandemic "outside the box" thinking. Objectively 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidInfoContent
