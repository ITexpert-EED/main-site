import CopyContainer from "@/components/common/CopyContainer";
import Footer15 from "@/components/footers/Footer15";
import Footer6 from "@/components/footers/Footer6";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Footer 12 || Industry - Factory & Industrial React Nextjs Template",
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
                <h1 className="text-white">Footer 12</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Footer 12</li>
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
                      <h2 className="title">Check Footer Style 12</h2>
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

import React from &quot;react&quot;;
import Link from &quot;next&#x2F;link&quot;;
import &lbrace; footerLinks2, socialLinks &rbrace; from &quot;@&#x2F;data&#x2F;footerLinks&quot;;
export default function Footer6() &lbrace;
  return (
    &lt;footer className&#x3D;&quot;site-footer&quot;&gt;
      &lt;div className&#x3D;&quot;section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar&quot;&gt;
        &lt;div className&#x3D;&quot;container&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div
              className&#x3D;&quot;col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInLeft&quot;
              data-wow-duration&#x3D;&quot;2s&quot;
              data-wow-delay&#x3D;&quot;0.3s&quot;
            &gt;
              &lt;div className&#x3D;&quot;icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1&quot;&gt;
                &lt;div className&#x3D;&quot;icon-content&quot;&gt;
                  &lt;h5 className&#x3D;&quot;dlab-tilte&quot;&gt;
                    &lt;span className&#x3D;&quot;icon-sm&quot;&gt;
                      &lt;i className&#x3D;&quot;ti-location-pin&quot; &#x2F;&gt;
                    &lt;&#x2F;span&gt;
                    Company Address
                  &lt;&#x2F;h5&gt;
                  &lt;p className&#x3D;&quot;op7&quot;&gt;
                    Demo address #8901 Marmora Road Chi Minh City, Vietnam
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              className&#x3D;&quot;col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInUp&quot;
              data-wow-duration&#x3D;&quot;2s&quot;
              data-wow-delay&#x3D;&quot;0.3s&quot;
            &gt;
              &lt;div className&#x3D;&quot;icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1&quot;&gt;
                &lt;div className&#x3D;&quot;icon-content&quot;&gt;
                  &lt;h5 className&#x3D;&quot;dlab-tilte&quot;&gt;
                    &lt;span className&#x3D;&quot;icon-sm&quot;&gt;
                      &lt;i className&#x3D;&quot;ti-email&quot; &#x2F;&gt;
                    &lt;&#x2F;span&gt;
                    E-mail
                  &lt;&#x2F;h5&gt;
                  &lt;p className&#x3D;&quot;m-b0 op7&quot;&gt;
                    &lt;a href&#x3D;&quot;mailto:someone@example.com&quot;&gt;info@example.com&lt;&#x2F;a&gt;
                  &lt;&#x2F;p&gt;
                  &lt;p className&#x3D;&quot;op7&quot;&gt;
                    &lt;a href&#x3D;&quot;mailto:someone@example.com&quot;&gt;company@example.com&lt;&#x2F;a&gt;
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              className&#x3D;&quot;col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInDown&quot;
              data-wow-duration&#x3D;&quot;2s&quot;
              data-wow-delay&#x3D;&quot;0.3s&quot;
            &gt;
              &lt;div className&#x3D;&quot;icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1&quot;&gt;
                &lt;div className&#x3D;&quot;icon-content&quot;&gt;
                  &lt;h5 className&#x3D;&quot;dlab-tilte&quot;&gt;
                    &lt;span className&#x3D;&quot;icon-sm&quot;&gt;
                      &lt;i className&#x3D;&quot;ti-mobile&quot; &#x2F;&gt;
                    &lt;&#x2F;span&gt;
                    Phone Numbers
                  &lt;&#x2F;h5&gt;
                  &lt;p className&#x3D;&quot;m-b0 op7&quot;&gt;
                    Mobile : &lt;a href&#x3D;&quot;tel:+4733378901&quot;&gt;+00 234 678 9012&lt;&#x2F;a&gt;
                  &lt;&#x2F;p&gt;
                  &lt;p className&#x3D;&quot;op7&quot;&gt;
                    Phone : &lt;a href&#x3D;&quot;tel:+4733378901&quot;&gt;+0 1234 5678 90&lt;&#x2F;a&gt;
                  &lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              className&#x3D;&quot;col-lg-3 col-md-6 col-sm-6 col-xs-6 m-b30 wow fadeInRight&quot;
              data-wow-duration&#x3D;&quot;2s&quot;
              data-wow-delay&#x3D;&quot;0.3s&quot;
            &gt;
              &lt;div className&#x3D;&quot;icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1&quot;&gt;
                &lt;div className&#x3D;&quot;icon-content&quot;&gt;
                  &lt;h5 className&#x3D;&quot;dlab-tilte&quot;&gt;
                    &lt;span className&#x3D;&quot;icon-sm&quot;&gt;
                      &lt;i className&#x3D;&quot;ti-alarm-clock&quot; &#x2F;&gt;
                    &lt;&#x2F;span&gt;
                    Office Hours
                  &lt;&#x2F;h5&gt;
                  &lt;p className&#x3D;&quot;m-b0 op7&quot;&gt;Mon To Sat - 08.00-18.00&lt;&#x2F;p&gt;
                  &lt;p className&#x3D;&quot;op7&quot;&gt;Sunday - Close&lt;&#x2F;p&gt;
                &lt;&#x2F;div&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lt;div className&#x3D;&quot;footer-top&quot;&gt;
        &lt;div className&#x3D;&quot;container&quot;&gt;
          &lt;div className&#x3D;&quot;row&quot;&gt;
            &lt;div
              className&#x3D;&quot;col-lg-3 col-md-6 col-sm-12 wow fadeIn&quot;
              data-wow-delay&#x3D;&quot;0.2s&quot;
            &gt;
              &lt;div className&#x3D;&quot;widget border-0&quot;&gt;
                &lt;h6 className&#x3D;&quot;m-b20 text-white font-weight-300 text-uppercase&quot;&gt;
                  Quick Links
                &lt;&#x2F;h6&gt;
                &lt;ul className&#x3D;&quot;list-2&quot;&gt;
                  &lbrace;footerLinks2.map((link, index) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;index&rbrace;&gt;
                      &lt;Link href&#x3D;&lbrace;link.href&rbrace;&gt;&lbrace;link.label&rbrace;&lt;&#x2F;Link&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              className&#x3D;&quot;col-lg-4 col-md-6 col-sm-12 wow fadeIn&quot;
              data-wow-delay&#x3D;&quot;0.4s&quot;
            &gt;
              &lt;div className&#x3D;&quot;widget&quot;&gt;
                &lt;h6 className&#x3D;&quot;text-white font-weight-300 text-uppercase&quot;&gt;
                  Newsletter
                &lt;&#x2F;h6&gt;
                &lt;div className&#x3D;&quot;subscribe-form m-b20 m-t15&quot;&gt;
                  &lt;form
                    className&#x3D;&quot;dzSubscribe&quot;
                    onSubmit&#x3D;&lbrace;(e) &#x3D;&gt; e.preventDefault()&rbrace;
                  &gt;
                    &lt;div className&#x3D;&quot;dzSubscribeMsg&quot; &#x2F;&gt;
                    &lt;div className&#x3D;&quot;input-group&quot;&gt;
                      &lt;input
                        name&#x3D;&quot;dzEmail&quot;
                        required&#x3D;&quot;required&quot;
                        className&#x3D;&quot;form-control radius-no&quot;
                        placeholder&#x3D;&quot;Your Email Address&quot;
                        type&#x3D;&quot;email&quot;
                      &#x2F;&gt;
                      &lt;span className&#x3D;&quot;input-group-btn&quot;&gt;
                        &lt;button
                          name&#x3D;&quot;submit&quot;
                          value&#x3D;&quot;Submit&quot;
                          type&#x3D;&quot;submit&quot;
                          className&#x3D;&quot;site-button btnhover15 radius-no&quot;
                        &gt;
                          SEND
                        &lt;&#x2F;button&gt;
                      &lt;&#x2F;span&gt;
                    &lt;&#x2F;div&gt;
                  &lt;&#x2F;form&gt;
                &lt;&#x2F;div&gt;
                &lt;h6 className&#x3D;&quot;m-b10 text-white font-weight-300 text-uppercase&quot;&gt;
                  Connect with us
                &lt;&#x2F;h6&gt;
                &lt;ul className&#x3D;&quot;list-inline m-a0&quot;&gt;
                  &lbrace;socialLinks.map((link, index) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;index&rbrace;&gt;
                      &lt;a
                        href&#x3D;&lbrace;link.href&rbrace;
                        className&#x3D;&lbrace;&#x60;site-button sharp $&lbrace;link.className&rbrace;&#x60;&rbrace;
                      &gt;
                        &lt;i className&#x3D;&lbrace;link.iconClass&rbrace; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lt;div
              className&#x3D;&quot;col-lg-5 col-md-12 col-sm-12 wow fadeIn&quot;
              data-wow-delay&#x3D;&quot;0.6s&quot;
            &gt;
              &lt;div className&#x3D;&quot;icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1&quot;&gt;
                &lt;h5 className&#x3D;&quot;text-white font-weight-300&quot;&gt;
                  Serving in 70+ countries for web, software and mobile app
                  development
                &lt;&#x2F;h5&gt;
                &lt;p&gt;
                  United States (USA), United Kingdom (UK), Singapore, Kenya,
                  South Africa Germany, Canada, Australia, Netherlands, Norway,
                  United Arab Emirates (UAE) , Finland etc.
                &lt;&#x2F;p&gt;
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
                    &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;privacy-policy&#x60;&rbrace;&gt; Refund Policy&lt;&#x2F;Link&gt;
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

        <Footer6 />
      </div>
    </>
  );
}
