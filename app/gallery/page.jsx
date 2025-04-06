import Image from "next/image";

export const metadata = {
    title: "Gallery | Interior Design Portfolio",
    description: "Browse our interior design gallery showcasing our best work",
};

export default function Gallery() {
    return (
        <div className="container pt-24 md:pt-28 lg:pt-32 pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/badroom.jpg"
                        alt="Bedroom interior design"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery2.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/swiper1.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery11.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/living.jpg"
                        alt="Living room interior design"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery14.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery15.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery12.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery7.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery11.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
                    <Image
                        src="/image/gallery3.jpg"
                        alt="Interior design showcase"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}