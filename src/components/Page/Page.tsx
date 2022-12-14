import { colors } from '@lib/colors'
import { Group, Title } from '@mantine/core'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <Group sx={{ flexDirection: 'column', gap: '10px' }}>
      <Link href="/">
        <a style={{ textDecoration: 'none' }}>
          <Title
            p={10}
            sx={{
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              background: colors.green,
              borderRadius: '0 0 8px 8px',
            }}
          >
            Ruokarähinä
          </Title>
        </a>
      </Link>
      {children}
    </Group>
  )
}

export default Page
