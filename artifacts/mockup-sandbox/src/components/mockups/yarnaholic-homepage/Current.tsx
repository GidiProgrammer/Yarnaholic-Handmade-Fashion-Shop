import { ArrowDownRight, ArrowRight, Heart, Search, ShoppingBag } from "lucide-react";
import "./_group.css";

const categories = [
  { name: "Crochet Clothing", image: "editorial-dress.jpg" },
  { name: "Bags & Accessories", image: "crochet-bag.jpg" },
  { name: "Headwear & Small Pieces", image: "crochet-hat.jpg" },
  { name: "Home & Gifts", image: "crochet-home.jpg" },
  { name: "Custom Creations", image: "crochet-set.jpg" },
];

const products = [
  { name: "Amara Crochet Dress", category: "Clothing", price: "GHS 650", status: "Made to order", image: "editorial-dress.jpg" },
  { name: "Solstice Crochet Top", category: "Clothing", price: "GHS 220", status: "Made to order", image: "crochet-set.jpg" },
  { name: "Bloom Mini Tote", category: "Bags", price: "GHS 180", status: "Ready to ship", image: "crochet-bag.jpg" },
  { name: "Petal Bucket Hat", category: "Headwear", price: "GHS 120", status: "Ready to ship", image: "crochet-hat.jpg" },
  { name: "Sunday Crochet Cardigan", category: "Clothing", price: "GHS 480", status: "Made to order", image: "crochet-home.jpg" },
  { name: "Sienna Crochet Skirt", category: "Clothing", price: "GHS 320", status: "Made to order", image: "crochet-set.jpg" },
  { name: "Wildflower Bouquet", category: "Gifts", price: "GHS 150", status: "Made to order", image: "crochet-flowers.jpg" },
  { name: "Everyday Crochet Tote", category: "Bags", price: "GHS 200", status: "Ready to ship", image: "crochet-bag.jpg" },
];

export function Current() {
  return (
    <div className="yh-current">
      <div className="yh-announcement">MADE WITH CARE, ONE STITCH AT A TIME</div>
      <header className="yh-header">
        <div className="yh-wrap yh-header-inner">
          <a className="yh-brand" href="#">
            <span className="yh-brand-mark">Y</span> yarnaholic
          </a>
          <nav className="yh-nav" aria-label="Main navigation">
            <a href="#">Shop</a><a href="#">Clothing</a><a href="#">Bags & Accessories</a>
            <a href="#">Home & Gifts</a><a href="#">Custom designs</a><a href="#">Our story</a>
          </nav>
          <div className="yh-actions" aria-label="Shop tools">
            <Search size={17}/><Heart size={17}/><ShoppingBag size={17}/>
          </div>
        </div>
      </header>

      <main>
        <section className="home-hero" aria-labelledby="current-hero-title">
          <div className="home-hero-copy">
            <span className="home-hero-index">01 / THE COLLECTION</span>
            <span className="yh-eyebrow">HANDMADE. UNCOMMON. YOURS.</span>
            <h1 id="current-hero-title">Crochet, with a<br/>point of view.</h1>
            <p>Distinctive handmade pieces, thoughtfully crafted to make your style entirely your own.</p>
            <div className="home-hero-actions">
              <a className="home-hero-primary" href="#">Shop the collection <ArrowRight size={15}/></a>
              <a className="home-hero-secondary" href="#">Create your own</a>
            </div>
          </div>
          <div className="home-hero-media">
            <img className="home-hero-image" src="/__mockup/images/yarnaholic-editorial-hero.jpg" alt="A model in a handmade ivory crochet top and burgundy skirt"/>
            <span className="home-hero-caption">MADE BY HAND. WORN YOUR WAY.</span>
          </div>
        </section>

        <section className="yh-section yh-wrap">
          <div className="yh-section-head">
            <div><span className="yh-eyebrow">FIND YOUR THREAD</span><h2>Shop by feeling.</h2></div>
            <a className="yh-text-link" href="#">All pieces <ArrowRight size={14}/></a>
          </div>
          <div className="yh-category-grid">
            {categories.map((category) => (
              <a className="yh-category-card" href="#" key={category.name}>
                <img src={`/__mockup/images/${category.image}`} alt={`${category.name} crochet collection`} loading="lazy"/>
                <span className="yh-category-label">{category.name}<ArrowDownRight size={15}/></span>
              </a>
            ))}
          </div>
        </section>

        <section className="yh-section yh-products">
          <div className="yh-wrap">
            <div className="yh-section-head">
              <div><span className="yh-eyebrow">THE PIECES WE KEEP CLOSE</span><h2>Pieces worth keeping.</h2></div>
              <a className="yh-text-link" href="#">View all pieces <ArrowRight size={14}/></a>
            </div>
            <div className="yh-product-grid">
              {products.map((product) => (
                <article key={product.name}>
                  <div className="yh-product-media">
                    <img src={`/__mockup/images/${product.image}`} alt={product.name} loading="lazy"/>
                    <span className="yh-product-tag">{product.status}</span>
                  </div>
                  <div className="yh-product-info">
                    <div><h3>{product.name}</h3><p>{product.category} · Sample catalogue</p></div>
                    <span className="yh-product-price">{product.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="yh-section yh-wrap">
          <div className="yh-editorial">
            <img src="/__mockup/images/crochet-set.jpg" alt="A colorful handmade crochet set"/>
            <div className="yh-editorial-copy">
              <span className="yh-eyebrow">A LITTLE SOMETHING ONLY YOU COULD IMAGINE</span>
              <h2>Have something special in mind?</h2>
              <p>Your idea, your colors, your fit. Tell us what you envision, and let's bring it to life, stitch by stitch.</p>
              <a className="yh-text-link" href="#">Request a custom design <ArrowRight size={14}/></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
