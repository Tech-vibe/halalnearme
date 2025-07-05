import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/home/hero"
import { LocationSearch } from "@/components/home/location-search"
import { FeaturedRestaurants } from "@/components/home/featured-restaurants"
import { Categories } from "@/components/home/categories"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LocationSearch />
      <Categories />
      <FeaturedRestaurants />
      <Footer />
    </div>
  )
}
