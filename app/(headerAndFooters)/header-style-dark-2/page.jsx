import CopyContainer from "@/components/common/CopyContainer";
import Footer15 from "@/components/footers/Footer15";
import Header4 from "@/components/headers/Header4";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title:
    "Header Dark Style 2 || Industry - Factory & Industrial React Nextjs Template",
  description: "Industry - Factory & Industrial React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header4 />
        <div className="page-content">
          {/* inner page banner */}
          <div
            className="dlab-bnr-inr overlay-black-dark banner-content"
            style={{ backgroundImage: "url(/images/banner/bnr3.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Header Style Curve</h1>
                {/* Breadcrumb row */}
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Header Style Curve</li>
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
                      <h2 className="title">Check Header Style 02</h2>
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
import Image from &quot;next&#x2F;image&quot;;
import Link from &quot;next&#x2F;link&quot;;
import &lbrace; socialLinks &rbrace; from &quot;@&#x2F;data&#x2F;socials&quot;;
export const metadata = {title:'Home || Industry - Factory & Industrial React Nextjs Template',description:'Industry - Factory & Industrial React Nextjs Template'}
export default function Header4() &lbrace;
  return (
    &lt;header className&#x3D;&quot;site-header mo-left header navstyle2&quot;&gt;
      &lbrace;&#x2F;* main header *&#x2F;&rbrace;
      &lt;div className&#x3D;&quot;sticky-header main-bar-wraper header-curve navbar-expand-lg&quot;&gt;
        &lt;div className&#x3D;&quot;main-bar clearfix bg-primary&quot;&gt;
          &lt;div className&#x3D;&quot;container clearfix&quot;&gt;
            &lbrace;&#x2F;* website logo *&#x2F;&rbrace;
            &lt;div className&#x3D;&quot;logo-header mostion logo-dark&quot;&gt;
              &lt;Link href&#x3D;&lbrace;&#x60;&#x2F;&#x60;&rbrace;&gt;
                &lt;img alt&#x3D;&quot;&quot; src&#x3D;&quot;&#x2F;images&#x2F;logo-2.png&quot; width&#x3D;&quot;258&quot; height&#x3D;&quot;75&quot; &#x2F;&gt;
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
                &lt;button
                  id&#x3D;&quot;quik-search-btn&quot;
                  type&#x3D;&quot;button&quot;
                  className&#x3D;&quot;site-button-link&quot;
                &gt;
                  &lt;i className&#x3D;&quot;la la-search&quot; &#x2F;&gt;
                &lt;&#x2F;button&gt;
              &lt;&#x2F;div&gt;
            &lt;&#x2F;div&gt;
            &lbrace;&#x2F;* Quik search *&#x2F;&rbrace;
            
            &lbrace;&#x2F;* main nav *&#x2F;&rbrace;
            &lt;div
              className&#x3D;&quot;header-nav navbar-collapse collapse justify-content-end&quot;
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
              &lt;div className&#x3D;&quot;dlab-social-icon ind-social&quot;&gt;
                &lt;ul&gt;
                  &lbrace;socialLinks.map((elm, i) &#x3D;&gt; (
                    &lt;li key&#x3D;&lbrace;i&rbrace;&gt;
                      &lt;a
                        className&#x3D;&lbrace;&#x60;site-button-link  $&lbrace;elm.className&rbrace;&#x60;&rbrace;
                        href&#x3D;&lbrace;elm.href&rbrace;
                      &#x2F;&gt;
                    &lt;&#x2F;li&gt;
                  ))&rbrace;
                &lt;&#x2F;ul&gt;
                &lt;p&gt;2022 Industry&lt;&#x2F;p&gt;
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
