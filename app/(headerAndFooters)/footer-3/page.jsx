import CopyContainer from "@/components/common/CopyContainer";
import Footer11 from "@/components/footers/Footer11";
import Footer15 from "@/components/footers/Footer15";
import Footer19 from "@/components/footers/Footer19";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Footer 3 || Industry - Factory & Industrial React Nextjs Template",
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
                <h1 className="text-white">Footer 3</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Footer 3</li>
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
                      <h2 className="title">Check Footer Style 03</h2>
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
import React from &quot;react&quot;;
import Link from &quot;next&#x2F;link&quot;;

import &lbrace; footerLinks2, socialLinks &rbrace; from &quot;@&#x2F;data&#x2F;footerLinks&quot;;
import Gallery from &quot;.&#x2F;Gallery&quot;;
export default function Footer19() &lbrace;
  return (
    &lt;footer className&#x3D;&quot;site-footer text-uppercase bg-white&quot;&gt;
      &lbrace;&#x2F;* Social icon *&#x2F;&rbrace;

      &lbrace;&#x2F;* Social icon End *&#x2F;&rbrace;
      &lt;div
        className&#x3D;&quot;footer-top&quot;
        style&#x3D;&lbrace;&lbrace;
          backgroundImage: &quot;url(&#x2F;images&#x2F;background&#x2F;bg3.png)&quot;,
          backgroundSize: &quot;contain&quot;,
        &rbrace;&rbrace;
      &gt;
        &lt;div className&#x3D;&quot;container saf-footer&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-6 col-lg-3 col-sm-6 footer-col-4&quot;&gt;
              &lt;div className&#x3D;&quot;widget widget_getintuch&quot;&gt;
                &lt;h5 className&#x3D;&quot;m-b30 text-white&quot;&gt;Contact us&lt;&#x2F;h5&gt;
                &lt;ul&gt;
                  &lt;li&gt;
                    &lt;i className&#x3D;&quot;ti-location-pin&quot; &#x2F;&gt;
                    &lt;strong&gt;address&lt;&#x2F;strong&gt; demo address #8901 Marmora Road Chi
                    Minh City, Vietnam
                  &lt;&#x2F;li&gt;
                  &lt;li&gt;
                    &lt;i className&#x3D;&quot;ti-mobile&quot; &#x2F;&gt;
                    &lt;strong&gt;phone&lt;&#x2F;strong&gt;
                    &lt;a href&#x3D;&quot;tel:+4733378901&quot;&gt;0800-123456 &lt;&#x2F;a&gt; (24&#x2F;7 Support
                    Line)
                  &lt;&#x2F;li&gt;
                  &lt;li&gt;
                    &lt;i className&#x3D;&quot;ti-email&quot; &#x2F;&gt;
                    &lt;strong&gt;email&lt;&#x2F;strong&gt;
                    &lt;a href&#x3D;&quot;mailto:someone@example.com&quot;&gt;info@example.com&lt;&#x2F;a&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;col-md-6 col-lg-3 col-sm-6 col-5 footer-col-4&quot;&gt;
              &lt;div className&#x3D;&quot;widget widget_services border-0&quot;&gt;
                &lt;h5 className&#x3D;&quot;m-b30 text-white&quot;&gt;Company&lt;&#x2F;h5&gt;
                &lt;ul&gt;
                  &lbrace;footerLinks2.slice(0, 5).map((link, index) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;index&rbrace;&gt;
                      &lt;Link href&#x3D;&lbrace;link.href&rbrace;&gt;&lbrace;link.label&rbrace;&lt;&#x2F;Link&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;col-md-6 col-lg-3 col-sm-6 col-7 footer-col-4&quot;&gt;
              &lt;div className&#x3D;&quot;widget widget_services border-0&quot;&gt;
                &lt;h5 className&#x3D;&quot;m-b30 text-white&quot;&gt;Useful Link&lt;&#x2F;h5&gt;
                &lt;ul&gt;
                  &lbrace;footerLinks2.slice(5, 10).map((link, index) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;index&rbrace;&gt;
                      &lt;Link href&#x3D;&lbrace;link.href&rbrace;&gt;&lbrace;link.label&rbrace;&lt;&#x2F;Link&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;col-md-6 col-lg-3 col-sm-6 footer-col-4&quot;&gt;
              &lt;div className&#x3D;&quot;widget widget_gallery gallery-grid-4&quot;&gt;
                &lt;h5 className&#x3D;&quot;m-b30 text-white&quot;&gt;Gallery&lt;&#x2F;h5&gt;
                &lt;Gallery &#x2F;&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* footer bottom part *&#x2F;&rbrace;
      &lt;div className&#x3D;&quot;footer-bottom&quot;&gt;
        &lt;div className&#x3D;&quot;container&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-6 col-sm-6 text-left&quot;&gt;
              &lt;span&gt;
                Copyright © &lt;span className&#x3D;&quot;current-year&quot;&gt;2024&lt;&#x2F;span&gt;
                &lt;a href&#x3D;&quot;https:&#x2F;&#x2F;dexignzone.com&#x2F;&quot; target&#x3D;&quot;_blank&quot;&gt;
                  DexignZone
                &lt;&#x2F;a&gt;
                . all rights reserved.
              &lt;&#x2F;span&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;col-md-6 col-sm-6 text-right&quot;&gt;
              &lt;div className&#x3D;&quot;widget-link&quot;&gt;
                &lt;ul&gt;
                  &lt;li&gt;
                    &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;help-desk&#x60;&rbrace;&gt; Help Desk&lt;&#x2F;Link&gt;
                  &lt;&#x2F;li&gt;
                  &lt;li&gt;
                    &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;privacy-policy&#x60;&rbrace;&gt; Privacy Policy&lt;&#x2F;Link&gt;
                  &lt;&#x2F;li&gt;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
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

        <Footer19 />
      </div>
    </>
  );
}
