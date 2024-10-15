import CopyContainer from "@/components/common/CopyContainer";
import Footer15 from "@/components/footers/Footer15";
import Footer20 from "@/components/footers/Footer20";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Footer 4 || Industry - Factory & Industrial React Nextjs Template",
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
                <h1 className="text-white">Footer 4</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Footer 4</li>
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
                      <h2 className="title">Check Footer Style 04</h2>
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
&quot;use client&quot;;

import &lbrace; footerLinks2, socialLinks &rbrace; from &quot;@&#x2F;data&#x2F;footerLinks&quot;;
import Link from &quot;next&#x2F;link&quot;;
import React from &quot;react&quot;;

export default function Footer20() &lbrace;
  return (
    &lt;footer className&#x3D;&quot;site-footer footer-overlay bg-img-fix bgpt1&quot;&gt;
      &lt;div className&#x3D;&quot;footer-top&quot;&gt;
        &lt;div className&#x3D;&quot;container&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-12 text-center m-b30&quot;&gt;
              &lt;h4 className&#x3D;&quot;text-white font-weight-300&quot;&gt;
                A SHORT STORY ABOUT US
              &lt;&#x2F;h4&gt;
              &lt;p className&#x3D;&quot;max-w600 p-b20 m-auto&quot;&gt;
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry&#39;s standard dummy text ever since
                the been when an unknown printer.
              &lt;&#x2F;p&gt;
              &lt;div className&#x3D;&quot;max-w500 m-auto m-t30 subscribe-form&quot;&gt;
                &lt;form
                  className&#x3D;&quot;dzSubscribe&quot;
                  onSubmit&#x3D;&lbrace;(e) &#x3D;&gt; e.preventDefault()&rbrace;
                &gt;
                  &lt;div className&#x3D;&quot;dzSubscribeMsg&quot; &#x2F;&gt;
                  &lt;div className&#x3D;&quot;input-group&quot;&gt;
                    &lt;input
                      name&#x3D;&quot;dzEmail&quot;
                      required&#x3D;&quot;required&quot;
                      className&#x3D;&quot;form-control&quot;
                      placeholder&#x3D;&quot;Your Email Id&quot;
                      type&#x3D;&quot;email&quot;
                    &#x2F;&gt;
                    &lt;span className&#x3D;&quot;input-group-btn&quot;&gt;
                      &lt;button
                        name&#x3D;&quot;submit&quot;
                        value&#x3D;&quot;Submit&quot;
                        type&#x3D;&quot;submit&quot;
                        className&#x3D;&quot;site-button radius-xl&quot;
                      &gt;
                        Subscribe
                      &lt;&#x2F;button&gt;
                    &lt;&#x2F;span&gt;
                  &lt;&#x2F;div&gt;
                &lt;&#x2F;form&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* footer bottom part *&#x2F;&rbrace;
      &lt;div className&#x3D;&quot;footer-bottom text-center&quot;&gt;
        &lt;div className&#x3D;&quot;container p-tb10&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-12 col-sm-12 m-b30 logo-white&quot;&gt;
              &lt;img src&#x3D;&quot;&#x2F;images&#x2F;logo-white.png&quot; alt&#x3D;&quot;&quot; width&#x3D;&lbrace;100&rbrace; &#x2F;&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-12 col-sm-12&quot;&gt;
              &lt;div className&#x3D;&quot;widget-link&quot;&gt;
                &lt;ul&gt;
                  &lbrace;footerLinks2.slice(0, 4).map((link, index) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;index&rbrace;&gt;
                      &lt;Link href&#x3D;&lbrace;link.href&rbrace;&gt;&lbrace;link.label&rbrace;&lt;&#x2F;Link&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div className&#x3D;&quot;col-md-12 m-t20&quot;&gt;
              &lt;ul className&#x3D;&quot;list-inline&quot;&gt;
                &lbrace;socialLinks.slice(0, 4).map((elm, i) &#x3D;&gt; (
                  &lt;li key&#x3D;&lbrace;i&rbrace;&gt;
                    &lt;a
                      href&#x3D;&quot;#&quot;
                      className&#x3D;&lbrace;&#x60;site-button-link $&lbrace;elm.className&rbrace; hover&#x60;&rbrace;
                    &gt;
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

        <Footer20 />
      </div>
    </>
  );
}
