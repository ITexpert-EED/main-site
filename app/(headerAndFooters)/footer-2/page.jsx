import CopyContainer from "@/components/common/CopyContainer";
import Footer15 from "@/components/footers/Footer15";
import Footer18 from "@/components/footers/Footer18";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Footer 2 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header1 />
        <div className="page-content bg-white">
          {/* inner page banner */}
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt"
            style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Footer 2</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Footer 2</li>
                  </ul>
                </div>
                {/* Breadcrumb row END */}
              </div>
            </div>
          </div>
          {/* inner page banner END */}
          {/* contact area */}
          <div className="content-block">
            {/* Code Box */}
            <div
              className="section-full content-inner bg-white video-section"
              style={{
                backgroundImage: 'url("/images/background/bg-video.png")',
              }}
            >
              <div className="container">
                <div className="footer-box">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4">
                      <Image
                        alt=""
                        src="/images/footer.png"
                        width="436"
                        height="500"
                      />
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <h2 className="title">Check Footer Style 02</h2>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm.
                      </p>
                    </div>
                  </div>
                </div>
                <CopyContainer
                  code={`
import &lbrace; socialLinks &rbrace; from &quot;@&#x2F;data&#x2F;footerLinks&quot;;
import React from &quot;react&quot;;

export default function Footer18() &lbrace;
  return (
    &lt;footer className&#x3D;&quot;site-footer footer-full&quot;&gt;
      &lt;div className&#x3D;&quot;p-tb60 bg-primary&quot;&gt;
        &lt;div className&#x3D;&quot;container-fluid&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-4 text-center text-md-start footer-logo&quot;&gt;
              &lt;img src&#x3D;&quot;&#x2F;images&#x2F;logo-light.png&quot; alt&#x3D;&quot;&quot; width&#x3D;&lbrace;140&rbrace; &#x2F;&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;col-md-4 text-center&quot;&gt;
              &lt;ul className&#x3D;&quot;list-inline m-a0&quot;&gt;
                &lbrace;socialLinks.slice(0, 4).map((elm, i) &#x3D;&gt; (
                  &lt;li key&#x3D;&lbrace;i&rbrace;&gt;
                    &lt;a className&#x3D;&quot;site-button white outline circle&quot;&gt;
                      &lt;i className&#x3D;&lbrace;elm.iconClass&rbrace; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                ))&rbrace;
              &lt;&#x2F;ul&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;col-md-4 text-center text-md-end&quot;&gt;
              &lt;p className&#x3D;&quot;max-w600 m-auto m-t10 text-white&quot;&gt;
                Copyright © &lt;span className&#x3D;&quot;current-year&quot;&gt;2024&lt;&#x2F;span&gt;
                &lt;a href&#x3D;&quot;https:&#x2F;&#x2F;dexignzone.com&#x2F;&quot; target&#x3D;&quot;_blank&quot;&gt;
                  DexignZone
                &lt;&#x2F;a&gt;
              &lt;&#x2F;p&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
    &lt;&#x2F;footer&gt;
  );
&rbrace;                  
                  
                  `}
                />
              </div>
            </div>
            {/* Code Box End */}
          </div>
          {/* contact area END */}
        </div>

        <Footer18 />
      </div>
    </>
  );
}