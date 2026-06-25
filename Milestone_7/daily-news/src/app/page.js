import Image from "next/image";
import banner from './../../public/banner.jpg'
import Link from "next/link";
export default function Home() {
  return (
    <div className="mt-5 container mx-auto relative flex flex-col items-center justify-center">
      <Image src={banner} alt="banner" height="500" width="500" className="w-full h-[600px]"></Image>
      <div className="absolute flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-7xl text-white">Welcome to Daily News</h1>
        <Link className="btn btn-primary" href="/news">Explore News</Link>
      </div>
    </div >
  );
}
