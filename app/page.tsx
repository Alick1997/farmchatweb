import Link from "next/link";
import "../globals.css"
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-green-500 to-white min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="parallax h-screen bg-cover bg-fixed flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Welcome to Farm Chat</h1>
            <p className="text-lg text-white mt-4">Revolutionizing the way you find your agricultural produce</p>
            <Image alt='showcase of phone typing leading to produce' src='/hero.png' width={400} height={400} />
          </div>
          <Link href="#services" className="rounded bg-white hover:scale-105 px-2 py-6">View Services</Link>
        </section>
        <Services />
        <WhyFarmChat />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const Navbar = () => {
  return (
    <header className="text-white p-6 fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Farm Chat</div>
        <div>
          <a href="#services" className="mx-3 hover:text-yellow-400">Services</a>
          <a href="#about" className="mx-3 hover:text-yellow-400">About</a>
        </div>
      </nav>
    </header>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What we do</h2>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-4">Agricultural Produce Request Distribution</h3>
          <p className="text-gray-700">
            We take user requests for agricultural produce and distribute them among farmers. 
            Our platform provides a quick and efficient way to find crops when in need.
          </p>
        </div>
        <div className="items-center flex flex-col gap-y-3 my-4 font-bold">
          <h2 className="font-bold text-3xl">Find suppliers in a 3 step process</h2>
          <span className="my-4">
          <p>Tell us what you need</p>
          <Image src='services1.png' alt = 'Buyer requesting produce' width={400} height={400} />
          </span>
          <span className="my-4">
          <p>We automatically distribute your request to the right people</p>
          <Image src='services2.png' alt = 'distributing request to farmers' width={400} height={400} />
          </span>
          <span className="my-4">
          <p>We get back to you with a list of suppliers</p>
          <Image src='services3.png' alt = 'returning a list of suppliers' width={400} height={400} />
          </span>
        </div>
      </div>
    </section>
  );
};

const WhyFarmChat = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Farm Chat</h2>
        <div className="bg-white p-6 rounded shadow text-left">
          <h3 className="text-xl font-bold mt-4">1. Reduced Cost</h3>
          <p className="text-gray-700 mt-2">
            Farm Chat is an automated software system, ensuring requests are distributed at a fraction of the cost, maximizing efficiency and reducing overhead.
          </p>
          <h3 className="text-xl font-bold mt-4">2. Instant Response Time</h3>
          <p className="text-gray-700 mt-2">
            With 24/7 uptime, Farm Chat provides instant responses to all requests, ensuring no downtime and continuous support for your agricultural needs.
          </p>
          <h3 className="text-xl font-bold mt-4">3. Easy to Use</h3>
          <p className="text-gray-700 mt-2">
            Farm Chat is a natural language procurement assistant. You can interact with it just like talking to a person, making the process intuitive and user-friendly.
          </p>
        </div>
        <Link
          href="https://wa.me/+17676165957"
          className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
        >
          Go to Farm Chat
        </Link>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="mx-auto text-center">
        <Link href={'mailto:farmchatdm@gmail.com'}>Email: Farmchatdm@gmail.com</Link>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto text-center">
        © 2024 Farm Chat. All rights reserved.
      </div>
    </footer>
  );
};