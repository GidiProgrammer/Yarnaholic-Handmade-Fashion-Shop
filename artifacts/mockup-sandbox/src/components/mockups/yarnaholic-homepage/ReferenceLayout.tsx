import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import "./_group.css";

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

const categories = [
  { name: "Crochet Clothing", image: "editorial-dress.jpg", filter: "Clothing" },
  { name: "Bags & Accessories", image: "crochet-bag.jpg", filter: "Bags" },
  { name: "Headwear & Small Pieces", image: "crochet-hat.jpg", filter: "Headwear" },
  { name: "Home & Gifts", image: "crochet-flowers.jpg", filter: "Gifts" },
  { name: "Custom Creations", image: "crochet-set.jpg", filter: "All pieces" },
];

const styles = `
.yh-reference {
  --ref-line: #e8dfd6;
  --ref-muted: #786e68;
  overflow: hidden;
}
.yh-reference .ref-topline {
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 max(26px, calc((100vw - 1320px) / 2));
  border-bottom: 1px solid var(--ref-line);
  color: #756c65;
  font-size: 9px;
  letter-spacing: .09em;
}
.yh-reference .ref-topline-note { text-transform: uppercase; }
.yh-reference .ref-top-tools { display: flex; gap: 17px; align-items: center; }
.yh-reference .ref-top-tools a { display: inline-flex; align-items: center; gap: 5px; }
.yh-reference .ref-header {
  position: relative;
  z-index: 3;
  background: var(--ivory);
}
.yh-reference .ref-brand-row {
  width: min(1320px, calc(100% - 64px));
  min-height: 74px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yh-reference .ref-brand {
  display: inline-flex;
  align-items: center;
}
.yh-reference .ref-brand-logo {
  display: block;
  width: 200px;
  height: auto;
}
.yh-reference .ref-tools { display: flex; align-items: center; gap: 17px; }
.yh-reference .ref-icon-button {
  display: inline-grid;
  width: 30px;
  height: 30px;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}
.yh-reference .ref-bag-link { position: relative; }
.yh-reference .ref-bag-dot {
  position: absolute;
  top: 0;
  right: -1px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rose);
}
.yh-reference .ref-menu-button { display: none; }
.yh-reference .ref-navigation {
  min-height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(22px, 3.1vw, 45px);
  border-top: 1px solid var(--ref-line);
  border-bottom: 1px solid var(--ref-line);
  padding: 0 20px;
  color: #4d4540;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .025em;
}
.yh-reference .ref-navigation a {
  position: relative;
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  white-space: nowrap;
}
.yh-reference .ref-navigation a::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  background: var(--berry);
  content: "";
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .2s ease;
}
.yh-reference .ref-navigation a:hover::after,
.yh-reference .ref-navigation a:focus-visible::after { transform: scaleX(1); }
.yh-reference .ref-search {
  width: min(1320px, calc(100% - 64px));
  margin: 0 auto;
  padding: 14px 0;
  border-bottom: 1px solid var(--ref-line);
}
.yh-reference .ref-search label {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--berry);
}
.yh-reference .ref-search input {
  width: 100%;
  min-height: 36px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--ink);
  font: 13px var(--app-font-sans);
}
.yh-reference .ref-hero {
  position: relative;
  width: min(1320px, calc(100% - 64px));
  height: clamp(350px, 39vw, 490px);
  min-height: 350px;
  margin: 22px auto 0;
  overflow: hidden;
  background: #dfd1c8;
}
.yh-reference .ref-hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 58% 39%;
}
.yh-reference .ref-hero::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(250,247,242,.98) 0%, rgba(250,247,242,.92) 30%, rgba(250,247,242,.38) 51%, rgba(41,37,34,.02) 78%);
  content: "";
}
.yh-reference .ref-hero-copy {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: clamp(28px, 6vw, 83px);
  width: min(430px, 46%);
  transform: translateY(-50%);
}
.yh-reference .ref-hero-kicker {
  display: block;
  margin-bottom: 14px;
  color: var(--berry);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .19em;
  text-transform: uppercase;
}
.yh-reference .ref-hero h1 {
  margin: 0;
  color: #312924;
  font: clamp(43px, 5vw, 68px)/.99 "Instrument Serif", var(--app-font-serif);
  letter-spacing: -.045em;
}
.yh-reference .ref-hero-copy p {
  max-width: 310px;
  margin: 17px 0 20px;
  color: #62574f;
  font-size: 11px;
  line-height: 1.8;
}
.yh-reference .ref-hero-cta {
  display: inline-flex;
  min-height: 41px;
  align-items: center;
  gap: 16px;
  padding: 0 15px;
  background: var(--berry);
  color: #fff8f4;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .04em;
}
.yh-reference .ref-hero-stamp {
  position: absolute;
  right: 28px;
  bottom: 23px;
  z-index: 1;
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.75);
  border-radius: 50%;
  color: white;
  font: 12px/1.1 var(--app-font-serif);
  text-align: center;
  text-shadow: 0 1px 8px #38241d;
  transform: rotate(-9deg);
}
.yh-reference .ref-highlights {
  width: min(1180px, calc(100% - 64px));
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 26px 0 28px;
  border-bottom: 1px solid var(--ref-line);
}
.yh-reference .ref-highlight {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
}
.yh-reference .ref-highlight:first-child { padding-left: 4px; }
.yh-reference .ref-highlight + .ref-highlight { border-left: 1px solid var(--ref-line); }
.yh-reference .ref-highlight-icon {
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  display: grid;
  place-items: center;
  border: 1px solid #e4d5cc;
  border-radius: 50%;
  color: var(--berry);
}
.yh-reference .ref-highlight strong {
  display: block;
  margin-bottom: 3px;
  font: 15px/1.1 var(--app-font-serif);
}
.yh-reference .ref-highlight span:last-child {
  display: block;
  color: var(--ref-muted);
  font-size: 9px;
  line-height: 1.55;
}
.yh-reference .ref-category-band {
  padding: 30px 0 34px;
  background: #f2ece6;
}
.yh-reference .ref-category-wrap {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
}
.yh-reference .ref-section-overline {
  display: block;
  margin-bottom: 6px;
  color: var(--berry);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .18em;
  text-align: center;
  text-transform: uppercase;
}
.yh-reference .ref-categories {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
}
.yh-reference .ref-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--ink);
  text-align: center;
}
.yh-reference .ref-category-image {
  width: clamp(90px, 10vw, 125px);
  aspect-ratio: 1;
  overflow: hidden;
  border: 4px solid rgba(255,255,255,.65);
  border-radius: 50%;
  background: #e6d9ce;
  box-shadow: 0 3px 11px rgba(70, 48, 37, .08);
}
.yh-reference .ref-category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}
.yh-reference .ref-category:hover .ref-category-image img { transform: scale(1.06); }
.yh-reference .ref-category-name {
  max-width: 150px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 9px;
  font: 16px/1.05 var(--app-font-serif);
}
.yh-reference .ref-category-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: 4px;
  padding: 5px 9px;
  border-radius: 999px;
  background: var(--berry);
  color: #fff7f2;
  font-size: 8px;
  letter-spacing: .03em;
}
.yh-reference .ref-products-section {
  padding: 51px 0 59px;
}
.yh-reference .ref-section-heading {
  width: min(1320px, calc(100% - 64px));
  margin: 0 auto 24px;
  text-align: center;
}
.yh-reference .ref-section-heading h2 {
  max-width: 660px;
  margin: 0 auto;
  color: #342d28;
  font: clamp(30px, 3vw, 40px)/1.05 var(--app-font-serif);
  letter-spacing: -.025em;
}
.yh-reference .ref-section-heading p {
  margin: 9px 0 0;
  color: var(--ref-muted);
  font-size: 10px;
}
.yh-reference .ref-product-grid {
  width: min(1320px, calc(100% - 64px));
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px 17px;
  margin: 0 auto;
}
.yh-reference .ref-product-card { position: relative; min-width: 0; }
.yh-reference .ref-product-photo {
  position: relative;
  overflow: hidden;
  aspect-ratio: .83;
  background: #e8ded4;
}
.yh-reference .ref-product-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
}
.yh-reference .ref-product-card:hover .ref-product-photo img { transform: scale(1.035); }
.yh-reference .ref-product-status {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 7px 9px;
  background: rgba(250,247,242,.95);
  color: #443b35;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.yh-reference .ref-product-heart {
  position: absolute;
  top: 7px;
  right: 8px;
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: rgba(250,247,242,.88);
  color: var(--berry);
  cursor: pointer;
}
.yh-reference .ref-product-info {
  display: flex;
  justify-content: space-between;
  gap: 9px;
  padding: 10px 1px 0;
}
.yh-reference .ref-product-info h3 {
  margin: 0;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.5;
}
.yh-reference .ref-product-info p {
  margin: 4px 0 0;
  color: var(--ref-muted);
  font-size: 8px;
}
.yh-reference .ref-price {
  padding-top: 1px;
  color: #493d36;
  font-size: 9px;
  font-weight: 700;
  white-space: nowrap;
}
.yh-reference .ref-empty {
  grid-column: 1 / -1;
  padding: 38px;
  background: #f2ece6;
  text-align: center;
}
.yh-reference .ref-empty h3 { margin: 0 0 7px; font: 24px var(--app-font-serif); }
.yh-reference .ref-empty p { margin: 0; color: var(--ref-muted); font-size: 11px; }
.yh-reference .ref-editorial {
  width: min(1320px, calc(100% - 64px));
  min-height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 55px;
  background: #f0e8dd;
}
.yh-reference .ref-editorial-image {
  min-height: 300px;
  overflow: hidden;
}
.yh-reference .ref-editorial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.yh-reference .ref-editorial-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(27px, 5vw, 66px);
}
.yh-reference .ref-editorial-copy h2 {
  max-width: 440px;
  margin: 9px 0;
  font: clamp(32px, 4vw, 50px)/1.04 var(--app-font-serif);
  letter-spacing: -.025em;
}
.yh-reference .ref-editorial-copy p {
  max-width: 370px;
  margin: 0 0 20px;
  color: #655a53;
  font-size: 10px;
  line-height: 1.8;
}
.yh-reference .ref-editorial-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--berry);
  color: var(--berry);
  font-size: 9px;
  font-weight: 700;
}
.yh-reference .ref-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 19px max(32px, calc((100vw - 1320px) / 2));
  border-top: 1px solid var(--ref-line);
  color: var(--ref-muted);
  font-size: 9px;
}
.yh-reference .ref-footer-brand { display: inline-flex; align-items: center; }
.yh-reference .ref-footer-logo { display: block; width: 155px; height: auto; }
.yh-reference a:focus-visible,
.yh-reference button:focus-visible,
.yh-reference input:focus-visible { outline: 2px solid var(--berry); outline-offset: 3px; }
@media (max-width: 800px) {
  .yh-reference .ref-topline { padding: 0 16px; }
  .yh-reference .ref-top-tools { gap: 10px; }
  .yh-reference .ref-brand-row,
  .yh-reference .ref-search { width: calc(100% - 32px); }
  .yh-reference .ref-brand-row { min-height: 64px; }
  .yh-reference .ref-brand-logo { width: 155px; }
  .yh-reference .ref-tools { gap: 9px; }
  .yh-reference .ref-menu-button { display: inline-grid; }
  .yh-reference .ref-navigation {
    justify-content: flex-start;
    gap: 23px;
    overflow-x: auto;
    padding: 0 16px;
    scrollbar-width: none;
  }
  .yh-reference .ref-navigation:not(.is-open) { display: none; }
  .yh-reference .ref-navigation.is-open { display: flex; }
  .yh-reference .ref-navigation::-webkit-scrollbar { display: none; }
  .yh-reference .ref-hero {
    width: calc(100% - 24px);
    height: 455px;
    min-height: 0;
    margin-top: 12px;
  }
  .yh-reference .ref-hero-image { object-position: 60% 35%; }
  .yh-reference .ref-hero::after {
    background: linear-gradient(90deg, rgba(250,247,242,.97) 0%, rgba(250,247,242,.83) 52%, rgba(250,247,242,.15) 100%);
  }
  .yh-reference .ref-hero-copy { left: 22px; width: min(320px, 76%); }
  .yh-reference .ref-hero h1 { font-size: clamp(43px, 11vw, 56px); }
  .yh-reference .ref-hero-copy p { max-width: 255px; font-size: 10px; }
  .yh-reference .ref-hero-stamp { right: 14px; bottom: 14px; width: 56px; height: 56px; font-size: 10px; }
  .yh-reference .ref-highlights {
    width: calc(100% - 32px);
    grid-template-columns: 1fr;
    gap: 0;
    padding: 10px 0;
  }
  .yh-reference .ref-highlight,
  .yh-reference .ref-highlight:first-child { padding: 11px 3px; }
  .yh-reference .ref-highlight + .ref-highlight { border-top: 1px solid var(--ref-line); border-left: 0; }
  .yh-reference .ref-highlight strong { font-size: 14px; }
  .yh-reference .ref-category-band { padding: 24px 0 27px; }
  .yh-reference .ref-category-wrap { width: calc(100% - 24px); }
  .yh-reference .ref-categories {
    grid-template-columns: repeat(5, 118px);
    gap: 8px;
    overflow-x: auto;
    padding: 7px 1px 4px;
    scrollbar-width: none;
  }
  .yh-reference .ref-categories::-webkit-scrollbar { display: none; }
  .yh-reference .ref-category-image { width: 82px; border-width: 3px; }
  .yh-reference .ref-category-name { font-size: 14px; }
  .yh-reference .ref-section-overline { margin-bottom: 13px; }
  .yh-reference .ref-products-section { padding: 38px 0 42px; }
  .yh-reference .ref-section-heading,
  .yh-reference .ref-product-grid { width: calc(100% - 28px); }
  .yh-reference .ref-section-heading { margin-bottom: 19px; }
  .yh-reference .ref-section-heading h2 { font-size: 33px; }
  .yh-reference .ref-product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 11px; }
  .yh-reference .ref-product-photo { aspect-ratio: .78; }
  .yh-reference .ref-product-status { top: 7px; left: 6px; padding: 6px; font-size: 6px; }
  .yh-reference .ref-product-info { flex-wrap: wrap; padding-top: 8px; }
  .yh-reference .ref-product-info h3 { font-size: 9px; }
  .yh-reference .ref-price { margin-left: 0; font-size: 8px; }
  .yh-reference .ref-editorial {
    width: calc(100% - 24px);
    grid-template-columns: 1fr;
    margin-bottom: 34px;
  }
  .yh-reference .ref-editorial-image { min-height: 235px; max-height: 275px; }
  .yh-reference .ref-editorial-copy { padding: 27px 23px 31px; }
  .yh-reference .ref-editorial-copy h2 { font-size: 37px; }
  .yh-reference .ref-footer { padding: 16px; font-size: 8px; }
  .yh-reference .ref-footer-logo { width: 128px; }
}
@media (max-width: 400px) {
  .yh-reference .ref-topline { font-size: 8px; }
  .yh-reference .ref-top-tools { gap: 8px; }
  .yh-reference .ref-hero { height: 428px; }
}
`;

