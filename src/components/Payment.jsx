"use client"

import { useState } from "react"
import { CreditCard, Lock, ArrowLeft, Heart } from "lucide-react"

export default function Payment({ setCurrentPage }) {
  const [donationAmount, setDonationAmount] = useState(100)
  const [donationType, setDonationType] = useState("one-time")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const quickAmounts = [25, 50, 100, 250, 500]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Payment submission:", { donationAmount, donationType, ...formData })
    alert("Payment processing would be handled by a payment gateway (Stripe, PayPal, etc.)")
  }

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage("donate")}
          className="flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">Complete Your Donation</h1>
          <p className="text-xl text-muted-foreground">Your generosity changes lives</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount)}
                        className={`border-2 rounded-xl py-3 font-semibold transition-colors ${
                          donationAmount === amount
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border text-foreground hover:border-primary"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      type="button"
                      className="border-2 border-border rounded-xl py-3 font-semibold text-foreground hover:border-primary col-span-3"
                    >
                      Custom Amount: ${donationAmount}
                    </button>
                  </div>
                </div>

                {/* Donation Type */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">Donation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDonationType("one-time")}
                      className={`border-2 rounded-xl py-3 font-semibold transition-colors ${
                        donationType === "one-time"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType("monthly")}
                      className={`border-2 rounded-xl py-3 font-semibold transition-colors ${
                        donationType === "monthly"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                      <input
                        type="text"
                        required
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                        <input
                          type="text"
                          required
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                        <input
                          type="text"
                          required
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                          placeholder="123"
                          maxLength="4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-xl flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Heart className="h-5 w-5" />
                  Complete Donation ${donationAmount}
                </button>
              </form>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-6">Donation Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Donation Amount</span>
                  <span className="font-semibold text-foreground">${donationAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-semibold text-foreground capitalize">{donationType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Fee</span>
                  <span className="font-semibold text-foreground">$0</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-lg font-bold text-primary">${donationAmount}</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Your Impact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Provides education for 5 children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Supplies meals for 20 families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Plants 50 trees for the environment</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Tax-deductible receipt will be sent to your email
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
