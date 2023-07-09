import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <section className='w-full bg-[#F6C71F] h-screen '>
          <div className='flex flex-col h-full px-6 md:px-72'>
            <nav className='flex flex-row justify-between pt-6 md:pt-14'>
              <span className='flex flex-row font-bold'>AM</span>
              <Image
                src='/image/icons8-menu.svg'
                alt='menu'
                width='24'
                height='24'
              />
            </nav>
            <div className='flex grow flex-row'>
              <div className='flex flex-col justify-center w-2/3'>
                <p className='text-[42px] md:text-[85px] leading-tight font-medium '>
                  Hello I&apos;m Maulana, <br />
                  I&apos;m Software Engineer.
                </p>
                <p className='text-xl md:text-2xl mt-10 '>
                  Lets collaborate on your next project.
                </p>
                <div className='inline-flex mt-[50px] md:mt-[100px] space-x-[24px]'>
                  <button className='basis-1/2 text-[12px] md:text-[24px] py-[12px] px-[24px] bg-black rounded-full text-white hover:shadow-lg'>
                    Lets Work
                  </button>
                  <button className='basis-1/2 text-[12px] md:text-[24px] py-[12px] px-[24px] border-2 border-black rounded-full hover:shadow-lg'>
                    See My Work
                  </button>
                </div>
                <div className='inline-flex mt-[50px] md:mt-[100px] space-x-[24px]'>
                  <Image
                    src='/image/icons8-facebook.svg'
                    alt='facebook'
                    width='24'
                    height='24'
                  />
                  <Image
                    src='/image/icons8-instagram.svg'
                    alt='instagram'
                    width='24'
                    height='24'
                  />
                  <Image
                    src='/image/icons8-linkedin.svg'
                    alt='linkedin'
                    width='24'
                    height='24'
                  />
                  <Image
                    src='/image/icons8-twitter.svg'
                    alt='twitter'
                    width='24'
                    height='24'
                  />
                </div>
              </div>
              <div className='grid w-1/3'>
                <Image
                  src='/image/profil.png'
                  alt='profil'
                  width='720'
                  height='1080'
                  className='w-3/6 place-self-end'
                />
              </div>
            </div>
          </div>
        </section>
        {children}
        <section className='border-t bg-zinc-100 mt-[100px]'>
          <div className='flex flex-col md:flex-row justify-between px-6 md:px-72 py-[50px]'>
            <div className='flex flex-col place-content-center'>
              <div className='w-[100px] h-[100px] bg-zinc-200 border-2 border-zinc-300 rounded-lg'></div>
              <div className='inline-flex space-x-[8px] mt-[24px] opacity-50'>
                <Image
                  src='/image/icons8-facebook.svg'
                  alt='facebook'
                  width='24'
                  height='24'
                />
                <Image
                  src='/image/icons8-instagram.svg'
                  alt='instagram'
                  width='24'
                  height='24'
                />
                <Image
                  src='/image/icons8-linkedin.svg'
                  alt='linkedin'
                  width='24'
                  height='24'
                />
                <Image
                  src='/image/icons8-twitter.svg'
                  alt='twitter'
                  width='24'
                  height='24'
                />
              </div>
              <div>
                <p className='mt-[12px] text-sm text-neutral-500'>
                  2023 Ahmad Maulana. All rights reserved
                </p>
              </div>
            </div>
            <div className='flex flex-col place-content-center space-y-4 text-zinc-500'>
              <a href='#'> Contact Me</a>
              <a href='#' className='mt-[24px] font-bold text-black'>
                {"📞 +62858-7252-1060"}
              </a>
              <a href='#' className='font-bold text-black'>
                {"✉️ ahmadmmi1904@gmail.com"}
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
