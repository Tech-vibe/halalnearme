import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 2024</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, make a
                    reservation, place an order, or contact us for support.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Delivery addresses and payment information</li>
                    <li>Dietary preferences and special requirements</li>
                    <li>Reviews and ratings you provide</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>We may share your information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With restaurants and vendors to fulfill your orders</li>
                    <li>With service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a merger or acquisition</li>
                  </ul>
                  <p className="font-semibold">We never sell your personal information to third parties.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                    is 100% secure.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Rights</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Delete your account and personal data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Cookies</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our
                    marketing efforts. You can control cookies through your browser settings.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Contact Us</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
