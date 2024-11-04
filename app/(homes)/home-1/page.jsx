import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Service from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ProjectGallery from "@/components/homes/home-1/ProjectGallery";
export const metadata = {
  title: "Home || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};

export default function Home1() {
  return (
    <>
      <div className="page-wraper ">
        <Header1 />
        <Hero />
        <div className="page-content bg-white">
        <div className="content-block">
          <Features />
          <ProjectGallery />
          <Service />
          <Blogs />
          <Team />

          <Testimonials />
{/* 
          <Cta /> */}
        </div>
      </div>
        <Footer1 />
      </div>
    </>
  );
}
