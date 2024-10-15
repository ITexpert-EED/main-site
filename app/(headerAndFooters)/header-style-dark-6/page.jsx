import CopyContainer from "@/components/common/CopyContainer";
import Footer15 from "@/components/footers/Footer15";

import Header11 from "@/components/headers/Header11";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title:
    "Header Dark Style 6 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header11 />
        <div className="page-content">
          {/* inner page banner */}
          <div
            className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-dark banner-content"
            style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Header Style Overlay Topbar</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Header Style Overlay Topbar</li>
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
                <div className="header-box">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4">
                      <Image
                        alt=""
                        src="/images/header.png"
                        width="438"
                        height="487"
                      />
                    </div>
                    <div className="col-lg-9 col-md-8">
                      <h2 className="title">Check Header Style 05</h2>
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
import Nav from &quot;.&#x2F;component&#x2F;Nav&quot;;
import Link from &quot;next&#x2F;link&quot;;
import Image from &quot;next&#x2F;image&quot;;
import &lbrace; socialLinks, socialMediaLinks &rbrace; from &quot;@&#x2F;data&#x2F;socials&quot;;
export const metadata = {title:'Home || Industry - Factory & Industrial React Nextjs Template',description:'Industry - Factory & Industrial React Nextjs Template'}
export default function Header11() &lbrace;
  return (
    &lt;header className&#x3D;&quot;site-header mo-left header header-curve ext-header dark&quot;&gt;
      &lt;div className&#x3D;&quot;middle-bar bg-dark&quot;&gt;
        &lt;div className&#x3D;&quot;container-fluid&quot;&gt;
          &lbrace;&#x2F;* website logo  *&#x2F;&rbrace;
          &lt;div className&#x3D;&quot;middle-area&quot;&gt;
            &lt;div className&#x3D;&quot;logo-header&quot;&gt;
              &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;&#x60;&rbrace;&gt;
                &lt;Image
                  alt&#x3D;&quot;&quot;
                  src&#x3D;&quot;&#x2F;images&#x2F;logo-light.png&quot;
                  width&#x3D;&quot;258&quot;
                  height&#x3D;&quot;75&quot;
                &#x2F;&gt;
              &lt;&#x2F;Link&gt;
            &lt;&#x2F;div&gt;
            &lt;div className&#x3D;&quot;service-list&quot;&gt;
              &lt;ul&gt;
                &lt;li&gt;
                  &lt;i className&#x3D;&quot;la la-phone&quot; &#x2F;&gt;
                  &lt;h4 className&#x3D;&quot;title&quot;&gt;
                    &lt;a href&#x3D;&quot;tel:+4733378901&quot;&gt;(+00)888.666.88&lt;&#x2F;a&gt;
                  &lt;&#x2F;h4&gt;
                  &lt;span&gt;Free Call&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
                &lt;li&gt;
                  &lt;i className&#x3D;&quot;la la-clock-o&quot; &#x2F;&gt;
                  &lt;h4 className&#x3D;&quot;title&quot;&gt;08:00 AM - 06:00 PM&lt;&#x2F;h4&gt;
                  &lt;span&gt;Monday - Friday&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
                &lt;li&gt;
                  &lt;i className&#x3D;&quot;la la-map&quot; &#x2F;&gt;
                  &lt;h4 className&#x3D;&quot;title&quot;&gt;183 Donato Parkways&lt;&#x2F;h4&gt;
                  &lt;span&gt;CA, United State&lt;&#x2F;span&gt;
                &lt;&#x2F;li&gt;
              &lt;&#x2F;ul&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* main header *&#x2F;&rbrace;
      &lt;div className&#x3D;&quot;sticky-header main-bar-wraper navbar-expand-lg&quot;&gt;
        &lt;div className&#x3D;&quot;main-bar clearfix&quot;&gt;
          &lt;div className&#x3D;&quot;container-fluid clearfix&quot;&gt;
            &lbrace;&#x2F;* website logo *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;logo-header mostion&quot;&gt;
              &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;&#x60;&rbrace;&gt;
                &lt;Image
                  alt&#x3D;&quot;&quot;
                  src&#x3D;&quot;&#x2F;images&#x2F;logo-light.png&quot;
                  width&#x3D;&quot;258&quot;
                  height&#x3D;&quot;75&quot;
                &#x2F;&gt;
              &lt;&#x2F;Link&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* nav toggle button *&#x2F;&rbrace;
            &lt;button
              className&#x3D;&quot;navbar-toggler collapsed navicon justify-content-end&quot;
              type&#x3D;&quot;button&quot;
              data-bs-toggle&#x3D;&quot;collapse&quot;
              data-bs-target&#x3D;&quot;#navbarNavDropdown&quot;
              aria-controls&#x3D;&quot;navbarNavDropdown&quot;
              aria-expanded&#x3D;&quot;false&quot;
              aria-label&#x3D;&quot;Toggle navigation&quot;
            &gt;
              &lt;span &#x2F;&gt;
              &lt;span &#x2F;&gt;
              &lt;span &#x2F;&gt;
            &lt;&#x2F;button&gt;
            &lbrace;&#x2F;* extra nav *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;extra-nav&quot;&gt;
              &lt;div className&#x3D;&quot;extra-cell&quot;&gt;
                &lt;ul className&#x3D;&quot;list-inline&quot;&gt;
                  &lbrace;socialMediaLinks.map((link, index) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;index&rbrace;&gt;
                      &lt;a
                        href&#x3D;&quot;#&quot;
                        className&#x3D;&lbrace;&#x60;site-button-link $&lbrace;link.className&rbrace; hover&#x60;&rbrace;
                      &gt;
                        &lt;i className&#x3D;&lbrace;link.icon&rbrace; &#x2F;&gt;
                      &lt;&#x2F;a&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* Quik search *&#x2F;&rbrace;
            
            &lbrace;&#x2F;* main nav *&#x2F;&rbrace;
            &lt;div
              className&#x3D;&quot;header-nav navbar-collapse collapse justify-content-start&quot;
              id&#x3D;&quot;navbarNavDropdown&quot;
            &gt;
              &lt;div className&#x3D;&quot;logo-header d-md-block d-lg-none&quot;&gt;
                &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;&#x60;&rbrace;&gt;
                  &lt;Image
                    alt&#x3D;&quot;&quot;
                    src&#x3D;&quot;&#x2F;images&#x2F;logo-2.png&quot;
                    width&#x3D;&quot;258&quot;
                    height&#x3D;&quot;75&quot;
                  &#x2F;&gt;
                &lt;&#x2F;Link&gt;
              &lt;&#x2F;div&gt;
              &lt;ul className&#x3D;&quot;nav navbar-nav&quot;&gt;
                &lt;Nav &#x2F;&gt;
              &lt;&#x2F;ul&gt;
              &lt;div className&#x3D;&quot;dlab-social-icon&quot;&gt;
                &lt;ul&gt;
                  &lbrace;socialLinks.map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;i&rbrace;&gt;
                      &lt;a
                        className&#x3D;&lbrace;&#x60;site-button sharp-sm  $&lbrace;elm.className&rbrace;&#x60;&rbrace;
                        href&#x3D;&lbrace;elm.href&rbrace;
                      &#x2F;&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
          &lt;&#x2F;div&gt;
        &lt;&#x2F;div&gt;
      &lt;&#x2F;div&gt;
      &lbrace;&#x2F;* main header END *&#x2F;&rbrace;
    &lt;&#x2F;header&gt;
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

        <Footer15 />
      </div>
    </>
  );
}
