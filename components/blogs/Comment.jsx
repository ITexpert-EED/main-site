"use client";

import Image from "next/image";

export default function Comment() {
  return (
    <div className="clear" id="comment-list">
      <div className="comments-area" id="comments">
        <h2 className="comments-title">8 Comments</h2>
        <div className="clearfix">
          {/* comment list END */}
          <ol className="comment-list">
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic1.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">Oliver</cite>
                  <span className="says">says:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">October 6, 2015 at 7:15 am</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur
                  adipiscing elit. Nam vitae neque vitae sapien malesuada
                  aliquet.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    Reply
                  </a>
                </div>
              </div>
              <ol className="children">
                <li className="comment odd parent">
                  <div className="comment-body">
                    <div className="comment-author vcard">
                      <Image
                        className="avatar photo"
                        alt=""
                        src="/images/testimonials/pic2.jpg"
                        width="100"
                        height="100"
                      />
                      <cite className="fn">Harry</cite>
                      <span className="says">says:</span>
                    </div>
                    <div className="comment-meta">
                      <a href="#">October 6, 2015 at 7:15 am</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam vitae neque vitae sapien malesuada aliquet. In viverra
                      dictum justo in vehicula. Fusce et massa eu ante ornare
                      molestie. Sed vestibulum sem felis, ac elementum ligula
                      blandit ac.
                    </p>
                    <div className="reply">
                      <a href="#" className="comment-reply-link">
                        Reply
                      </a>
                    </div>
                  </div>
                  <ol className="children">
                    <li className="comment odd parent">
                      <div className="comment-body">
                        <div className="comment-author vcard">
                          <Image
                            className="avatar photo"
                            alt=""
                            src="/images/testimonials/pic3.jpg"
                            width="100"
                            height="100"
                          />
                          <cite className="fn">Thomas</cite>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-meta">
                          <a href="#">October 6, 2015 at 7:15 am</a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam vitae neque vitae sapien malesuada aliquet.
                          In viverra dictum justo in vehicula. Fusce et massa eu
                          ante ornare molestie. Sed vestibulum sem felis, ac
                          elementum ligula blandit ac.
                        </p>
                        <div className="reply">
                          <a href="#" className="comment-reply-link">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ol>
                  {/* list END */}
                </li>
              </ol>
              {/* list END */}
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic1.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">Stacy poe</cite>
                  <span className="says">says:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">October 6, 2015 at 7:15 am</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae neque vitae sapien malesuada aliquet. In viverra dictum
                  justo in vehicula. Fusce et massa eu ante ornare molestie. Sed
                  vestibulum sem felis, ac elementum ligula blandit ac.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    Reply
                  </a>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic2.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">Jamie</cite>
                  <span className="says">says:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">October 6, 2015 at 7:15 am</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae neque vitae sapien malesuada aliquet. In viverra dictum
                  justo in vehicula. Fusce et massa eu ante ornare molestie. Sed
                  vestibulum sem felis, ac elementum ligula blandit ac.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    Reply
                  </a>
                </div>
              </div>
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  <Image
                    className="avatar photo"
                    alt=""
                    src="/images/testimonials/pic3.jpg"
                    width="100"
                    height="100"
                  />
                  <cite className="fn">Anna</cite>
                  <span className="says">says:</span>
                </div>
                <div className="comment-meta">
                  <a href="#">October 6, 2015 at 7:15 am</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae neque vitae sapien malesuada aliquet. In viverra dictum
                  justo in vehicula. Fusce et massa eu ante ornare molestie. Sed
                  vestibulum sem felis, ac elementum ligula blandit ac.
                </p>
                <div className="reply">
                  <a href="#" className="comment-reply-link">
                    Reply
                  </a>
                </div>
              </div>
            </li>
          </ol>
          {/* comment list END */}
          {/* Form */}
          <div className="comment-respond" id="respond">
            <h4 className="comment-reply-title" id="reply-title">
              Leave a Reply
              <small>
                <a
                  style={{ display: "none" }}
                  href="#"
                  id="cancel-comment-reply-link"
                  rel="nofollow"
                >
                  Cancel reply
                </a>
              </small>
            </h4>
            <form
              className="comment-form"
              id="commentform"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="comment-form-author">
                <label htmlFor="author">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="author"
                  name="author"
                  placeholder="Author"
                  id="author"
                />
              </p>
              <p className="comment-form-email">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </p>
              <p className="comment-form-url">
                <label htmlFor="url">Website</label>
                <input
                  type="text"
                  defaultValue="url"
                  placeholder="Website"
                  name="url"
                  id="url"
                />
              </p>
              <p className="comment-form-comment">
                <label htmlFor="comment">Comment</label>
                <textarea
                  rows={8}
                  name="comment"
                  placeholder="Comment"
                  id="comment"
                  defaultValue={""}
                />
              </p>
              <p className="form-submit">
                <input
                  type="submit"
                  defaultValue="Post Comment"
                  className="submit"
                  id="submit"
                  name="submit"
                />
              </p>
            </form>
          </div>
          {/* Form END */}
        </div>
      </div>
    </div>
  );
}
