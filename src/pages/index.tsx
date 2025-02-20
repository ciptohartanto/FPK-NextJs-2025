import Cta from '@/sections/Cta'
import Jumbotron from '@/sections/Jumbotron'
import MitraKami from '@/sections/MitraKami'
import Prestasi from '@/sections/Prestasi'
import Quote from '@/sections/Quote'
import SiapaKami from '@/sections/SiapaKami'

export default function HomePage() {
  return (
    <>
      <Jumbotron />
      <SiapaKami
        title="Siapa Kami"
        content="Di Yayasan Flores Penuh Kasih, kita semua adalah insan-insan bertalenta Labuan Bajo yang bertekad untuk membuka peluang, mengasah diri, dan membuktikan keunikan yang ada dalam setiap kami.

Kami percaya bahwa sesuatu yang luar biasa akan terjadi ketika kami membulatkan hati untuk maju demi menggapai cita-cita kami."
        background="/dummy-wallpaper.jpg"
      />
      <Quote
        title="Karena masa depan sungguh ada, dan harapanmu tidak akan hilang"
        background="/dummy-wallpaper.jpg"
      />
      <Prestasi
        title="Prestasi"
        content="Kegigihan dan komitmen yang serius dari para mahasiswa-mahasiswi di Yayasan Flores Penuh Kasih membuahkan hasil yang tidak hanya berdampak pada diri mereka, tetapi juga di hotel tempat mereka bekerja."
      />
      <Cta
        title="Bergabung Bersama Kami"
        buttons={[
          {
            url: 'https://example.com',
            buttonText: 'Sebagai Murid',
            buttonDescription:
              'Tantangannya sangat sulit, tetapi dengan keyakinan yang teguh kita pasti bisa.',

            style: 'one',
          },
          {
            url: 'https://example.com',
            buttonText: 'Sebagai Murid',
            buttonDescription:
              'Tantangannya sangat sulit, tetapi dengan keyakinan yang teguh kita pasti bisa.',

            style: 'two',
          },
          {
            url: 'https://example.com',
            buttonText: 'Sebagai Murid',
            buttonDescription:
              'Tantangannya sangat sulit, tetapi dengan keyakinan yang teguh kita pasti bisa.',

            style: 'three',
          },
        ]}
      />
      <MitraKami
        title="Mitra Kami"
        mitras={[
          { namaMitra: 'Pavilla Labuan Bajo' },
          { namaMitra: 'Katamaran', background: '/dummy-wallpaper.jpg' },
          { namaMitra: 'Loccal', background: '/dummy-wallpaper.jpg' },
        ]}
      />
    </>
  )
}
