import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Professor1',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
    {
      id: 2,
      nome: 'Professor2',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
    {
      id: 3,
      nome: 'Professor3',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
    {
      id: 4,
      nome: 'Professor4',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
    {
      id: 5,
      nome: 'Professor5',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
    {
      id: 6,
      nome: 'Professor6',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
    {
      id: 7,
      nome: 'Professor7',
      descricao: 'aula de programação',
      foto: 'https://github.com/jonkstro.png',
      valor_hora: 100,
    },
  ]

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}

export default Home