export function ReferenceLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedProducts, setSavedProducts] = useState<string[]>([]);

  const visibleProducts = useMemo(
    () => products.filter((product) => product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())),
    [searchTerm],
  );

  const toggleSavedProduct = (name: string) => {
    setSavedProducts((saved) => saved.includes(name) ? saved.filter((item) => item !== name) : [...saved, name]);
  };

  return (
    <div className="yh-reference">
      <style>{styles}</style>
      <div className="ref-topline">
        <span className="ref-topline-note">Made with care, one stitch at a time</span>
        <div className="ref-top-tools">
          <a href="#story">Our story</a>
          <a href="#custom">Custom designs</a>
        </div>
      </div>
      <header className="ref-header">
        <div className="ref-brand-row">
          <button
            className="ref-icon-button ref-menu-button"
            aria-label={mobileMenuOpen ? "Close collection menu" : "Open collection menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <a className="ref-brand" href="#top" aria-label="Yarnaholic home">
            <img className="ref-brand-logo" src="/__mockup/images/yarnaholic-logo.png" alt="" />
          </a>
          <div className="ref-tools" aria-label="Shop tools">
            <button className="ref-icon-button" aria-label={searchOpen ? "Close search" : "Search products"} onClick={() => setSearchOpen((open) => !open)} type="button">
              {searchOpen ? <X size={17} /> : <Search size={17} />}
            </button>
            <a className="ref-icon-button" aria-label={`Saved pieces, ${savedProducts.length}`} href="#products">
              <Heart size={17} />
            </a>
            <a className="ref-icon-button ref-bag-link" aria-label="Shopping bag" href="#products">
              <ShoppingBag size={17} /><span className="ref-bag-dot" />
            </a>
          </div>
        </div>
        <nav className={`ref-navigation${mobileMenuOpen ? " is-open" : ""}`} aria-label="Collection navigation">
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Shop all</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Clothing</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Bags &amp; Accessories</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Home &amp; Gifts</a>
            <a href="#custom" onClick={() => setMobileMenuOpen(false)}>Custom designs</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)}>Our story</a>
        </nav>
        {searchOpen && (
          <form className="ref-search" onSubmit={(event) => event.preventDefault()}>
            <label>
              <Search size={17} />
              <input
                autoFocus
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Find a piece by name"
                aria-label="Search pieces by name"
              />
            </label>
          </form>
        )}
      </header>

      <main id="top">
        <section className="ref-hero" aria-labelledby="yh-reference-title">
          <img
            className="ref-hero-image"
            src="/__mockup/images/yarnaholic-editorial-hero.jpg"
            alt="Handmade crochet pieces styled for everyday wear"
          />
          <div className="ref-hero-copy">
            <span className="ref-hero-kicker">Handmade. Uncommon. Yours.</span>
            <h1 id="yh-reference-title">Crochet, with a point of view.</h1>
            <p>Distinctive handmade pieces, thoughtfully made to feel entirely your own.</p>
            <a className="ref-hero-cta" href="#products">Shop the collection <ArrowRight size={14} /></a>
          </div>
          <span className="ref-hero-stamp">Made<br />by hand</span>
        </section>

        <section className="ref-highlights" aria-label="Yarnaholic collections">
          <div className="ref-highlight">
            <span className="ref-highlight-icon"><Heart size={15} /></span>
            <div><strong>Wear it your way</strong><span>Crochet clothing with a little character.</span></div>
          </div>
          <div className="ref-highlight">
            <span className="ref-highlight-icon"><ShoppingBag size={15} /></span>
            <div><strong>Small things, kept close</strong><span>Bags, accessories and thoughtful gifts.</span></div>
          </div>
          <div className="ref-highlight">
            <span className="ref-highlight-icon"><ArrowDownRight size={15} /></span>
            <div><strong>Dream it in stitches</strong><span>Explore a custom design made around your idea.</span></div>
          </div>
        </section>

        <section className="ref-category-band" id="categories" aria-label="Shop collections">
          <div className="ref-category-wrap">
            <span className="ref-section-overline">Find your thread</span>
            <div className="ref-categories">
              {categories.map((category) => (
                <a className="ref-category" href={category.filter === "All pieces" ? "#custom" : "#products"} key={category.name}>
                  <span className="ref-category-image">
                    <img src={`/__mockup/images/${category.image}`} alt="" loading="lazy" />
                  </span>
                  <span className="ref-category-name">{category.name}</span>
                  <span className="ref-category-pill">Explore <ArrowRight size={10} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="ref-products-section" id="products" aria-labelledby="ref-products-heading">
          <div className="ref-section-heading">
            <span className="ref-section-overline">The pieces we keep close</span>
            <h2 id="ref-products-heading">A little something to make yours.</h2>
            <p>Explore the Yarnaholic collection.</p>
          </div>
          <div className="ref-product-grid">
            {visibleProducts.length > 0 ? visibleProducts.map((product) => (
              <article className="ref-product-card" key={product.name}>
                <a href="#custom" aria-label={`Learn about ${product.name}`}>
                  <div className="ref-product-photo">
                    <img src={`/__mockup/images/${product.image}`} alt={product.name} loading="lazy" />
                    <span className="ref-product-status">{product.status}</span>
                  </div>
                </a>
                <button
                  className="ref-product-heart"
                  type="button"
                  aria-label={savedProducts.includes(product.name) ? `Remove ${product.name} from saved pieces` : `Save ${product.name}`}
                  aria-pressed={savedProducts.includes(product.name)}
                  onClick={() => toggleSavedProduct(product.name)}
                >
                  <Heart size={15} fill={savedProducts.includes(product.name) ? "currentColor" : "none"} />
                </button>
                <div className="ref-product-info">
                  <div><h3>{product.name}</h3><p>{product.category} · Sample catalogue</p></div>
                  <span className="ref-price">{product.price}</span>
                </div>
              </article>
            )) : (
              <div className="ref-empty">
                <h3>No pieces found</h3>
                <p>Try another search, or browse the full collection.</p>
              </div>
            )}
          </div>
        </section>

        <section className="ref-editorial" id="custom">
          <div className="ref-editorial-image">
            <img src="/__mockup/images/crochet-set.jpg" alt="Colorful handmade crochet pieces" loading="lazy" />
          </div>
          <div className="ref-editorial-copy" id="story">
            <span className="ref-section-overline" style={{ textAlign: "left", marginBottom: 0 }}>A little something only you could imagine</span>
            <h2>Have something special in mind?</h2>
            <p>Your idea, your colors, your fit. Tell us what you envision, and let's bring it to life, stitch by stitch.</p>
            <a className="ref-editorial-link" href="#custom">Request a custom design <ArrowRight size={13} /></a>
          </div>
        </section>
      </main>
      <footer className="ref-footer">
        <a className="ref-footer-brand" href="#top" aria-label="Yarnaholic home"><img className="ref-footer-logo" src="/__mockup/images/yarnaholic-logo.png" alt="" /></a>
        <span>Handmade. Uncommon. Yours.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
