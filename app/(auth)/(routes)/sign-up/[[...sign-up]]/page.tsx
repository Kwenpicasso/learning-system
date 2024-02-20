import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <section className="bg-white w-full h-full max">
    
    <div className="grid min-h-screen grid-cols-12 mt-[2%]">
      <section className="relative mt-8 flex lg:h-32 items-end  h-full col-span-6 lg:col-span-12 lg:hidden">
        <Image
          alt="Night"
          src="/signout.svg"
          className="absolute inset-0 h-[90%] mx-auto w-[80%] object-contain "
          width={150}
          height={150}
        />
  
       
      </section>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 col-span-6 lg:px-16 lg:py-12 lg:col-span-12 "
      >
        <div className="max-w-3xl">
         
  
          <SignUp />
        </div>
      </main>
    </div>
  </section>
  );
}