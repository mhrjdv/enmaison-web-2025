import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16 bg-gradient-to-br from-white to-enmaison-cream">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-enmaison-dark-green lg:text-5xl hover:text-enmaison-green transition-colors duration-300" href="">
                    An aesthetic room is <br />
                    <span className="text-enmaison-gold">given harmony</span>
                </a>
                <p className="tracking-wider text-enmaison-teal font-medium bg-enmaison-gold/10 px-4 py-2 rounded-full">WORLD AWARD</p>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center gap-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-enmaison-gold/20 to-enmaison-teal/20 rounded-3xl blur-3xl"></div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden relative z-10 rounded-2xl shadow-2xl" />
                </div>

                <div className="items-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-enmaison-gold/20">
                    <p className="pb-4 text-enmaison-dark-green leading-relaxed">
                        <span className="text-enmaison-gold font-semibold">Enmaison Designs</span> is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.
                    </p>
                    <div className="flex pt-4 gap-x-4 ">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-enmaison-gold/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                            <Image src="/image/awards.png" width={100} height={80} alt="" className="relative z-10 h-[100px] rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-enmaison-teal/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                            <Image src="/image/awards1.png" width={100} height={80} alt="" className="relative z-10 h-[100px] rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}