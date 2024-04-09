import {Navbar, HomeSection} from "@/components"

import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className="m-10">
        <HomeSection />
      </div>
    </div>
  );
}
