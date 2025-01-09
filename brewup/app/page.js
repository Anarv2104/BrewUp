import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center gap-8 flex-col text-black items-center h-[65vh] bg-teal-200">
      <div className="font-bold gap-4 text-6xl "><span><img src="/Brew.png" alt="" width={300} height={300}/></span>
      </div>
      <p className="font-bold">A platform where creators and supporters come together to brew creativity & Innovation</p>
      <div className="flex gap-4">
      <button className="px-12 py-4 rounded-full bg-black font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-amber-200 hover:text-black transition-colors duration-200">let's Brew!
</button>
<button className="px-12 py-4 rounded-full bg-white font-bold text-black tracking-widest uppercase transform hover:scale-105 hover:bg-amber-200 hover:text-black transition-colors duration-200">Read More
</button>
      </div>
      </div>
      <div className="bg-black h-1 opacity-20">
        </div>
      </>
  );
}
