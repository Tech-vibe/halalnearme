import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Coffee, Pizza, Beef, Cake, Soup } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Biryani",
    icon: Soup,
    count: "150+ places",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20",
    href: "/restaurants?category=biryani",
  },
  {
    name: "Fast Food",
    icon: Pizza,
    count: "200+ places",
    color: "bg-red-100 text-red-600 dark:bg-red-900/20",
    href: "/restaurants?category=fast-food",
  },
  {
    name: "Traditional",
    icon: Utensils,
    count: "180+ places",
    color: "bg-green-100 text-green-600 dark:bg-green-900/20",
    href: "/restaurants?category=traditional",
  },
  {
    name: "Grilled",
    icon: Beef,
    count: "120+ places",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20",
    href: "/restaurants?category=grilled",
  },
  {
    name: "Desserts",
    icon: Cake,
    count: "80+ places",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20",
    href: "/restaurants?category=desserts",
  },
  {
    name: "Beverages",
    icon: Coffee,
    count: "90+ places",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
    href: "/restaurants?category=beverages",
  },
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Find exactly what you're craving</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
