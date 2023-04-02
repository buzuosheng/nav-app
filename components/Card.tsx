import Image from 'next/image'
import Link from 'next/link'
import DivisionLine from './DivisionLine'

const Card = ({ sites }: any) => {
  return (
    <div className="flex flex-col w-full h-auto p-2 font-mono no-underline bg-white rounded-xl">
      <div className=" h-[42px] flex flex-row justify-between items-center px-5 text-lg font-bold">
        {sites.cate}
      </div>
      <DivisionLine />
      <ul className="px-2 my-0 grid grid-flow-row grid-cols-6">
        {sites.sites.map((site: any) => (
          <li className="h-12 list-none cursor-pointer rounded-md hover:bg-sky-50">
            <a
              className="h-full w-full flex flex-row items-center no-underline"
              href="https://www.taobao.com"
              target="_blank"
            >
              <Image
                className="mr-1"
                src="/favicon.ico"
                width={30}
                height={30}
                alt="淘宝"
              />
              <p className="text-lg text-black hover:text-orange-600">淘宝</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
