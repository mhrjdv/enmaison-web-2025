import { TbPhone, TbMail, TbBrandInstagram, TbClock } from "react-icons/tb";

export default function ContactStrip({ contact }) {
    if (!contact) return null;

    return (
        <div className="border-y border-neutral-100 bg-white">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-100">
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-3 py-5 px-4 lg:px-8 hover:bg-neutral-50 transition-colors">
                        <TbPhone className="text-enmaison-gold text-lg shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Phone</p>
                            <p className="text-sm font-medium text-neutral-900 truncate">{contact.phone}</p>
                        </div>
                    </a>
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-3 py-5 px-4 lg:px-8 hover:bg-neutral-50 transition-colors">
                        <TbMail className="text-enmaison-teal text-lg shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Email</p>
                            <p className="text-sm font-medium text-neutral-900 truncate">{contact.email}</p>
                        </div>
                    </a>
                    <a href="https://instagram.com/enmaisondesigns" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-5 px-4 lg:px-8 hover:bg-neutral-50 transition-colors">
                        <TbBrandInstagram className="text-neutral-400 text-lg shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Instagram</p>
                            <p className="text-sm font-medium text-neutral-900 truncate">{contact.instagram}</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-3 py-5 px-4 lg:px-8">
                        <TbClock className="text-neutral-400 text-lg shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Hours</p>
                            <p className="text-sm font-medium text-neutral-900 truncate">Mon–Fri, 10–7 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
