type ButtonHollowRoundedProps = {
  buttonText: string
}

const CSS_BASE_CLASS = {
  self: 'buttonHollowRounded',
  typography: 'typography-title-small',
}

export default function ButtonHollowRounded({
  buttonText,
}: ButtonHollowRoundedProps) {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <h3 className={CSS_BASE_CLASS.typography}>{buttonText}</h3>
    </div>
  )
}
