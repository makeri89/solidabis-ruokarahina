import { Container, Title } from '@mantine/core'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <Container>
      <Link href="/">
        <Title
          m={10}
          p={10}
          sx={{
            cursor: 'pointer',
            textAlign: 'center',
            background: '#12345655',
            borderRadius: '8px',
          }}
        >
          Ruokarahina
        </Title>
      </Link>
      {children}
    </Container>
  )
}

export default Page
