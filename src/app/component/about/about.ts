import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <div class="about-container">
      <div class="about-header">
        <h1>About ShopHub</h1>
        <p>Your trusted e-commerce platform</p>
      </div>

      <div class="about-content">
        <section class="about-section">
          <h2>Our Story</h2>
          <p>
            ShopHub was founded with a simple mission: to bring the best products
            from around the world to your doorstep. We believe in providing quality,
            affordability, and exceptional customer service.
          </p>
        </section>

        <section class="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to making online shopping easy, secure, and enjoyable
            for every customer. With a wide range of products and competitive prices,
            we strive to be your go-to online shopping destination.
          </p>
        </section>

        <section class="about-section">
          <h2>Why Choose Us?</h2>
          <ul class="about-list">
            <li>✓ Wide selection of products</li>
            <li>✓ Competitive pricing</li>
            <li>✓ Fast and reliable shipping</li>
            <li>✓ Secure payment options</li>
            <li>✓ Excellent customer support</li>
            <li>✓ Easy returns and exchanges</li>
          </ul>
        </section>

        <section class="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? We'd love to hear from you!<br>
            Email: support@shophub.com<br>
            Phone: +1-800-SHOPHUB<br>
            Hours: Monday - Friday, 9 AM - 6 PM EST
          </p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem 0;
      max-width: 1000px;
      margin: 0 auto;
    }

    .about-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .about-header h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .about-header p {
      font-size: 1.1rem;
      color: #666;
    }

    .about-content {
      background: white;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    .about-section {
      margin-bottom: 2.5rem;
    }

    .about-section:last-child {
      margin-bottom: 0;
    }

    .about-section h2 {
      color: #667eea;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .about-section p {
      color: #666;
      line-height: 1.6;
      font-size: 1rem;
    }

    .about-list {
      list-style: none;
      padding: 0;
      color: #666;
    }

    .about-list li {
      padding: 0.5rem 0;
      font-size: 1rem;
      line-height: 1.8;
    }
  `]
})
export class About {}
