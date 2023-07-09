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
          <div className='flex flex-col container h-full'>
            <nav className='flex flex-row justify-between pt-[58px]'>
              <span className='flex flex-row font-bold'>AM</span>
              <Image
                src='/image/icons8-menu.svg'
                alt='menu'
                width='24'
                height='24'
              />
            </nav>
            <div className='flex grow flex-row'>
              <div className='flex flex-col justify-center'>
                <p className='text-[42px] md:text-[85px] leading-tight font-medium '>
                  Hello I&apos;m Maulana, <br />
                  I&apos;m Develop Stuff.
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
              <div className='grid w-1/2'>
                <Image
                  src='/image/people.png'
                  alt='profil'
                  width='720'
                  height='1080'
                  className='w-5/6 place-self-end'
                />
              </div>
            </div>
          </div>
        </section>
        {children}
        <section className='border-t bg-zinc-100 mt-[100px]'>
          <div className='grid grid-cols-4 container py-[50px]'>
            <div className='flex flex-col'>
              <div className='w-[100px] h-[100px] bg-zinc-200 border-2 border-zinc-300 rounded-lg'></div>
              <div className='inline-flex space-x-[24x] mt-[24px] opacity-50'>
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
              <p className='mt-[12px] text-sm text-neutral-500'>
                2023 Ahmad Maulana. All rights rederved
              </p>
            </div>
            <div className='flex flex-col space-y-4 text-zinc-500'>
              <a href='#'> About Me</a>
              <a href='#'> Contact</a>
              <a href='#'> Testimonial</a>
              <a href='#'> Reference</a>
            </div>
            <div className='flex flex-col space-y-4 text-zinc-500'>
              <a href='#'> Portofolio</a>
              <a href='#'> Store</a>
              <a href='#'> Books</a>
            </div>
            <div className='flex flex-col space-y-4 text-zinc-500'>
              <a href='#'> Get In Touch</a>
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
