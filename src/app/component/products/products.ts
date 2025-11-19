import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icatogery } from '../../models/icatogery';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from '../../services/api-product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule], 
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
categorys:Icatogery[] ;
products:Iproduct[];
filteredProducts:Iproduct[] = [];
TotalOrderPrice:number=0;
selectedccategoryid=0;

constructor(
  private apiProductService: ApiProductService,
  private route: ActivatedRoute
){
    this.products = [];
    this.categorys = [];
}

ngOnInit(): void {
  // Check if category ID is passed from query params
  this.route.queryParams.subscribe(params => {
    if (params['categoryId']) {
      this.selectedccategoryid = Number(params['categoryId']);
    }
  });

  // Fetch products from API when component initializes
  this.apiProductService.getAllProducts().subscribe({
    next: (data: Iproduct[]) => {
      this.products = data;
      this.applyFilter();
      console.log('Products loaded from API:', data);
    },
    error: (err) => {
      console.error('Error loading products:', err);
    }
  });

  // Fetch categories from API
  this.apiProductService.getAllCategories().subscribe({
    next: (data: Icatogery[]) => {
      this.categorys = data;
      console.log('Categories loaded from API:', data);
    },
    error: (err) => {
      console.error('Error loading categories:', err);
      // Fallback to hardcoded categories if API fails
      this.categorys = [
        {id:1,name:"Computing & Laptops"},
        {id:2,name:"Smartphones & Tablets"},
        {id:3,name:"Peripherals & Monitors"},
        {id:4,name:"Audio Equipment"},
        {id:5,name:"Home & Kitchen Appliances"}
      ];
    }
  });
}

// Apply filter when category selection changes
onCategoryChange(): void {
  // Convert to number to ensure proper comparison
  this.selectedccategoryid = Number(this.selectedccategoryid);
  this.applyFilter();
  console.log('Category changed to:', this.selectedccategoryid);
}

// Filter products based on selected category
applyFilter(): void {
  console.log('Filtering with categoryId:', this.selectedccategoryid, 'Type:', typeof this.selectedccategoryid);
  console.log('Total products:', this.products.length);
  
  if (this.selectedccategoryid === 0) {
    this.filteredProducts = this.products;
  } else {
    this.filteredProducts = this.products.filter(
      product => {
        const match = product.catId === this.selectedccategoryid;
        console.log(`Product ${product.id} catId: ${product.catId}, Selected: ${this.selectedccategoryid}, Match: ${match}`);
        return match;
      }
    );
  }
  console.log('Filtered products count:', this.filteredProducts.length);
}

// Clear the category filter
clearFilter(): void {
  this.selectedccategoryid = 0;
  this.applyFilter();
}

// Get selected category name
getSelectedCategoryName(): string {
  if (this.selectedccategoryid === 0) {
    return 'All Categories';
  }
  const category = this.categorys.find(c => c.id === this.selectedccategoryid);
  return category ? category.name : 'Unknown';
}

buy(count:string,price:number){
  if (count && Number(count) > 0) {
    this.TotalOrderPrice += Number(count) * price;
  }
}

trackitem(index:number,item:Iproduct){
  return item.id;
}

}