import ButtonHollow from '@/components/ButtonHollow'
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
    </>
  )
}
