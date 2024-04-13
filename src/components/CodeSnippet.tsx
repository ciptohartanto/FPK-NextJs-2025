import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeSnippetProps = {
  content: string
  lang: string | undefined
}

const customStyle = {
  lineHeight: '1.2',
  fontSize: '12px',
  borderRadius: '10px',
  padding: '10px 60px 10px 10px',
}

export default function CodeSnippet({ content, lang }: CodeSnippetProps) {
  return (
    <div>
      <SyntaxHighlighter
        language={lang}
        style={nightOwl}
        customStyle={customStyle}
        showLineNumbers
        wrapLongLines
      >
        {content}
      </SyntaxHighlighter>
    </div>
  )
}
