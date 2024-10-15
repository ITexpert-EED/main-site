import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
export const metadata = {
  title: "Home || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};

export default function Home1() {
  return (
    <>
      <div className="page-wraper ">
        <Header1 />
        <div className="page-content bg-white">
          {/* <h1>bvyufuyfuyvfhyjv</h1> */}
          <Hero />
          <About />
          <Cta />
          <Services />
          <Facts />
          <Team />
          <Testimonials />
          <Blogs />
          <Clients />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
