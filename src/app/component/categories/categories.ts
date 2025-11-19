import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiProductService } from '../../services/api-product.service';
import { Icatogery } from '../../models/icatogery';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  template: `
    <div class="categories-container">
      <div class="categories-header">
        <h1>📚 Product Categories</h1>
        <p>Browse our wide range of product categories</p>
      </div>

      <div class="categories-grid">
        <div class="category-card" *ngFor="let category of categories">
          <div class="category-icon">
            {{ getCategoryIcon(category.id) }}
          </div>
          <h3>{{ category.name }}</h3>
          <p>{{ getProductCount(category.id) }} products</p>
          <button class="btn-category" (click)="browseCategory(category.id)">Browse Category</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .categories-container {
      padding: 2rem 0;
      max-width: 1200px;
      margin: 0 auto;
    }

    .categories-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .categories-header h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .categories-header p {
      font-size: 1.1rem;
      color: #666;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }

    .category-card {
      background: white;
      border-radius: 0.75rem;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .category-card h3 {
      color: #333;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .category-card p {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .btn-category {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }

    .btn-category:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-category:active {
      transform: translateY(0);
    }
  `]
})
export class Categories implements OnInit {
  categories: Icatogery[] = [];
  productCounts: { [key: number]: number } = {};

  constructor(
    private apiProductService: ApiProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiProductService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error loading categories:', err);
      }
    });

    this.apiProductService.getAllProducts().subscribe({
      next: (products) => {
        this.categories.forEach(cat => {
          this.productCounts[cat.id] = products.filter(p => p.catId === cat.id).length;
        });
      }
    });
  }

  getProductCount(categoryId: number): number {
    return this.productCounts[categoryId] || 0;
  }

  getCategoryIcon(categoryId: number): string {
    const icons: { [key: number]: string } = {
      1: '💻',
      2: '📱',
      3: '🖥️',
      4: '🎧',
      5: '🍳'
    };
    return icons[categoryId] || '📦';
  }

  browseCategory(categoryId: number): void {
    this.router.navigate(['/products'], { queryParams: { categoryId: categoryId } });
  }
}
