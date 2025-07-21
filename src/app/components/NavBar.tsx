import Image from 'next/image'
import { Button } from './ui/Button'

export const NavBar = () => {
  return (
    <div className="flex w-full overflow-x-hidden">
      <div className="flex py-1 px-2 justify-between m-3 w-full bg-white rounded-full">
        <Image src="./logo.svg" width="80" height="70" alt="Botao Adicionar" />

        <Button title="Adicionar" />
      </div>
    </div>
  )
} 