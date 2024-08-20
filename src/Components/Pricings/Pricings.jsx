import React from 'react'
import "../Pricings/Pricings.css"

const pricingPlans = [
  {
    title: 'Basic Plan',
    price: '$99/month',
    features: [
      '1 Property Listing',
      'Basic Property Insights',
      'Email Support',
    ],
    buttonText: 'Get Started',
    buttonLink: '/contact'
  },
  {
    title: 'Standard Plan',
    price: '$199/month',
    features: [
      '5 Property Listings',
      'Advanced Property Insights',
      'Phone & Email Support',
      'Monthly Market Reports',
    ],
    buttonText: 'Get Started',
    buttonLink: '/contact'
  },
  {
    title: 'Premium Plan',
    price: '$299/month',
    features: [
      'Unlimited Property Listings',
      'Premium Property Insights',
      '24/7 Support',
      'Weekly Market Reports',
      'Personalized Consultation',
    ],
    buttonText: 'Get Started',
    buttonLink: '/contact'
  }
];

function Pricings() {
  return (
    <div className="pricing">
      <section className="pricing-hero-section">
        <div className="hero-content">
          <h1>Our Pricing Plans</h1>
          <p>Explore our comprehensive pricing plans designed to suit various needs and budgets. Whether you're just starting out or looking for a complete solution, we have a plan for you.</p>
          <p>Our pricing plans are transparent with no hidden fees, providing you with the flexibility to choose the best option based on your requirements. Dive into the details below to find the perfect plan for you.</p>
        </div>
      </section>

      <section className="pricing-details">
        <h2>Pricing Overview</h2>
        <p>We offer a range of pricing plans to accommodate different levels of engagement and service needs. Each plan is tailored to ensure you receive the best value for your investment.</p>
        <p>Choose from our Basic, Standard, or Premium plans, each designed to offer unique benefits and features. Detailed below are the key highlights of each plan to help you make an informed decision.</p>
      </section>

      <section className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href={plan.buttonLink} className="cta-button">{plan.buttonText}</a>
          </div>
        ))}
      </section>

      <section className="pricing-footer">
        <h2>Need More Information?</h2>
        <p>If you have any questions or need further assistance, please feel free to <a href="/contact">contact us</a>. Our team is here to help you choose the best plan that fits your needs and ensure a smooth experience.</p>
        <p>Thank you for considering our services. We look forward to helping you achieve your real estate goals.</p>
      </section>
    </div>
  );
}

export default Pricings
