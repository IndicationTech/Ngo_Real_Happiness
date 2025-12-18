import { Heart, DollarSign, CreditCard } from "lucide-react"

export default function HowToHelp() {
  const donationAmounts = [50, 100, 250, 500, 1000]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">How You Can Help</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your contribution can make a real difference in someone's life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Donation Options */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Make a Donation</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      className="border-2 border-border rounded-xl py-3 font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      ${amount}
                    </button>
                  ))}
                  <button className="border-2 border-border rounded-xl py-3 font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-colors col-span-3">
                    Custom Amount
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Donation Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border-2 border-primary bg-primary/5 rounded-xl py-3 font-semibold text-primary">
                    One-Time
                  </button>
                  <button className="border-2 border-border rounded-xl py-3 font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                    Monthly
                  </button>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">100% Transparent</p>
                    <p>{"Your donation is tax-deductible. Secure payment processing."}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-secondary text-secondary-foreground py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                Donate Now
              </button>
            </div>
          </div>

          {/* Volunteer */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Become a Volunteer</h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join our community of dedicated volunteers and make a hands-on impact in the lives of those who need it
              most.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Community Events</h4>
                  <p className="text-sm text-muted-foreground">Participate in local programs and activities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Skills-Based Volunteering</h4>
                  <p className="text-sm text-muted-foreground">Use your professional skills to support our mission</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Fundraising</h4>
                  <p className="text-sm text-muted-foreground">Organize events and campaigns to raise awareness</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
              Apply to Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
