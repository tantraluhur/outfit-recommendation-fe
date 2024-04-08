import {Navbar, Card, Dropdown} from "@/components"

import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className="m-4">
        <div className="flex">
          <div className="text-2xl font-normal">
            Clothes
          </div>
          <Dropdown />
        </div>
        <Card />
      </div>
    </div>
  );
}
