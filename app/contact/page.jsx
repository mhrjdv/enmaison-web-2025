"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TbMail, TbPhone, TbMapPin, TbClock, TbArrowUpRight } from "react-icons/tb";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: TbPhone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: TbMail,
      title: "Email",
      details: ["hello@enmaisondesigns.com", "projects@enmaisondesigns.com"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: TbMapPin,
      title: "Address",
      details: ["123 Design District", "Architecture Avenue, CA 90210"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: TbClock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-enmaison-cream">
      <div className="container pt-24 md:pt-28 lg:pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enmaison-dark-green mb-4">
            Let&apos;s Bring Your Vision to
            <span className="text-enmaison-gold block">Life</span>
          </h1>
          <p className="text-xl text-enmaison-dark-green/80 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch and let&apos;s create something beautiful together.
          </p>
        </div>

        {/* Form and Contact Info - Aligned */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-enmaison-gold/30 shadow-xl flex flex-col">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-enmaison-dark-green">Start Your Project</CardTitle>
              <CardDescription className="text-enmaison-dark-green/70">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-enmaison-dark-green font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-enmaison-gold/50 focus:border-enmaison-gold focus:ring-enmaison-gold/20 bg-white h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-enmaison-dark-green font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-enmaison-gold/50 focus:border-enmaison-gold focus:ring-enmaison-gold/20 bg-white h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-enmaison-dark-green font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-enmaison-gold/50 focus:border-enmaison-gold focus:ring-enmaison-gold/20 bg-white h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-enmaison-dark-green font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-enmaison-gold/50 focus:border-enmaison-gold focus:ring-enmaison-gold/20 bg-white h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-enmaison-dark-green font-medium">
                    Project Type *
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="border-enmaison-gold/50 focus:border-enmaison-gold focus:ring-enmaison-gold/20 bg-white h-11">
                      <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Design</SelectItem>
                      <SelectItem value="commercial">Commercial Space</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="consultation">Design Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 flex-1">
                  <Label htmlFor="message" className="text-enmaison-dark-green font-medium">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, timeline, and budget..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-enmaison-gold/50 focus:border-enmaison-gold focus:ring-enmaison-gold/20 bg-white resize-none h-full min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-enmaison-gold hover:bg-enmaison-gold/90 text-enmaison-dark-green font-semibold py-3 h-12 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                >
                  Send Message
                  <TbArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-enmaison-gold/30 shadow-xl flex flex-col">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-enmaison-dark-green">Get in Touch</CardTitle>
              <CardDescription className="text-enmaison-dark-green/70">
                We&apos;re here to help bring your vision to life.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="grid grid-cols-1 gap-4 h-full">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white to-gray-50/50 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                    <div className={`p-3 rounded-xl ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-enmaison-dark-green mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-enmaison-dark-green/80 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visit Our Studio - Full Width */}
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-enmaison-gold/30 shadow-xl mb-16">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl text-enmaison-dark-green flex items-center gap-2">
              <TbMapPin className="w-5 h-5 text-enmaison-gold" />
              Visit Our Studio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-enmaison-gold/5 via-white to-enmaison-teal/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-enmaison-gold/30 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-enmaison-gold/20 rounded-full"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-2 border-enmaison-teal/20 rotate-45"></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-enmaison-gold/10 rounded-full"></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-enmaison-teal/20 rotate-45"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="mb-4 p-4 bg-white/80 rounded-full inline-block shadow-lg">
                  <TbMapPin className="w-8 h-8 text-enmaison-gold" />
                </div>
                <h3 className="text-enmaison-dark-green font-semibold text-lg mb-2">Interactive Map</h3>
                <p className="text-enmaison-dark-green/70 text-sm mb-1">123 Design District</p>
                <p className="text-enmaison-dark-green/70 text-sm">Architecture Avenue, CA 90210</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-enmaison-gold text-enmaison-dark-green hover:bg-enmaison-gold/10"
                >
                  Get Directions
                  <TbArrowUpRight className="ml-1 w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-enmaison-gold/30 shadow-xl max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-enmaison-dark-green mb-4">
                Ready to Begin?
              </h2>
              <p className="text-enmaison-dark-green/80 mb-6 leading-relaxed">
                Every great space starts with a conversation. Let&apos;s create something remarkable together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-enmaison-gold hover:bg-enmaison-gold/90 text-enmaison-dark-green font-semibold shadow-md hover:shadow-lg transition-all duration-300 h-12"
                >
                  <a href="tel:+15551234567" className="flex items-center gap-2">
                    <TbPhone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-enmaison-gold border-2 text-enmaison-dark-green hover:bg-enmaison-gold/10 font-semibold shadow-md hover:shadow-lg transition-all duration-300 h-12"
                >
                  <a href="mailto:hello@enmaisondesigns.com" className="flex items-center gap-2">
                    <TbMail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}