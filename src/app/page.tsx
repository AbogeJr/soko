import Brands from "@/components/brands";
import Cta from "@/components/cta";
import Filter from "@/components/filter";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/newsletter";
import ProductSection from "@/components/product-section";
import NewArrivals from "@/components/product-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const items = [
    {
      name: "Shirt",
      image: "/tshirt.png",
      rating: 4,
      price: 1000,
    },
    {
      name: "Plaid Shirt",
      image: "/plaid.png",
      rating: 5,
      price: 3000,
    },
    {
      name: "Baseball Shirt",
      image: "/base.png",
      rating: 2,
      price: 500,
    },
    {
      name: "Baseball Shirt",
      image: "/base.png",
      rating: 2,
      price: 500,
    },
  ];
  return (
    <main>
      <Cta />
      <Navbar />
      <Hero />
      <Brands />
      <ProductSection title="New Arrivals" items={items} />
      <ProductSection title="Top Selling" items={items} />
      <Filter />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </main>
  );
}
