import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className='w-full container mt-[200px]'>
        <p className='text-[50px] font-bold'>Portofolio</p>
        <p>
          I have worker with a couple of innovative brands over years, here is a
          selection of some my favorite work
        </p>
        <div className='grid grid-cols-5 items-center gap-[40px] mt-[40px]'>
          <Image
            src='/image/icons8-tokopedia.svg'
            alt='tokopedia'
            width='100'
            height='100'
          />
          <Image
            src='/image/icons8-shopee.svg'
            alt='shopee'
            width='100'
            height='100'
          />
          <Image
            src='/image/icons8-lazada.svg'
            alt='lazada'
            width='100'
            height='100'
          />
        </div>
        <div className='inline-flex mt-[80px] space-x-[24px] text-[20px]'>
          <span className='text-neutral-900 font-bold'> All Works</span>
          <span> Andorid Development</span>
          <span> Web Development</span>
          <span> UI & UX</span>
          <span> Game Development</span>
        </div>
        <div className='grid grid-cols-3 gap-[40px] mt-[20px]'>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
          <div className='aspect-square bg-zinc-200 rounded-xl'></div>
        </div>
      </section>

      <div className='border border-neutral-500 w-1/3 container my-[200px]'></div>

      <section className='flex flex-row w-full container'>
        <div className='w-1/2'>
          <Image
            src='/image/genshinHomeSmall.jpg'
            alt='image1'
            width='720'
            height='720'
            className='w-4/6 border-4 border-white rounded-xl'
          />
        </div>
        <div className='w-1/2'>
          <div className='flex flex-col w-1/2'>
            <p className='text-[50px] font-bold'>Genshin</p>
            <p>Explore The World</p>
            <div className='inline-flex mt-[100px] space-x-[24px]'>
              <button className='text-[24px] py-[12px] px-[40px] bg-black rounded-full text-white hover:shadow-lg'>
                Play
              </button>
              <button className='text-[24px] py-[12px] px-[40px] border-2 border-black rounded-full hover:shadow-lg'>
                Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='border border-neutral-500 w-1/3 container my-[200px]'></div>

      <section className='text-center w-full container'>
        <p className='text-[50px] font-bold'>Genshin</p>
        <p className='text-[24px]'>Explore The World</p>
        <div className='mt-[50px]'>
          <button className='text-[24px] py-[12px] px-[40px] bg-black rounded-full text-white hover:shadow-lg'>
            Play
          </button>
        </div>
      </section>
    </div>
  );
}
