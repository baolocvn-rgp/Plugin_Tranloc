/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: string;
  imageUrl: string;
}

export type Tab = 'home' | 'contact';
