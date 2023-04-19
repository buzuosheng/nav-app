import Card from './Card'
import { useState } from 'react'
import { data } from '../lib/sites'

const Main = () => {
  const [target, setTarget] = useState('erp')
  return (
    <main className="py-10 px-2 sm:p-10 md:pl-0 lg:px-10 min-h-screen flex flex-row justify-center items-start bg-[#f2f4f8]">
      <ul className="hidden md:block w-[120px] h-full mr-2 my-0 top-20 left-4 sticky list-none p-0">
        {data.map((cate) => (
          <li key={cate.cate}>
            <div className="flex flex-row items-center">
              <div
                className={
                  'hidden lg:block w-3 mr-2 border-b-2 border-solid border-zinc-700 duration-500' +
                  (target === cate.title
                    ? ''
                    : ' opacity-0 pointer-events-none')
                }
              ></div>
              <a className="text-black no-underline" href={`#${cate.title}`}>
                <div
                  className={
                    'p-1 w-auto font-normal rounded hover:text-white hover:bg-[#ff5a00]' +
                    (target === cate.title ? ' text-[#ff5a00] ' : '')
                  }
                  onClick={() => {
                    setTarget(cate.title)
                  }}
                >
                  {cate.cate}
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex-1 grid grid-cols-1 gap-4">
        {data.map((cate, i) => (
          <Card title={cate.title} key={i} sites={cate} />
        ))}
      </div>
    </main>
  )
}

export default Main
