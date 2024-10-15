import React from "react";
import Image from "next/image";
import { teamMembers10 } from "@/data/team";
export default function Team1() {
  return (
    <div className="section-full content-inner">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Meet Our Team</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {teamMembers10.map((member, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div className="dlab-box m-b30 dlab-team1">
                <div className="dlab-media">
                  <a href="#">
                    <Image width={358} height={460} alt="" src={member.image} />
                  </a>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <a href="#">{member.name}</a>
                  </h4>
                  <span className="dlab-position">{member.position}</span>
                  <ul className="dlab-social-icon dez-border">
                    {member.socialLinks.map((social, i) => (
                      <React.Fragment key={i}>
                        <li>
                          <a className={social.className} href={social.href} />
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
