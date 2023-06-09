import Image from 'next/image'
import DivisionLine from './DivisionLine'

const Card = ({ title, sites }: any) => {
  return (
    <div
      id={title}
      className="flex flex-col w-full h-auto p-2 font-sans no-underline bg-white rounded-xl"
    >
      <div className=" h-[42px] flex flex-row justify-between items-center px-5 text-lg font-bold">
        {sites.cate}
      </div>
      <DivisionLine />
      <ul className="px-2 my-0 grid grid-flow-row lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
        {sites.sites.map((site: any) => (
          <li
            key={site.site}
            className="h-12 list-none cursor-pointer rounded-md hover:bg-sky-50"
          >
            <a
              className="h-full w-full flex flex-row items-center no-underline text-black hover:text-orange-600"
              href={site.url}
              target="_blank"
            >
              <Image
                className="mr-4"
                src={site.logo || '/logos/website.svg'}
                width={30}
                height={30}
                alt={site.site}
              />
              <p className="text-lg">{site.site}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
