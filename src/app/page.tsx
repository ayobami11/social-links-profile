import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className='bg-dark-grey rounded-xl py-6 px-8 m-6 text-center'>
        <figure className='flex flex-col items-center'>
          <Image
            className='rounded-full mb-8'
            src='/avatar.jpeg'
            alt='Ayobami Tunwase'
            width={80}
            height={80}
            priority
          />
          <figcaption className='contents'>
            <h1 className='font-bold text-xl mb-3.5'>Ayobami Tunwase</h1>
            <p className='font-semibold text-primary mb-6'>Lagos, Nigeria</p>
            <q className='mb-5'>Front-end developer and avid reader.</q>
          </figcaption>
        </figure>


        <address className='not-italic flex flex-col gap-4 items-center'>
          <a
            href="https://github.com/ayobami11"
            className="font-semibold rounded-md bg-grey py-2 w-full hover:bg-primary hover:text-dark-grey"
            target="_blank"
            rel="noopener noreferrer"
          >Github</a>
          <a
            href="https://www.frontendmentor.io/profile/ayobami11"
            className="font-semibold rounded-md bg-grey py-2 w-full hover:bg-primary hover:text-dark-grey"
            target="_blank"
            rel="noopener noreferrer"
          >Frontend Mentor</a>
          <a
            href="https://linkedin.com/in/ayobami-tunwase-83a21b202"
            className="font-semibold rounded-md bg-grey py-2 w-full hover:bg-primary hover:text-dark-grey"
            target="_blank"
            rel="noopener noreferrer"
          >Linkedin</a>
          <a
            href="https://x.com/TunwaseAyobami"
            className="font-semibold rounded-md bg-grey py-2 w-full hover:bg-primary hover:text-dark-grey"
            target="_blank"
            rel="noopener noreferrer"
          >X</a>
        </address>
      </div>
    </main>
  );
}
