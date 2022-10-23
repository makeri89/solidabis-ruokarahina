import { Group, Title } from '@mantine/core'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <Group sx={{ flexDirection: 'column', gap: '10px' }}>
      <Link href="/">
        <Title
          mt={10}
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
    </Group>
  )
}

export default Page
