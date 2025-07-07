import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-green-600">HalalNearMe</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 2024</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a
                    website. They are widely used to make websites work more efficiently and provide information to
                    website owners.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Cookies</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>We use cookies for several purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To remember your preferences and settings</li>
                    <li>To keep you signed in to your account</li>
                    <li>To analyze how our website is used</li>
                    <li>To improve our services and user experience</li>
                    <li>To provide personalized content and recommendations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-400">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance Cookies</h3>
                    <p>
                      These cookies collect information about how visitors use our website, such as which pages are
                      visited most often. This data helps us improve how our website works.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Functionality Cookies</h3>
                    <p>
                      These cookies allow the website to remember choices you make and provide enhanced, more personal
                      features.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Targeting Cookies</h3>
                    <p>
                      These cookies are used to deliver advertisements more relevant to you and your interests. They may
                      be set by us or by third-party providers.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>We may also use third-party services that set cookies on our website, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Google Analytics for website analytics</li>
                    <li>Payment processors for secure transactions</li>
                    <li>Social media platforms for sharing features</li>
                    <li>Advertising networks for targeted ads</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Managing Cookies</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>You can control and manage cookies in several ways:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Through your browser settings - most browsers allow you to block or delete cookies</li>
                    <li>Through our cookie consent banner when you first visit our site</li>
                    <li>By contacting us directly if you have specific concerns</li>
                  </ul>
                  <p className="font-semibold">
                    Please note that blocking certain cookies may impact your experience on our website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Browser Settings</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>You can manage cookies through your browser settings:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                    </li>
                    <li>
                      <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                    </li>
                    <li>
                      <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>If you have any questions about our use of cookies, please contact us at:</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <p>Email: privacy@halalnearme.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
