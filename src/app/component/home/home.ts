import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="home-container">
      <section class="hero">
        <h1>Welcome to ShopHub</h1>
        <p>Your Ultimate Online Shopping Destination</p>
        <button class="btn-shop" (click)="navigateToProducts()">Start Shopping</button>
      </section>

      <section class="features">
        <h2>Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚚</div>
            <h3>Fast Shipping</h3>
            <p>Quick and reliable delivery to your doorstep</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Safe and encrypted payment processing</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>Hassle-free 30-day return policy</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⭐</div>
            <h3>Great Support</h3>
            <p>24/7 customer service available</p>
          </div>
        </div>
      </section>

      <section class="categories-preview">
        <h2>Shop by Category</h2>
        <p>Browse through our wide selection of products</p>
        <button class="btn-explore" (click)="navigateToCategories()">Explore Categories</button>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem 0;
    }

    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      border-radius: 0.75rem;
      margin-bottom: 3rem;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    .btn-shop {
      background: white;
      color: #667eea;
      border: none;
      padding: 0.75rem 2.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-shop:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .features {
      margin: 3rem 0;
    }

    .features h2 {
      text-align: center;
      font-size: 2rem;
      color: #333;
      margin-bottom: 2rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 0.75rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .feature-card p {
      color: #666;
      font-size: 0.9rem;
    }

    .categories-preview {
      text-align: center;
      background: #f8f9fa;
      padding: 3rem 2rem;
      border-radius: 0.75rem;
    }

    .categories-preview h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .categories-preview p {
      color: #666;
      font-size: 1.1rem;
    }
  `]
})
export class Home {
  constructor(private router: Router) {}

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  navigateToCategories(): void {
    this.router.navigate(['/categories']);
  }
}
