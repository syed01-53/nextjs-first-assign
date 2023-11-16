import Image from 'next/image';
import Header from './component/Header/header';
import Main from './component/main/main';

export default function Home() {
  return (
    <div className=' '>
      <header className='  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between  
     text-center container py-4">
        <Main />
      </main>
    </div>
  );
}
