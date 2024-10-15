import CopyContainer from "@/components/common/CopyContainer";
import Footer15 from "@/components/footers/Footer15";
import Footer17 from "@/components/footers/Footer17";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Footer 1 || Industry - Factory & Industrial React Nextjs Template",
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
                <h1 className="text-white">Footer 1</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Footer 1</li>
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
                      <h2 className="title">Check Footer Style 01</h2>
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

export default function Footer17() &lbrace;
  return (
    &lt;footer className&#x3D;&quot;site-footer&quot;&gt;
      &lt;div
        className&#x3D;&quot;p-tb60 text-center bg-black-1&quot;
        style&#x3D;&lbrace;&lbrace;
          backgroundImage: &quot;url(&#x2F;images&#x2F;background&#x2F;bg2.png)&quot;,
          backgroundSize: &quot;contain&quot;,
        &rbrace;&rbrace;
      &gt;
        &lt;div className&#x3D;&quot;container&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-12&quot;&gt;
              &lt;h3 className&#x3D;&quot;font-weight-300&quot;&gt;LET&#39;S CONNECT&lt;&#x2F;h3&gt;
              &lt;div className&#x3D;&quot;dlab-separator bg-white&quot; &#x2F;&gt;
              &lt;p className&#x3D;&quot;max-w600 m-auto&quot;&gt;
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard
              &lt;&#x2F;p&gt;
              &lt;ul className&#x3D;&quot;list-inline m-t20&quot;&gt;
                &lbrace;socialLinks.slice(0, 4).map((elm, i) &#x3D;&gt; (
                  &lt;li key&#x3D;&lbrace;i&rbrace;&gt;
                    &lt;a className&#x3D;&quot;site-button white outline circle&quot;&gt;
                      &lt;i className&#x3D;&lbrace;elm.iconClass&rbrace; &#x2F;&gt;
                    &lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                ))&rbrace;
              &lt;&#x2F;ul&gt;
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

        <Footer17 />
      </div>
    </>
  );
}
