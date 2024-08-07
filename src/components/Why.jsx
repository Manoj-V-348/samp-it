import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import "./Why.css";

import background from "../images/greengraph.jpeg";

import aos from "aos";
import "aos/dist/aos.css";

function Why() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const [design1, changeDesign1] = useState(true);
  const [design2, changeDesign2] = useState(true);
  const [design3, changeDesign3] = useState(true);

  const toggleDesign = (designFunction) => {
    designFunction((prev) => !prev);
  };

  return (
    <>
      <LazyLoad>
        <div>
          <div className="why--section--container" loading="lazy">
            <div className="why--front--area">
              <h1 data-aos="fade-down">Why choose Us?</h1>

              <div className="why--details--container">
                <div class="why--card">
                  <p class="heading">
                    Unleash the Power of Storytelling: Content that Captivates &
                    Converts
                  </p>
                  <p>
                    Today's consumers crave engagement and connection. SAMP IT
                    empowers your brand to tell its unique story through
                    captivating content that resonates with your target
                    audience. We don't just create content; we craft strategic
                    narratives that inform, educate, and entertain, ultimately
                    driving conversions. Our team of skilled writers and content
                    creators will develop engaging blog posts, social media
                    content, and website copy that speaks directly to your
                    audience's needs and desires.
                  </p>
                  <p>Video Editing</p>
                </div>

                <div class="why--card">
                  <p class="heading">
                    Amplify Your Voice and Reach: Social Media Strategies that
                    Ignite Engagement
                  </p>
                  <p>
                    The social media landscape is constantly evolving, and
                    navigating it effectively can be a challenge. SAMP IT takes
                    the guesswork out of your social media strategy. Our experts
                    will develop a data-driven plan to identify where your
                    target audience lives online and craft engaging content that
                    sparks conversations and builds a loyal following. We'll
                    manage your social media channels, schedule captivating
                    posts, and foster meaningful interactions with your
                    audience.
                  </p>
                  <p>Social Media Management</p>
                </div>

                <div class="why--card">
                  <p class="heading">
                    Craft a Website that Converts: User-Friendly Design Meets
                    Strategic Optimization
                  </p>
                  <p>
                    Your website is your online storefront, and first
                    impressions matter. SAMP IT designs and develops beautiful,
                    user-friendly websites that not only showcase your brand but
                    also drive results. We'll create a website that's visually
                    appealing, easy to navigate, and optimized for search
                    engines. Our focus is on converting website visitors into
                    loyal customers. SAMP IT implements best practices for user
                    experience and search engine optimization (SEO), ensuring
                    your website attracts the right audience and converts them
                    into paying customers.
                  </p>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </>
  );
}

export default Why;
