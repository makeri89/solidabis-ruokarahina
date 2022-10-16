import { Container, Title } from '@mantine/core'

interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <Container>
      <Title>Ruokarahina</Title>
      {children}
    </Container>
  )
}

export default Page
