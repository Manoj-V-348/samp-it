import React, { useState, useEffect } from "react";

import "./Blog.css";

import aos from "aos";
import "aos/dist/aos.css";

function Blog4() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="blog--contents--wrapper">
        <div className="blog--details--container" data-aos="fade-right">
          <img src={website} alt="" />
          <p className="blog--heading">
            SAMP IT's Article on Guide to Social Media Marketing
          </p>
          <div className="points">
            <p className="blog--subheading">Here's an Overview:</p>
            <ul>
              <li>Understanding your target audience</li>
              <li>Setting specific goals</li>
              <li>Creating a Strong Brand Presence</li>
              <li>Choosing the right social media platforms</li>
              <li>Developing a Content Strategy</li>
              <li>Engaging with your audience</li>
              <li>Utilizing paid advertising</li>
              <li>Measuring and analyzing results</li>
              <li>Adapting and Evolving your Strategies</li>
              <li>Collaborating with Influencers</li>
            </ul>
          </div>

          <div className="blog--sub--container">
            <div className="blog--sub--heading">
              <h1>Understanding your target audience</h1>
              <p>
                A user-friendly website with intuitive navigation and clear
                calls to action keeps visitors engaged and encourages them to
                explore further. This positive user experience fosters trust and
                leaves a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="blog--description">
        SAMP IT creates beautiful, user-friendly websites that convert visitors
        into customers. We combine stunning design with strategic SEO
        optimization to ensure your website attracts the right audience and
        drives results.
      </h1>
    </>
  );
}

export default Blog4;
