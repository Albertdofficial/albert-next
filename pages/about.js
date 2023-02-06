import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title> Ninja List | About </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Isn’t this and more what we have today in the Holy Spirit that lives
          in us? He’s your helper! Is there anything you’re trying to achieve?
          Or are you experiencing some form of trouble? There’s supernatural
          help available for you.
        </p>
        <p>
          The Holy Spirit is in you to help you in ministry, in business, in
          your finances and relationships. He’ll move trouble away from you just
          as He moved Jehoshaphat’s enemies away. He’ll give you creative ideas
          that’ll make your name spread abroad. You’re not disadvantaged in any
          way; the Helper is in you, and that’s the Holy Spirit. Hallelujah!
        </p>
        <Footer />
      </div>
    </>
  );
};

export default About;
