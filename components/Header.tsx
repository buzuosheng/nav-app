import { useState } from "react"

const Header = () => {
  const [ value, setValue ] = useState('知乎')
  return (
    <header className="pt-[25px] pb-[15px] w-full text-white bg-slate-600 text-center">
      <div className="w-full h-auto pt-6 pb-4">
        <div className="h-10" onClick={() => {}}>知乎</div>
      </div>
    </header>
  )
}

export default Header
