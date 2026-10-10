import type { Product } from '@/data/catalogue';
export type CartLine={key:string;productId:string;size?:string;color?:string;quantity:number};
const read=<T,>(key:string,fallback:T):T=>{try{const value=localStorage.getItem(key);return value?JSON.parse(value) as T:fallback;}catch{return fallback;}};
const write=(key:string,value:unknown)=>{try{localStorage.setItem(key,JSON.stringify(value));}catch{/* Private browsing may disable storage. */}};
export const localStore={
 getCart:()=>read<CartLine[]>('yh-cart',[]),setCart:(x:CartLine[])=>write('yh-cart',x),
 getWishlist:()=>read<string[]>('yh-wishlist',[]),setWishlist:(x:string[])=>write('yh-wishlist',x),
 getViewed:()=>read<string[]>('yh-viewed',[]),setViewed:(x:string[])=>write('yh-viewed',x),
 getDraft:()=>read<Record<string,unknown>>('yh-custom-draft',{}),setDraft:(x:Record<string,unknown>)=>write('yh-custom-draft',x),
 getRequests:()=>read<Record<string,unknown>[]>('yh-custom-requests',[]),setRequests:(x:Record<string,unknown>[])=>write('yh-custom-requests',x),
 getOrders:()=>read<Record<string,unknown>[]>('yh-demo-orders',[]),setOrders:(x:Record<string,unknown>[])=>write('yh-demo-orders',x),
 getNewsletter:()=>read<string[]>('yh-newsletter',[]),setNewsletter:(x:string[])=>write('yh-newsletter',x),
 getAnnouncementDismissed:()=>read<boolean>('yh-announcement-dismissed',false),dismissAnnouncement:()=>write('yh-announcement-dismissed',true)
};
export const formatMoney=(amount:number)=>`GHS ${amount.toLocaleString('en-GH')}`;
export function makeLine(product:Product,size?:string,color?:string,quantity=1):CartLine {
 return {key:[product.id,size||'',color||''].join('::'),productId:product.id,size,color,quantity};
}
