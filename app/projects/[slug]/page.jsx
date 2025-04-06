"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TbArrowLeft, TbArrowUpRight } from "react-icons/tb";
import { Carousel } from "@/components/ui/carousel";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import projectsData from "@/data/projects.json";

export default function ProjectDetail() {
  const params = useParams();
  const { slug } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching slug
    const foundProject = projectsData.find(p => p.slug === slug);
    if (foundProject) {
      console.log('Found project:', foundProject);
      console.log('Project images:', foundProject.images);
      setProject(foundProject);
    } else {
      console.error('Project not found for slug:', slug);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link href="/projects" className="flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          <TbArrowLeft className="mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  // Prepare data for the components
  const featuresItems = project.features.map(feature => ({
    title: feature.title,
    description: feature.description
  }));

  const detailsContent = project.details.map(detail => ({
    title: detail.title,
    description: detail.description,
    content: detail.image ? (
      <Image
        src={detail.image}
        alt={detail.title}
        fill
        className="object-cover object-center"
      />
    ) : null
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-screen">
        <div className="absolute inset-0 bg-black">
          <Image
            src={project.mainImage}
            alt={project.name}
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">{project.tagline}</p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="container py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg mb-8">{project.description}</p>

            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="bg-gray-100 p-8 rounded-xl my-8">
                <p className="text-xl italic mb-4">"{project.testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{project.testimonial.author}</p>
                    <p className="text-gray-600">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:w-1/3 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-medium">{project.location}</p>
              </div>
              <div>
                <p className="text-gray-600">Completion Date</p>
                <p className="font-medium">{project.completionDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Project Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <HoverEffect items={featuresItems} />
        </div>
      </div>

      {/* Project Images Carousel */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Project Gallery</h2>
            <p className="text-gray-500 mt-2 md:mt-0">Swipe or use arrows to navigate through project images</p>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl carousel-container">
            <Carousel
              key={`carousel-${project.id}`}
              images={project.images || []}
              className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
              autoplay={true}
              interval={4000}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6">
            {project.images && project.images.length > 0 ? project.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => document.querySelector('.carousel-container')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`Failed to load thumbnail: ${image}`);
                    e.currentTarget.src = '/image/placeholder.jpg';
                  }}
                />
              </div>
            )) : (
              <div className="col-span-4 text-center py-4 bg-gray-100 rounded-lg">
                <p className="text-gray-500">No thumbnail images available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Details with Sticky Scroll */}
      <div className="py-16">
        <div className="container mb-8">
          <h2 className="text-3xl font-bold">Design Process</h2>
        </div>
        <StickyScroll content={detailsContent} />
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your space?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Let's create a design that perfectly suits your lifestyle and preferences.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us <TbArrowUpRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Back to Projects */}
      <div className="container py-12">
        <Link href="/projects" className="inline-flex items-center text-lg font-medium hover:underline">
          <TbArrowLeft className="mr-2" /> Back to All Projects
        </Link>
      </div>
    </div>
  );
}
