import IconPhone from '@/assets/icons/sns-phone.svg'
import Album from '@/components/Album'
import Bullet from '@/components/Bullet'
import ButtonHollow from '@/components/ButtonHollow'
import ButtonHollowRounded from '@/components/ButtonHollowRounded'
import Popup from '@/components/Popup'
import Sns from '@/components/Sns'
import Timeline from '@/components/Timeline'
import TitleWithPipe from '@/components/TitleWithPipe'
import YouTubeVid from '@/components/YouTubeVid'
import Jumbotron from '@/sections/Jumbotron'
import Prestasi from '@/sections/Prestasi'
import Quote from '@/sections/Quote'
import SiapaKami from '@/sections/SiapaKami'

export default function HomePage() {
  return (
    <>
      <TitleWithPipe titleText="Hello, World!" style="onLightBackground" />
      <ButtonHollow
        style="one"
        buttonText="Button Text"
        buttonDescription="this is description"
      />
      <Sns svgLogo={<IconPhone />} svgText="telp" />
      <Bullet isActive={false} />
      <Bullet isActive={true} />
      <br />
      <Timeline
        title="This is the title"
        description="Content of this Timeline"
      />
      <div style={{ backgroundColor: 'pink' }}>
        <ButtonHollowRounded buttonText="Button Text" />
      </div>

      <YouTubeVid
        videoUrl="https://www.youtube.com/watch?v=123"
        thumbnailUrl="/dummy-thumbnail.jpg"
        title="Test"
      />
      <Album />
      <Popup
        popupTitle="Bergabung Sebagai Murid"
        isWithButtons
        contentBodyType="60-40"
        content={[<div key={1}>xxx</div>, <span key={2}>aaaa</span>]}
      />

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
    </>
  )
}
