import React from "react";
import Image from "next/image";
import { teamMembers6 } from "@/data/team";
import Link from "next/link";
export default function Team() {
  return (
    <div className="section-full bg-gray content-inner">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Meet The Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers6.map((member, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={member.delay}
            >
              <div className="dlab-box m-b30 dlab-team1">
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image
                      width={358}
                      height={460}
                      alt=""
                      className="lazy"
                      src={member.imageSrc}
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href={`/team-1`}>{member.name}</Link>
                  </h4>
                  <span className="dlab-position">{member.position}</span>
                  <ul className="dlab-social-icon dez-border">
                    {member.socialLinks.map((link, i) => (
                      <React.Fragment key={i}>
                        <li>
                          <a
                            className={`fab fa-${link.platform}`}
                            href={link.url}
                          />
                        </li>{" "}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
