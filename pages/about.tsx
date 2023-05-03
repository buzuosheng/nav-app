import React from 'react'
import { Helmet } from 'react-helmet'
import Image from 'next/image'
import DivisionLine from '../components/DivisionLine'

export default function About() {
  return (
    <div className="h-[100vh] w-full p-4 flex justify-center items-center text-center bg-[#f2f4f8]">
      <Helmet
        title="About | Hello next.js!"
        meta={[{ property: 'og:title', content: 'About' }]}
      />
      <div
        className="flex flex-col w-auto h-auto p-4 font-sans no-underline bg-white rounded-xl"
      >
        <div className="mt-10 flex flex-row justify-center items-center text-lg font-bold">
          <h1>联系我们</h1>
        </div>
        <DivisionLine />
        <div className="mt-10 flex flex-row justify-start items-center text-lg font-bold">
          <label>方式一：</label>
          <div className="flex-grow text-center">手机号 18742059738</div>
        </div>
        <div className="mt-4 flex flex-row justify-start items-center text-lg font-bold">
          <label>方式二：</label>
          <Image width={230} height={230} src="/wechat.jpeg" alt="微信号 l18742059738" />
        </div>
      </div>
    </div>
  )
}
