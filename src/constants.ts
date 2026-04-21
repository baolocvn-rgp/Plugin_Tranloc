/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Smart Watch Pro',
    description: 'Thiết kế sang trọng, tích hợp nhiều tính năng theo dõi sức khỏe và thông báo thông minh.',
    category: 'Công nghệ',
    price: '2.500.000 VNĐ',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Tai nghe Noise Cancel',
    description: 'Chống ồn chủ động, âm thanh chất lượng cao, thời lượng pin lên đến 40 giờ.',
    category: 'Âm thanh',
    price: '4.200.000 VNĐ',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Máy ảnh Mirrorless',
    description: 'Cảm biến full-frame, lấy nét siêu nhanh, quay phim 4K chuyên nghiệp.',
    category: 'Nhiếp ảnh',
    price: '18.500.000 VNĐ',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Loa Bluetooth Mini',
    description: 'Âm bass mạnh mẽ, chống nước IPX7, nhỏ gọn dễ dàng mang theo.',
    category: 'Âm thanh',
    price: '950.000 VNĐ',
    imageUrl: 'https://images.unsplash.com/photo-1608156639585-34a0a56ee6c9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Bàn phím Cơ RGB',
    description: 'Switch cao cấp, đèn nền RGB 16.8 triệu màu, thiết kế bền bỉ.',
    category: 'Công nghệ',
    price: '1.800.000 VNĐ',
    imageUrl: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop',
  }
];

export const CATEGORIES = ['Tất cả', ...new Set(PRODUCTS.map(p => p.category))];
