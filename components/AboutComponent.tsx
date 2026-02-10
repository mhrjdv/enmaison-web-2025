import Image from "next/image";

export default function AboutComponent({ data }) {
    if (!data) return null;

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-12">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-enmaison-gold mb-3">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                            {data.title}
                        </h2>
                    </div>
                    <p className="text-sm text-neutral-400 font-medium mt-2">
                        By Ar. Khushboo Gohel
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="relative">
                        <Image
                            src="/image/khushboo-gohel.jpg"
                            width={900}
                            height={500}
                            alt="About EnMaison"
                            className="max-md:hidden w-full rounded-xl object-cover object-top"
                        />
                    </div>

                    <div className="space-y-6">
                        <p className="text-neutral-600 text-lg leading-relaxed">
                            {data.content}
                        </p>

                        <div className="border-l-2 border-enmaison-gold/40 pl-6">
                            <p className="text-sm font-medium text-neutral-400 mb-1">Why &quot;EnMaison&quot;?</p>
                            <p className="italic text-neutral-500 leading-relaxed">
                                &quot;{data.whyEnMaison}&quot;
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Image src="/image/awards.png" width={100} height={80} alt="Award 1" className="h-[60px] rounded-lg opacity-80 hover:opacity-100 transition-opacity" style={{ width: 'auto' }} />
                            <Image src="/image/awards1.png" width={100} height={80} alt="Award 2" className="h-[60px] rounded-lg opacity-80 hover:opacity-100 transition-opacity" style={{ width: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
