import { sendGTMEvent } from '@next/third-parties/google'

export default function gtmClickButton(buttonText: string) {
  sendGTMEvent({
    event: 'clicked_button',
    button_title: buttonText,
  })
}
