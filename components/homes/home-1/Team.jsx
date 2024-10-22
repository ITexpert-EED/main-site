import React from "react";
import Image from "next/image";
import { teamMembers8 } from "@/data/team";
import Link from "next/link";
export default function Team() {
  return (
    <div
      className="section-full bg-gray content-inner overlay-primary-dark bg-img-fix scrollSpySection"
      id="team"
      style={{ backgroundImage: "url(/images/background/bg19.jpg)" }}
    >
      <div className="container">
        <div className="section-head text-center text-white">
          <h2 className="title">Meet The Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been.
          </p>
        </div>
        <div className="section-content">
          <div className="row">
            {teamMembers8.map((member, index) => (
              <div
                key={index}
                className={`col-lg-3 col-md-6 col-sm-6 wow ${member.animation}`}
                data-wow-duration="2s"
                data-wow-delay={member.delay}
              >
                <div className="dlab-box m-b30 dlab-team3">
                  <div className="dlab-media">
                    <Link href={`/team-1`}>
                      <Image
                        width={358}
                        height={460}
                        alt={member.name}
                        src={member.imgSrc}
                      />
                    </Link>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title">
                      <Link href={`/team-1`}>{member.name}</Link>
                    </h4>
                    <span className="dlab-position">{member.position}</span>
                    <ul className="dlab-social-icon dez-border">
                      <li>
                        <a
                          className="fab fa-facebook-f"
                          href={member.socialLinks.facebook}
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-twitter"
                          href={member.socialLinks.twitter}
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-linkedin-in"
                          href={member.socialLinks.linkedin}
                        />
                      </li>{" "}
                      <li>
                        <a
                          className="fab fa-pinterest-p"
                          href={member.socialLinks.pinterest}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
