import Image from 'next/image';
import { Inter } from 'next/font/google'
import { Button, Link } from '@mui/material';
import { Navbar } from '@/components/layouts';
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-96 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Homepage.jpg')] bg-cover">
        <div className='w-fulll h-full flex justify-center items-center'>
          <div className='text-white font-medium w-2/5 grid gap-8'>
            <div className='text-4xl text-center'>
              Generate outfit ideas with Fashion Trend Prediction
            </div>
            <div className='flex justify-center items-center'>
              <Link href={`/clothes`}>

                <Button
                  variant="contained"
                >
                Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3 ml-3 p-4'>
        <div className='text-2xl font-medium'>
          About
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-300" />
        <div className='mt-5 text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat 
        magni amet! Totam facere eveniet voluptatibus, consequatur eos optio, distinctio
         esse fugiat excepturi, praesentium quas tempore corporis assumenda cupiditate.
          Iure beatae quis perferendis sunt ipsam dolor, repellendus assumenda excepturi ullam, 
          quos non nostrum accusantium! Quas at tempore porro iure voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Adipisci rerum ipsa illo quibusdam quam unde eveniet nisi facere tempore debitis eaque cumque architecto aliquam sapiente 
           voluptate ad, tenetur facilis dolorum. Nemo, quaerat eaque. Ea consequuntur placeat voluptatibus pariatur eius atque consectetur 
           harum vero delectus doloribus ipsa nostrum, minus aliquam ipsum laborum! A dolore nesciunt magnam modi, doloremque expedita corrupti, 
           laborum quam fugit velit accusamus. Asperiores cumque fuga deleniti dicta dignissimos incidunt, a sequi possimus debitis ipsam 
           perspiciatis excepturi repellendus quis ea labore soluta culpa iure minus dolorum? Nobis quae unde ullam consequatur,
            maxime provident reprehenderit quas illo fuga nemo quisquam.
        </div>
      </div>
    </>
  );
}
