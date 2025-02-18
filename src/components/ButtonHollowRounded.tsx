type ButtonHollowRoundedProps = {
  buttonText: string
}

const CSS_CLASS_BASE = {
  self: 'buttonHollowRounded',
  typography: 'typography-title-small',
}

export default function ButtonHollowRounded({
  buttonText,
}: ButtonHollowRoundedProps) {
  return (
    <div className={CSS_CLASS_BASE.self}>
      <h3 className={CSS_CLASS_BASE.typography}>{buttonText}</h3>
    </div>
  )
}
