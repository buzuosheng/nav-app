import Card from './Card'
import { useState } from 'react'
import { data } from '../lib/sites'

const Main = () => {
  const [id, setId] = useState(0)
  return (
    <main className="p-10 min-h-screen flex flex-row bg-[#f2f4f8]">
      <ul className="w-auto h-full mr-4 top-20 left-4 sticky text-center list-none p-0">
        <li>
          <div className="flex flex-row items-center">
            <div
              className={
                'w-3 mr-2 border-b-2 border-solid border-zinc-700 ' +
                'opacity-0 pointer-events-none'
              }
            ></div>
            <div
              className="p-1 w-20 rounded hover:bg-[#ff5a00] hover:cursor-pointer"
              onClick={() => {}}
            >
              常用工具
            </div>
          </div>
        </li>
        <li>常用工具</li>
        <li>sidebar</li>
      </ul>
      <div className="w-full grid grid-cols-1 gap-4">
        {data.map((cate) => (
          <Card sites={cate} />
        ))}
      </div>
    </main>
  )
}

export default Main
