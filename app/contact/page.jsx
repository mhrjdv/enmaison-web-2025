"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TbMail, TbPhone, TbMapPin, TbArrowUpRight, TbBrandInstagram, TbSend, TbClock } from "react-icons/tb";
import { getSiteContent } from "@/lib/data";
import ContactStrip from "@/components/ContactStrip";

export default function Contact() {
  const content = getSiteContent();
  const { contact } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      projectType: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-enmaison-cream/20">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center overflow-hidden bg-enmaison-dark-green">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/projects/pawars-residence/pawars-residence-3.jpg"
            alt="Contact Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-enmaison-dark-green/70 via-enmaison-dark-green/50 to-enmaison-dark-green" />
        <div className="container relative z-10 text-center space-y-6">
          <span className="text-enmaison-gold font-black uppercase tracking-[0.5em] text-sm">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none uppercase">
            Start Your <br />
            <span className="text-enmaison-gold">Legacy</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto font-medium italic">
            Every great space begins with a conversation. Tell us about your vision.
          </p>
        </div>
      </div>

      <ContactStrip contact={contact} />

      {/* Main Content */}
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-enmaison-gold/10">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-enmaison-dark-green uppercase tracking-tight mb-3">
                  Inquiry Form
                </h2>
                <div className="w-14 h-1.5 bg-enmaison-gold rounded-full mb-5" />
                <p className="text-enmaison-teal font-medium italic">
                  Tell us about your dreams for your space. We&apos;re listening.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-enmaison-gold font-bold">Your Name</Label>
                    <Input
                      name="name"
                      placeholder="e.g., John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 rounded-2xl border-enmaison-gold/20 focus:border-enmaison-gold bg-enmaison-cream/10 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-enmaison-gold font-bold">Email Address</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="e.g., hello@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 rounded-2xl border-enmaison-gold/20 focus:border-enmaison-gold bg-enmaison-cream/10 font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-enmaison-gold font-bold">Phone Number</Label>
                    <Input
                      name="phone"
                      placeholder="e.g., +91 00000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-14 rounded-2xl border-enmaison-gold/20 focus:border-enmaison-gold bg-enmaison-cream/10 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-enmaison-gold font-bold">Project Category</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="h-14 rounded-2xl border-enmaison-gold/20 bg-enmaison-cream/10 font-medium">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-enmaison-gold/20">
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="interiors">Interior Design</SelectItem>
                        <SelectItem value="consultation">Vastu Consultation</SelectItem>
                        <SelectItem value="other">3D Visualization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-enmaison-gold font-bold">Your Vision</Label>
                  <Textarea
                    name="message"
                    placeholder="Tell us a bit about your space, location, and requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[140px] rounded-2xl border-enmaison-gold/20 bg-enmaison-cream/10 p-5 font-medium resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button className="w-full h-16 rounded-full bg-enmaison-dark-green text-white font-black uppercase tracking-widest hover:bg-enmaison-gold hover:text-enmaison-dark-green transition-all shadow-xl flex items-center justify-center gap-4 group text-sm">
                    INITIATE PROJECT <TbSend className="text-xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Studio Address Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-enmaison-gold/10">
              <div className="relative h-48 w-full">
                <Image
                  src="/projects/kedia-villa/kedia-villa-1.jpg"
                  alt="EnMaison Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-enmaison-dark-green/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[9px] font-black uppercase tracking-widest text-enmaison-gold mb-1">Our Studio</p>
                  <p className="text-white font-black text-lg">EnMaison Designs</p>
                </div>
              </div>
              <div className="p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-enmaison-gold/10 flex items-center justify-center text-enmaison-gold shrink-0 mt-0.5">
                    <TbMapPin className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-enmaison-gold mb-1">Address</p>
                    <p className="text-sm font-bold text-enmaison-dark-green leading-relaxed">{contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-enmaison-teal/10 flex items-center justify-center text-enmaison-teal shrink-0 mt-0.5">
                    <TbPhone className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-enmaison-gold mb-1">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-sm font-bold text-enmaison-dark-green hover:text-enmaison-teal transition-colors">{contact.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-enmaison-dark-green/10 flex items-center justify-center text-enmaison-dark-green shrink-0 mt-0.5">
                    <TbMail className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-enmaison-gold mb-1">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-sm font-bold text-enmaison-dark-green hover:text-enmaison-teal transition-colors">{contact.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-enmaison-dark-green rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-enmaison-gold/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-enmaison-gold/20 flex items-center justify-center text-enmaison-gold">
                    <TbClock className="text-lg" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-enmaison-gold">Operating Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-medium text-white/60 text-sm">Monday – Friday</span>
                    <span className="font-black text-sm">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-medium text-white/60 text-sm">Saturday</span>
                    <span className="font-black text-sm">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/60 text-sm">Sunday</span>
                    <span className="text-enmaison-gold font-black text-sm">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social CTA */}
            <a
              href="https://instagram.com/enmaisondesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 bg-white rounded-3xl p-8 shadow-xl border border-enmaison-gold/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-enmaison-dark-green to-enmaison-teal flex items-center justify-center text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                <TbBrandInstagram />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase tracking-widest text-enmaison-gold mb-1">Follow Us</p>
                <p className="text-lg font-black text-enmaison-dark-green truncate">{contact.instagram}</p>
              </div>
              <TbArrowUpRight className="text-2xl text-enmaison-gold opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}