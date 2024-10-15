import Image from "next/image";

export default function BlogSingle({ blogItem }) {
  return (
    <div className="blog-post blog-single">
      <div className="dlab-post-meta m-b20">
        <ul>
          <li className="post-date">
            <strong>10 Aug</strong> <span> 2016</span>
          </li>
          <li className="post-author">
            By <a href="#">Harry</a>
          </li>
        </ul>
      </div>
      <div className="dlab-post-title">
        <h4 className="post-title m-t0">
          <a href={`#`}>{blogItem.title}</a>
        </h4>
      </div>
      <div className="dlab-post-media dlab-img-effect zoom-slow">
        <a href={`#`}>
          <Image
            alt=""
            src="/images/blog/default/thum1.jpg"
            width="1000"
            height="600"
          />
        </a>
      </div>
      <div className="dlab-post-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting printer a galley Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen It has urvived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen It has urvived not only five centuries, but
          also the leap into electronic typesetting.
        </p>
        <blockquote>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Has been the industry's standard text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimencenturies.
        </blockquote>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen It has urvived not only five centuries, but
          also the leap into electronic typesetting.
        </p>
        <h5>Completely Responsive</h5>
        <Image
          className="alignleft"
          width={300}
          alt=""
          src="/images/blog/grid/pic4.jpg"
          height="500"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the releasefive centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release
        </p>
        <div className="dlab-divider bg-gray-dark" />
        <Image
          className="alignright"
          width={300}
          alt=""
          src="/images/blog/grid/pic1.jpg"
          height="500"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
        </p>
      </div>
      <div className="dlab-post-tags clear">
        <div className="post-tags">
          <a href="#">Child </a>
          <a href="#">Eduction </a>
          <a href="#">Money </a>
          <a href="#">Resturent </a>
        </div>
      </div>
    </div>
  );
}
