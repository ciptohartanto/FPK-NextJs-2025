import IconPhone from '@/assets/icons/sns-phone.svg'
import Album from '@/components/Album'
import Bullet from '@/components/Bullet'
import ButtonHollow from '@/components/ButtonHollow'
import ButtonHollowRounded from '@/components/ButtonHollowRounded'
import Sns from '@/components/Sns'
import Timeline from '@/components/Timeline'
import TitleWithPipe from '@/components/TitleWithPipe'
import YouTubeVid from '@/components/YouTubeVid'

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
    </>
  )
}
