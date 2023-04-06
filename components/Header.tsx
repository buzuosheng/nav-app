import { useState } from 'react'

const list = [
  { title: '百度', url: 'https://www.baidu.com/s?tn=94725333_hao_pg&wd=' },
  { title: '谷歌', url: 'https://www.google.com/search?q=' },
  { title: 'JungleScout', url: 'https://keyword.junglescout.cn/k/us/' },
  { title: '卖家精灵', url: 'https://www.sellersprite.com/v3/keyword-miner/?q=' },
  { title: '英亚', url: 'https://www.amazon.co.uk/s?k=' },
  { title: '美亚', url: 'https://www.amazon.com/s?k=' },
  { title: '日亚', url: 'https://www.amazon.co.jp/s?k=' },
  { title: '德亚', url: 'https://www.amazon.de/s?k=' }
]

const search = (url: string) => {
  const newWindow = window.open('', '_blank')
  newWindow?.focus()
  const link = newWindow?.document.createElement('a')
  link?.setAttribute('href', url)
  link?.setAttribute('rel', 'noreferrer')
  link?.click()
}

const Header = () => {
  const [value, setValue] = useState('')
  const [target, setTarget] = useState('百度')

  return (
    <header className="pt-[25px] pb-[25px] w-full h-auto flex flex-row items-center justify-center text-white bg-sky-500 text-center">
      <div className="w-auto h-auto grid grid-flow-row">
        <div className="flex flex-row">
          {list.map((x) => (
            <div
              key={x.title}
              className={
                'w-auto h-9 mr-1 py-1 px-4 rounded-t hover:cursor-pointer hover:bg-white hover:text-sky-500 ' +
                (target === x.title ? ' bg-white text-sky-500' : '')
              }
              onClick={() => {
                setTarget(x.title)
              }}
            >
              {x.title}
            </div>
          ))}
        </div>
        <div>
          <input
            className="col-span-1 w-[700px] py-2 px-4 rounded-bl text-xl text-slate-600 outline-none"
            placeholder="请输入搜索内容"
            value={value}
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                const url = list.find((x) => x.title == target)?.url
                search(url + value)
              }
            }}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <button
            className="w-[100px] py-2 px-4 rounded-r text-xl bg-sky-300 hover:bg-sky-400 focus:outline-none"
            onClick={() => {
              const url = list.find((x) => x.title == target)?.url
              search(url + value)
            }}
          >
            搜索
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
