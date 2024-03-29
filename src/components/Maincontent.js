import Hero from "./Hero";
import Cardjurusan from "./CardJjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from"./../assets/TKJ.jpg";
import jurusan2 from"./../assets/TSM.jpeg";
import jurusan3 from"./../assets/Akuntansi.jpg";
import kegiatan1 from"./../assets/Pramuka.jpg"
import kegiatan2 from"./../assets/Lomba-Menari.jpg"
import kegiatan3 from"./../assets/bersih-sekolah.jpeg"




const Maincontent = ()=> {
    return(
        <div>
            <Hero /> 
                <div className="Container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center my-5">
                            <h1>Jurusan Sekolah</h1>
                    </div>
                          <div className="col-lg-4 col-12">
                            <Cardjurusan image = {jurusan1} jurusan = "Teknik Komputer Jaringan" description = "Jurusan TKJ, singkatan dari Teknik Komputer dan Jaringan, adalah salah satu jurusan di bidang teknologi informasi yang ditawarkan di berbagai sekolah menengah kejuruan (SMK) atau lembaga pendidikan serupa"/>
                    </div>
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image = {jurusan2} jurusan = "Teknik Speda Motor" description = "Jurusan TSM adalah singkatan dari Teknik Sepeda Motor. Jurusan ini merupakan salah satu pilihan yang biasanya tersedia di berbagai sekolah menengah kejuruan (SMK) atau lembaga pendidikan serupa yang fokus pada bidang otomotif, khususnya perawatan dan perbaikan sepeda motor"/>
                    </div>
                        <div className="col-lg-4 col-12">
                            <Cardjurusan image = {jurusan3} jurusan = "Akuntansi" description = "Jurusan Akuntansi adalah salah satu jurusan yang umumnya tersedia di berbagai institusi pendidikan tinggi, baik itu perguruan tinggi negeri maupun swasta"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image = {kegiatan1} description="Kegiatan Pramuka adalah kegiatan ekstrakurikuler yang ditujukan untuk membentuk karakter, kepemimpinan, kemandirian, dan kecintaan pada alam dan lingkungan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image = {kegiatan2} description="Kegiatan lomba menari merupakan ajang di mana para peserta menampilkan kebolehan mereka dalam menari di hadapan juri dan penonton"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image = {kegiatan3} description="Kegiatan bersih-bersih sekolah adalah upaya untuk menjaga kebersihan dan keteraturan lingkungan sekolah. Ini adalah bagian penting dari upaya menjaga kesehatan dan keamanan siswa serta staf sekolah"/>
                    </div>
                </div>
            </div> 
        </div>           
    )
}

export default Maincontent;