import React from 'react'

export default function SearchArea({ searchTerm, setSearchTerm }) {
  return (
    <>
        <div className='flex flex-col gap-2 sm:items-center sm:justify-center'>
            <h1 className='font-golos text-black font-bold text-3xl sm:text-4xl'>Faça sua pesquisa!</h1>
            <p className='font-inter text-grayText text-[12px] sm:text-center sm:text-[16px]'>Digite seu nome e visualize suas informações na loja! Caso ainda não tenha registro na loja, vá até a página de registro e cadastre-se. Se precisar de alguma modificação em suas informações vá até a página de Edição e faça sua mudança.</p>
        </div>
        <form>
            <input 
                className='w-full p-2 pl-4 rounded-[10px] bg-grayPrimary' 
                type="text"
                placeholder="Pesquisar por nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
        </form>
    </>
  )
}
