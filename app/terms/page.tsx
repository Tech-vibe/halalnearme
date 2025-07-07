import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400">Last updated: January 2024</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    By accessing and using HalalNearMe, you accept and agree to be bound by the terms and provision of
                    this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use License</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Permission is granted to temporarily download one copy of HalalNearMe per device for personal,
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                    under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on the website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>When you create an account with us, you must provide information that is accurate and complete.</p>
                  <p>You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Safeguarding the password and all activities under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Ensuring your account information remains accurate and up-to-date</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Orders and Payments</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    All orders placed through our platform are subject to acceptance by the respective restaurant or
                    vendor. Prices are subject to change without notice.
                  </p>
                  <p>Payment terms:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is due at the time of order placement</li>
                    <li>We accept major credit cards and digital payment methods</li>
                    <li>Refunds are processed according to our refund policy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Halal Verification</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    While we make every effort to verify the halal status of businesses on our platform, users are
                    encouraged to conduct their own verification when necessary. We are not liable for any issues
                    related to halal compliance.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Prohibited Uses</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>You may not use our service:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>
                      To violate any international, federal, provincial, or state regulations, rules, laws, or local
                      ordinances
                    </li>
                    <li>
                      To infringe upon or violate our intellectual property rights or the intellectual property rights
                      of others
                    </li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Disclaimer</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    The information on this website is provided on an 'as is' basis. To the fullest extent permitted by
                    law, this Company excludes all representations, warranties, conditions and terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitations</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    In no event shall HalalNearMe or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use the materials on HalalNearMe's website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>If you have any questions about these Terms of Service, please contact us at:</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <p>Email: legal@halalnearme.com</p>
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
