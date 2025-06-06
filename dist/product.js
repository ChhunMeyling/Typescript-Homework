"use strict";
// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   images: string[];
// };
// function createProductCard(product: Product): string {
//   const imageUrl = product.images?.[0] || product.thumbnail;
//   return `
//     <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
//       <div class="bg-gray-200 dark:bg-gray-600 relative">
//         <img src="${imageUrl}" alt="${product.title}" class="w-full object-contain" />
//         <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">New</div>
//       </div>
//       <div class="p-6">
//         <h3 class="text-xl font-bold mb-2">${product.title}</h3>
//         <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${product.description}</p>
//         <div class="flex justify-between items-center">
//           <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">$${product.price}</span>
//           <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Details</button>
//         </div>
//       </div>
//     </div>
//   `;
// }
// function renderProducts(products: Product[]) {
//   const container = document.getElementById("product-grid");
//   if (!container) return;
//   container.innerHTML = products.slice(0, 6).map(createProductCard).join("");
// }
// function renderSkeletons(count: number = 6) {
//   const container = document.getElementById("product-grid");
//   if (!container) return;
//   const skeletonHTML = Array(count)
//     .fill(0)
//     .map(() => `
//       <div class="animate-pulse bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
//         <div class="bg-gray-300 dark:bg-gray-600 h-48 w-full"></div>
//         <div class="p-6 space-y-4">
//           <div class="h-6 bg-gray-300 dark:bg-gray-500 rounded w-3/4"></div>
//           <div class="h-4 bg-gray-300 dark:bg-gray-500 rounded w-full"></div>
//           <div class="h-4 bg-gray-300 dark:bg-gray-500 rounded w-5/6"></div>
//           <div class="flex justify-between items-center pt-4">
//             <div class="h-6 bg-gray-300 dark:bg-gray-500 rounded w-1/3"></div>
//             <div class="h-8 bg-gray-300 dark:bg-gray-500 rounded w-20"></div>
//           </div>
//         </div>
//       </div>
//     `)
//     .join("");
//   container.innerHTML = skeletonHTML;
// }
// // Render skeletons first
// renderSkeletons();
// // Then fetch and render products
// fetch("https://dummyjson.com/products")
//   .then(res => res.json())
//   .then(data => renderProducts(data.products))
//   .catch(err => console.error("Failed to load products:", err));
