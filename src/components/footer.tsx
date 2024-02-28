import Link from 'next/link'
import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <span>Siga nas Redes</span>
        <Link href="https://www.linkedin.com/in/adolpho-cavalcanti-nascimento">
          Linkedin
        </Link>
        <Link href="https://github.com/adolpho-cavalcanti">Github</Link>
      </footer>
    </>
  )
}
