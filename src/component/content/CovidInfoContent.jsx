import stayHomeImg from "../../assets/img/stay-at-home.svg";
import aboutUsImg from "../../assets/img/about-corona.svg";
import penularanPertamaImg from "../../assets/img/batuk.svg";
import penularanKeduaImg from "../../assets/img/bersentuhan.svg";
import penularanKetigaImg from "../../assets/img/objek.svg";
import gejalaCovidImg from "../../assets/img/gejala-covid.svg";
import "./covidInfoContent.scss";

const CovidInfoContent = () => {
    return (
        <div className='covid-info-content'>
            <div className="home-section container-fluid py-5">
                <div className="row">
                    <div className="home-section-left col-6 d-flex justify-content-center align-items-center">
                        <div className="home-section-left-content">
                            <p className="home-section-left-first-line">Lekas Sembuh Bumiku !</p>
                            <h1 className="home-section-left-main">Ayo Bantu <br />
                                Pulihkan Bumi, <br />
                                Mulai Dari Kita
                            </h1>
                            <p className="home-section-left-last-line">Tetap Di Rumah Aja Untuk Menghentikan Virus Corona. <br />
                                Bila Harus Meninggalkan Rumah, <strong>Jangan Lupa !</strong> <br />
                                Untuk Tetap Patuhi Protokol Kesehatan. <br /><br />
                                Jaga Kesehatan dan Jaga Dirimu.
                            </p>
                        </div>
                    </div>
                    <div className="home-section-right col-6">
                        <img className='home-section-img' src={stayHomeImg} alt="stay at home" />
                    </div>
                </div>
                <div className="row">
                    <div className="row still-home-section">
                        <div className="still-home-section-left col-6">
                            <img className='still-home-img' src={aboutUsImg} alt="about us" />
                        </div>
                        <div className="still-home-section-right d-flex justify-content-center align-items-center col-6">
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
            </div>

            <div className="penularan-section container py-5">
                <div className="covid-article-third text-center mb-5">
                    <div className="covid-article-header-third">Penularan</div>
                    <div className="covid-article-content-third">
                        Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                        A newly identified type
                    </div>
                </div> 
                <div className="penularan-content row text-center d-flex justify-content-center">
                    <div className="penularan-content-card px-4 py-5 col-3">
                        <img className="penularan-content-img" src={penularanPertamaImg} alt="penularan 1" />
                        <div className="covid-article-secondary">
                            <div className="covid-article-header-secondary">Penularan</div>
                            <div className="covid-article-content-secondary">
                                Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                                A newly identified type
                            </div>
                        </div> 
                    </div>
                    <div className="penularan-content-card px-4 py-5 col-3">
                        <img className="penularan-content-img" src={penularanKeduaImg} alt="penularan 2" />
                        <div className="covid-article-secondary">
                            <div className="covid-article-header-secondary">Penularan</div>
                            <div className="covid-article-content-secondary">
                                Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
                                A newly identified type
                            </div>
                        </div> 
                    </div>
                    <div className="penularan-content-card px-4 py-5 col-3">
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

            <div className="gejala-section container py-5">
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
        </div>
    )
}

export default CovidInfoContent
