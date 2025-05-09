import React from 'react';

export default function Banner() {
  return (
    <section className="flex py-20 gap-10 flex-col items-center lg:flex-row lg:justify-center lg:gap-20 md:py-40 bg-purple-100">
      <div className="w-50 translate-x-10 lg:translate-x-0 text-green-700">
        <h3 className="text-5xl font-bold rotate-3 -translate-x-28">
          Smart
        </h3>
        <h3 className="text-5xl font-bold -rotate-6 -translate-x-11">Shopping</h3>
        <h3 className="text-5xl font-bold rotate-3 translate-x-12">Made Easy</h3>
      </div>
      <p className="w-100 text-purple-900 text-lg">
        Welcome to <span className="font-bold">Cumall</span>—your one-stop platform for **everything shopping!**  
        From groceries to gadgets, fashion to skin care, we bring you the best deals,  
        making shopping seamless, affordable, and fun.  
        <br /> <br />
        Shop smarter. Shop better. Shop **Cumall**.
      </p>
    </section>
  );
}
