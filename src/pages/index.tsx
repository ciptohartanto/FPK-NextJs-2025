import IconPhone from '@/assets/icons/sns-phone.svg'
import ButtonHollow from '@/components/ButtonHollow'
import Sns from '@/components/Sns'
import TitleWithPipe from '@/components/TitleWithPipe'

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
    </>
  )
}
