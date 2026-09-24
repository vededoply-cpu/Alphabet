/* ALPHABET - High-End Editorial E-Commerce & Hero Carousel Engine */

// SVG Icon Helper Definitions
const SVG_ICONS = {
  heartOutline: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
  heartFilled: `<svg class="svg-icon" viewBox="0 0 24 24" style="fill:#ef4444; stroke:#ef4444;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
  layers: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  eye: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  star: `<svg class="svg-icon-sm" viewBox="0 0 24 24" style="fill:var(--accent-gold); stroke:var(--accent-gold);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  bag: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`
};

// Product Database
const PRODUCTS_DATA = [
  // 1. Books & Notebooks
  {
    id: 'prod-1',
    name: 'Alphabet Classic Linen Journal (Hardcover)',
    category: 'books',
    categoryName: 'Books & Notebooks',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 128,
    colors: ['#c5a059', '#111111', '#2e4057'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller',
    desc: 'Hand-crafted linen hardcover journal featuring 200 pages of 100GSM acid-free fountain-pen friendly paper.'
  },
  {
    id: 'prod-2',
    name: 'Minimalist Thread-Bound Executive Notebook',
    category: 'books',
    categoryName: 'Books & Notebooks',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 94,
    colors: ['#e2d5c3', '#111111'],
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    tag: 'New Arrival',
    desc: 'Lay-flat thread-bound notebook with subtle dot-grid ruling, expansion inner pocket, and satin ribbon.'
  },
  {
    id: 'prod-3',
    name: 'Premium Leatherette Planner & Organiser 2026',
    category: 'books',
    categoryName: 'Books & Notebooks',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 210,
    colors: ['#a37f3a', '#111111', '#556b2f'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    tag: 'Signature',
    desc: 'Editorial weekly & monthly planner with goal setting trackers, gold foil stamping, and magnetic clasp.'
  },

  // 2. Pens & Writing
  {
    id: 'prod-4',
    name: 'Matte Brass Fountain Pen & Ink Set',
    category: 'pens',
    categoryName: 'Pens & Writing',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 86,
    colors: ['#d4af37', '#111111'],
    image: 'https://images.unsplash.com/photo-1585336261026-875a60a1c96b?auto=format&fit=crop&w=600&q=80',
    tag: 'Luxury',
    desc: 'Precision engineered solid brass fountain pen with German stainless steel medium nib and luxury presentation box.'
  },
  {
    id: 'prod-5',
    name: 'Architectural Gel Rollerball Pen (Pack of 3)',
    category: 'pens',
    categoryName: 'Pens & Writing',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.7,
    reviewsCount: 142,
    colors: ['#111111', '#ffffff', '#888888'],
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
    tag: 'Essential',
    desc: '0.5mm ultra-smooth quick-dry Japanese archival gel ink pens designed for skip-free daily writing.'
  },
  {
    id: 'prod-6',
    name: 'Pastel Highlighters & Fine Liner Set',
    category: 'pens',
    categoryName: 'Pens & Writing',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 78,
    colors: ['#ffb6c1', '#add8e6', '#e6e6fa'],
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
    tag: 'School & Art',
    desc: 'Dual-tip pastel aesthetic highlighters with water-based bleed-resistant ink.'
  },

  // 3. Office & A4 Paper
  {
    id: 'prod-7',
    name: 'A4 Premium Copier Paper (500 Sheets | 80 GSM | Brightness 94)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 310,
    colors: ['#ffffff'],
    image: 'Asset/a4_copier_paper.png',
    tag: 'Bestseller Ream',
    desc: '100% jam-free 80 GSM A4 copier paper featuring 94 ISO high brightness and 500 sheets per ream. Engineered for high-speed copiers, laser printers, and double-sided printing.'
  },
  {
    id: 'prod-14',
    name: 'A4 Premium Copier Paper Box (5 Reams Carton | 2500 Sheets)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 185,
    colors: ['#ffffff'],
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80',
    tag: 'Wholesale Box',
    desc: 'Bulk office carton containing 5 sealed reams (2500 sheets total) of 80 GSM A4 premium copier paper with 94 brightness in moisture-proof protective wrapper.'
  },
  {
    id: 'prod-8',
    name: 'Executive Expandable Document Folder',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 64,
    colors: ['#111111', '#2e4057'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80',
    tag: 'Filing',
    desc: '13-pocket expandable PP document file with color index tabs and secure elastic closure.'
  },

  // 4. Packaging Solutions (Spotlight BOPP Transparent Packaging Tape)
  {
    id: 'prod-9',
    name: 'BOPP Transparent Packaging Tape Roll (48mm x 65m)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 450,
    colors: ['#ffffff', '#8b5a2b'],
    image: 'Asset/bopp_clear_tape.jpg',
    tag: 'Industrial Tape',
    desc: 'High-tensile clear BOPP packaging tape engineered for heavy-duty carton sealing, 48mm width, 65m length, 48-micron film with instant tack water-based acrylic adhesive.'
  },
  {
    id: 'prod-10',
    name: 'Alphabet Custom Printed Logo Packaging Tape',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 180,
    colors: ['#c5a059', '#111111'],
    image: 'Asset/custom_printed_tape.jpg',
    tag: 'Custom Brand',
    desc: 'Premium custom printed packaging tape featuring your company logo and tamper-evident seal.'
  },
  {
    id: 'prod-11',
    name: 'Self-Locking Master Packaging Box (Pack of 25)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 92,
    colors: ['#d2b48c'],
    image: 'Asset/corrugated_box.png',
    tag: 'Master Carton',
    desc: 'Precision die-cut self-locking master packaging box featuring double-walled crush protection, clean telescoping lid closure, and smooth natural kraft paper finish.'
  },
  {
    id: 'prod-12',
    name: 'Tamper-Evident Courier Flyer Bags (Pack of 100)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 130,
    colors: ['#ffffff'],
    image: 'Asset/courier_flyer_bag.jpg',
    tag: 'Security Bags',
    desc: 'Co-extruded poly mailing bags with permanent hot-melt peel-and-seal adhesive strip.'
  },
  {
    id: 'prod-13',
    name: 'Heavy-Duty Corrugated Shipping Boxes (Pack of 50)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 175,
    colors: ['#c5a059', '#8b5a2b'],
    image: 'Asset/boxes_stack.jpg',
    tag: 'Logistics Box',
    desc: 'Multi-depth 3-ply & 5-ply Kraft corrugated shipping boxes with high bursting strength, superior stackability, and heavy load resistance for wholesale dispatch.'
  },

  // Expanded Packaging & Security Stationery Catalog
  {
    id: 'prod-15',
    name: 'Honeycomb Kraft Paper Wrapping Roll (50cm x 100m Roll)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 112,
    colors: ['#d2b48c'],
    image: 'Asset/honeycomb_wrap.png',
    tag: 'Eco Cushioning',
    desc: '100% biodegradable honeycomb structured kraft paper wrapping roll (50cm width x 100m length) for scratch-free, eco-friendly fragile bottle and glassware protection.'
  },
  {
    id: 'prod-16',
    name: 'High-Security Document Tinted Envelopes (Pack of 50)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 95,
    colors: ['#ffffff'],
    image: 'Asset/security_envelopes.png',
    tag: 'Privacy Seal',
    desc: 'Opaque interior privacy pattern security envelopes with peel-and-seal adhesive strip for confidential document dispatch and legal contracts.'
  },
  {
    id: 'prod-17',
    name: 'Air Bubble Wrap Shock Absorption Roll (50 Meters)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 240,
    colors: ['#ffffff'],
    image: 'Asset/bubble_wrap_roll.png',
    tag: 'Shock Cushion',
    desc: 'High-density dual-layer shock absorption air bubble wrap roll engineered for fragile electronics, ceramics, and glassware transit protection.'
  },
  {
    id: 'prod-18',
    name: 'White Premium E-Flute Corrugated Mailer Box (Pack of 25)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 145,
    colors: ['#ffffff'],
    image: 'Asset/white_mailer_box.jpg',
    tag: 'White Box',
    desc: 'Ultra-clean white outer fluted corrugated boxes designed for luxury unboxing, custom branding stickers, and retail gift shipments.'
  },
  {
    id: 'prod-19',
    name: 'Speed-Assemble Auto-Lock Bottom Shipping Carton (Pack of 50)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 88,
    colors: ['#d2b48c'],
    image: 'Asset/speed_assemble_box.jpg',
    tag: 'Auto-Lock',
    desc: 'Fast-assembly auto-locking bottom kraft shipping cartons that pop open instantly without bottom tape required, saving 60% packing time.'
  },
  {
    id: 'prod-20',
    name: 'Kraft Bubble Wrap Lined Padded Envelopes (Pack of 25)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 160,
    colors: ['#d2b48c'],
    image: 'Asset/kraft_courier_bags.png',
    tag: 'Padded Mailer',
    desc: 'Self-sealing heavy kraft paper outer mailer envelopes lined with interior air bubble cushioning layer for safe small item mailing.'
  },
  {
    id: 'prod-21',
    name: 'Water-Activated Reinforced Eco Kraft Paper Tape Roll',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 132,
    colors: ['#c5a059'],
    image: 'Asset/gummed_paper_tape.jpg',
    tag: 'Gummed Tape',
    desc: 'Fiberglass reinforced water-activated gummed paper tape that fuses permanently into cardboard fibers for tamper-proof carton sealing.'
  },
  {
    id: 'prod-22',
    name: '3D Embossed Premium Kraft Paper Bag with Rope Handles (Pack of 10)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 178,
    colors: ['#c5a059', '#111111'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    tag: '3D Paper Bag',
    desc: 'Architectural 3D gusseted heavy-duty kraft paper shopping bags featuring twisted cotton rope handles and reinforced cardboard bottom.'
  },
  {
    id: 'prod-23',
    name: 'High-Clarity Flat 2D Poly Protective Bags (Pack of 200)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.7,
    reviewsCount: 104,
    colors: ['#ffffff'],
    image: 'Asset/2d_poly_bag.jpg',
    tag: '2D Poly Bag',
    desc: 'Crystal clear 2D flat polyethylene protective bags for dust-free garment, stationery, and small product packaging.'
  },
  {
    id: 'prod-24',
    name: 'Industrial LLDPE Pallet Stretch Film Wrap Roll (20 Micron)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 215,
    colors: ['#ffffff'],
    image: 'Asset/stretch_film_roll.jpg',
    tag: 'Stretch Roll',
    desc: 'High-clinging 20-micron cast LLDPE stretch film roll for pallet wrapping, box bundling, and weatherproofing freight loads.'
  },
  {
    id: 'prod-25',
    name: 'Honeycomb Cellular Duplex Paper Heavy Box (Pack of 20)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 98,
    colors: ['#d2b48c'],
    image: 'Asset/honeycomb_heavy_box.png',
    tag: 'Duplex Honeycomb',
    desc: 'Engineered duplex paperboard rigid packaging box with internal honeycomb cellular reinforcement for heavy industrial components.'
  },
  {
    id: 'prod-26',
    name: 'POD Pocket Tamper-Proof Poly Courier Bags (Pack of 100)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 164,
    colors: ['#ffffff'],
    image: 'Asset/pod_pocket_courier_bag.jpg',
    tag: 'POD Pocket Bag',
    desc: 'Heavy-duty poly courier bag featuring exterior clear Document / POD pocket and irreversible hot-melt destruction adhesive seal.'
  },

  // Expanded Fine Stationery & Office Essentials Catalog
  {
    id: 'prod-27',
    name: 'Practical Science Record Book & Lab Manual (Hardbound 200 Pages)',
    category: 'books',
    categoryName: 'Books & Notebooks',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 145,
    colors: ['#2e4057', '#111111'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
    tag: 'School & Lab',
    desc: 'High-grade 80 GSM ruled and unruled interleaved practical experiment record book for physics, chemistry, and biology labs.'
  },
  {
    id: 'prod-28',
    name: 'Spiral-Bound B5 5-Subject Executive Notebook',
    category: 'books',
    categoryName: 'Books & Notebooks',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 198,
    colors: ['#c5a059', '#111111'],
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=600&q=80',
    tag: '5-Subject',
    desc: 'Multi-subject spiral notebook with movable plastic index dividers, inner pocket folder, and fountain-pen friendly paper.'
  },
  {
    id: 'prod-29',
    name: 'Hardcover Accounts Ledger & Cash Book Register',
    category: 'books',
    categoryName: 'Books & Notebooks',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 110,
    colors: ['#a37f3a'],
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80',
    tag: 'Accounts Register',
    desc: 'Traditional heavy-duty bound financial ledger and accounts register with pre-numbered columns for business book-keeping.'
  },
  {
    id: 'prod-30',
    name: 'Precision Drafting Mechanical Pencil 0.7mm Set with Refill Lead',
    category: 'pens',
    categoryName: 'Pens & Writing',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 172,
    colors: ['#d4af37', '#111111'],
    image: 'https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?auto=format&fit=crop&w=600&q=80',
    tag: 'Drafting Pencil',
    desc: 'Ergonomic metal grip mechanical pencil with 2B polymer HB lead refill tubes and built-in eraser for precision drawing.'
  },
  {
    id: 'prod-31',
    name: 'Dust-Free Polymer Erasers & Metal Double Sharpener Kit (Pack of 5)',
    category: 'pens',
    categoryName: 'Pens & Writing',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 130,
    colors: ['#ffffff'],
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80',
    tag: 'School Kit',
    desc: 'Non-toxic dust-free polymer erasers and heavy-duty steel double-hole sharpener set for graphite and color pencils.'
  },
  {
    id: 'prod-32',
    name: 'Dual-Tip Permanent Marker Set (Black, Blue, Red - Pack of 4)',
    category: 'pens',
    categoryName: 'Pens & Writing',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 210,
    colors: ['#111111', '#0000ff', '#ff0000'],
    image: 'Asset/dual_tip_markers.jpg',
    tag: 'Permanent Ink',
    desc: 'Quick-dry waterproof permanent markers with fine bullet and chisel tips for carton labeling, glass, and metal surface marking.'
  },
  {
    id: 'prod-33',
    name: 'Heavy-Duty Lever Arch Ring Binder File (75mm Spine)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 165,
    colors: ['#2e4057', '#111111'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    tag: 'Arch Ring File',
    desc: 'Premium board lever arch file with stainless steel locking mechanism, spine label slot, and metal edge protectors for A4 document storage.'
  },
  {
    id: 'prod-34',
    name: 'Transparent L-Folder Clear Document Sleeves (Pack of 50)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 240,
    colors: ['#ffffff'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Clear Sleeves',
    desc: 'High-clarity water-resistant PP L-type folder sleeves for scratch-free A4 document presentation and office filing.'
  },
  {
    id: 'prod-35',
    name: 'Neon Pastel Sticky Notes & Arrow Index Page Flags Set',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 185,
    colors: ['#ffb6c1', '#add8e6', '#e6e6fa'],
    image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=600&q=80',
    tag: 'Desk Memo',
    desc: '400-sheet self-adhesive neon sticky notes and translucent PET bookmark index flags for quick memo writing and book tagging.'
  },
  {
    id: 'prod-36',
    name: 'Heavy-Duty Steel Desktop Stapler & Pin Remover Kit',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 142,
    colors: ['#111111'],
    image: 'Asset/stapler_set.jpg',
    tag: 'Stapler Set',
    desc: 'All-metal 25-sheet capacity desktop stapler with 1000 staple pins box and ergonomic pin remover.'
  },
  {
    id: 'prod-37',
    name: 'Precision Geometry Math Compass Box & Stainless Steel Scale Set',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 156,
    colors: ['#ffffff'],
    image: 'Asset/geometry_box.jpg',
    tag: 'Geometry Box',
    desc: 'Metal tin geometry mathematical set with precision die-cast compass, divider, protractor, set squares, and 30cm steel ruler.'
  },
  {
    id: 'prod-38',
    name: 'Artist Acrylic & Watercolor Paint Tube Set (12 Colors with Brushes)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 120,
    colors: ['#ff0000', '#0000ff', '#ffff00'],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    tag: 'Art & Craft',
    desc: 'Rich pigment 12ml non-toxic artist acrylic and watercolor paints with synthetic hair flat and round brushes.'
  }
];

// E-Commerce & Hero State
let cart = [];
let wishlist = [];
let activeCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';

let currentHeroIndex = 0;
let heroAutoTimer = null;

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  renderAllProductSections();
  updateBadges();
  setupEventListeners();
  initHeroSlider();
});

// Storage Management
function saveStateToStorage() {
  localStorage.setItem('alphabet_cart', JSON.stringify(cart));
  localStorage.setItem('alphabet_wishlist', JSON.stringify(wishlist));
}

function loadStateFromStorage() {
  const savedCart = localStorage.getItem('alphabet_cart');
  const savedWishlist = localStorage.getItem('alphabet_wishlist');
  if (savedCart) { try { cart = JSON.parse(savedCart); } catch (e) { cart = []; } }
  if (savedWishlist) { try { wishlist = JSON.parse(savedWishlist); } catch (e) { wishlist = []; } }
}

function updateBadges() {
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById('cartBadgeCount');
  if (cartBadge) cartBadge.textContent = cartCount;

  const wishCount = wishlist.length;
  const wishBadge = document.getElementById('wishlistBadgeCount');
  if (wishBadge) wishBadge.textContent = wishCount;
}

// Hero Carousel Controls Engine
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentHeroIndex = index;
  }

  window.goToHeroSlide = function(index) {
    showSlide(index);
    resetAutoPlay();
  };

  window.nextHeroSlide = function() {
    let next = (currentHeroIndex + 1) % slides.length;
    showSlide(next);
    resetAutoPlay();
  };

  window.prevHeroSlide = function() {
    let prev = (currentHeroIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
    resetAutoPlay();
  };

  function resetAutoPlay() {
    if (heroAutoTimer) clearInterval(heroAutoTimer);
    heroAutoTimer = setInterval(() => {
      let next = (currentHeroIndex + 1) % slides.length;
      showSlide(next);
    }, 6000);
  }

  resetAutoPlay();
}

// Render Products Engine
function renderAllProductSections() {
  renderMainCollection();
  renderBestSellers();
  renderPackagingCollection();
  renderNewArrivals();

  // Page Specific Grids
  renderShopPage();
  renderStationeryPage();
  renderOfficePage();
  renderSchoolPage();
  renderPackagingPage();
}

function renderShopPage() {
  const container = document.getElementById('shopCatalogGrid');
  const countElem = document.getElementById('shopProductCount');
  if (!container) return;

  const list = getFilteredProducts();
  if (countElem) countElem.textContent = `Showing ${list.length} of ${PRODUCTS_DATA.length} Products`;

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);">No products match your search query.</div>`;
    return;
  }

  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderStationeryPage() {
  const container = document.getElementById('stationeryGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'books' || p.category === 'pens');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderOfficePage() {
  const container = document.getElementById('officeGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'office');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderSchoolPage() {
  const container = document.getElementById('schoolGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.tag.toLowerCase().includes('school') || p.tag.toLowerCase().includes('lab') || p.id === 'prod-27' || p.id === 'prod-30' || p.id === 'prod-31' || p.id === 'prod-37' || p.id === 'prod-38');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderPackagingPage() {
  const container = document.getElementById('packagingGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'packaging');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function getFilteredProducts() {
  let list = PRODUCTS_DATA.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          p.categoryName.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (currentSort === 'price-low') list.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-high') list.sort((a, b) => b.price - a.price);
  else if (currentSort === 'rating') list.sort((a, b) => b.rating - a.rating);

  return list;
}

function buildProductCardHTML(p) {
  const isWishlisted = wishlist.includes(p.id);
  const colorSwatches = p.colors.map(c => `<span class="swatch-circle" style="background-color: ${c};"></span>`).join('');

  return `
    <div class="luxury-product-card">
      <div class="card-img-container" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='Asset/boxes_stack.jpg';">
        <span class="badge-tag-editorial ${p.discount ? 'discount' : ''}">${p.tag}</span>
        
        <!-- Floating Vertical Action Column (Top Right Corner Reference Match) -->
        <div class="card-action-stack-right" onclick="event.stopPropagation();">
          <button class="action-circle-btn dark ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}')" title="Wishlist">
            ${isWishlisted ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline}
          </button>
          
          <button class="action-circle-btn dark" onclick="openQuickView('${p.id}')" title="Product Specs & Details">
            ${SVG_ICONS.layers}
          </button>
          
          <button class="action-circle-btn light" onclick="openQuickView('${p.id}')" title="Quick View">
            ${SVG_ICONS.eye}
          </button>
        </div>
      </div>
      <div class="card-body-content">
        <span class="card-category-sub">${p.categoryName}</span>
        <h4 class="card-product-title" onclick="openQuickView('${p.id}')" style="cursor:pointer;">${p.name}</h4>
        
        <div class="card-rating-row">
          ${SVG_ICONS.star}
          <span style="font-weight:700; font-size:0.85rem;">${p.rating}</span>
          <span class="rating-count">(${p.reviewsCount})</span>
        </div>

        <div class="color-swatches-row">
          ${colorSwatches}
        </div>

        <div class="card-price-row">
          <span class="price-selling">₹${p.price}</span>
          ${p.mrp ? `<span class="price-mrp">₹${p.mrp}</span>` : ''}
          ${p.discount ? `<span class="price-discount-percent">${p.discount}</span>` : ''}
        </div>

        <button class="add-to-cart-btn-full" onclick="addToCart('${p.id}')">Add to Cart</button>
      </div>
    </div>
  `;
}

function renderMainCollection() {
  renderShopPage();
  const container = document.getElementById('alphabetCollectionGrid');
  if (!container) return;

  const list = getFilteredProducts();
  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);">No products match your search.</div>`;
    return;
  }

  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderBestSellers() {
  const container = document.getElementById('bestSellersGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.rating >= 4.9).slice(0, 4);
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderPackagingCollection() {
  const container = document.getElementById('packagingCollectionGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'packaging');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderNewArrivals() {
  const container = document.getElementById('newArrivalsGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.slice(0, 4);
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

// Shopping Cart Actions
function addToCart(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 });
  }

  saveStateToStorage();
  updateBadges();
  renderCartDrawer();
  openCartDrawer();
}

function updateCartQty(productId, qty) {
  if (qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  } else {
    const item = cart.find(i => i.id === productId);
    if (item) item.qty = qty;
  }
  saveStateToStorage();
  updateBadges();
  renderCartDrawer();
}

function toggleWishlist(productId) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
  } else {
    wishlist.push(productId);
  }
  saveStateToStorage();
  updateBadges();
  renderAllProductSections();
}

// Drawer Renderers
function renderCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const subtotalElem = document.getElementById('cartSubtotalText');
  const totalElem = document.getElementById('cartTotalText');

  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="margin-bottom: 12px; font-weight:700;">Your Bag is Empty</p>
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem;">Your shopping bag is empty</h4>
        <p style="font-size: 0.85rem; margin-top: 6px;">Discover our stationery collections.</p>
      </div>
    `;
    if (subtotalElem) subtotalElem.textContent = '₹0';
    if (totalElem) totalElem.textContent = '₹0';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-drawer-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='Asset/boxes_stack.jpg';">
      <div style="flex:1;">
        <div style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600;">${item.name}</div>
        <div style="font-size: 0.88rem; font-weight: 700; color: var(--accent-gold); margin-top: 2px;">₹${item.price} &bull; Total: ₹${item.price * item.qty}</div>
        <div style="display:inline-flex; align-items:center; border:1px solid var(--border-light); margin-top:8px;">
          <button style="padding: 2px 8px; border:none; background:none; cursor:pointer; font-weight:800;" onclick="updateCartQty('${item.id}', ${item.qty - 1})">-</button>
          <span style="font-size: 0.85rem; padding: 0 8px; font-weight: 700;">${item.qty}</span>
          <button style="padding: 2px 8px; border:none; background:none; cursor:pointer; font-weight:800;" onclick="updateCartQty('${item.id}', ${item.qty + 1})">+</button>
        </div>
      </div>
      <button style="background:none; border:none; color:#ef4444; cursor:pointer; font-weight:700;" onclick="updateCartQty('${item.id}', 0)">✕</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  if (subtotalElem) subtotalElem.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (totalElem) totalElem.textContent = `₹${total.toLocaleString('en-IN')} (incl. GST)`;
}

// Drawer Controls
function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawerOverlay');
  if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawerOverlay');
  if (drawer) drawer.classList.remove('open');
}

// Quick View Modal
function openQuickView(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById('quickViewModal');
  const box = document.getElementById('quickViewContent');

  if (!modal || !box) return;

  box.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center;">
      <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-md);" onerror="this.onerror=null; this.src='Asset/boxes_stack.jpg';">
      <div>
        <span class="section-subtitle-tag" style="margin-bottom: 6px;">${p.categoryName}</span>
        <h3 style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 600; line-height: 1.15; margin-bottom: 12px;">${p.name}</h3>
        <p style="font-size: 0.95rem; color: var(--text-sub); margin-bottom: 16px;">${p.desc}</p>
        
        <div style="font-size: 1.6rem; font-weight: 700; color: var(--text-dark); margin-bottom: 20px;">
          ₹${p.price} ${p.mrp ? `<span style="font-size: 1rem; text-decoration: line-through; color: var(--text-muted); margin-left: 8px;">₹${p.mrp}</span>` : ''}
        </div>

        <button class="btn-editorial btn-gold" style="width: 100%;" onclick="addToCart('${p.id}'); closeQuickView();">ADD TO SHOPPING BAG</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

// Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Your shopping bag is empty!");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.add('active');
    renderCheckoutSummary();
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.remove('active');
}

function renderCheckoutSummary() {
  const box = document.getElementById('checkoutSummaryBox');
  if (!box) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  box.innerHTML = `
    <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 10px;">Order Items (${cart.length}):</div>
    ${cart.map(i => `<div style="display:flex; justify-content:space-between; font-size:0.85rem; color:var(--text-sub); margin-bottom:4px;"><span>${i.name} (x${i.qty})</span><span>₹${i.price * i.qty}</span></div>`).join('')}
    <div style="border-top:1px dashed var(--border-light); margin-top:12px; padding-top:10px; display:flex; justify-content:space-between; font-weight:800; font-size:1.1rem;">
      <span>Total (incl. GST):</span>
      <span>₹${total.toLocaleString('en-IN')}</span>
    </div>
  `;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('chkName').value;
  const email = document.getElementById('chkEmail').value;
  const phone = document.getElementById('chkPhone').value;
  const address = document.getElementById('chkAddress').value;
  const payment = document.querySelector('input[name="chkPayment"]:checked').value;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;
  const orderId = 'ALPH-' + Math.floor(100000 + Math.random() * 900000);

  const orderData = {
    orderId, name, email, phone, address, payment, items: [...cart], subtotal, gst, total, timestamp: new Date().toLocaleString()
  };

  cart = [];
  saveStateToStorage();
  updateBadges();

  closeCheckoutModal();
  showOrderReceipt(orderData);
}

function showOrderReceipt(order) {
  const modal = document.getElementById('receiptModal');
  const box = document.getElementById('receiptContent');

  if (!modal || !box) return;

  box.innerHTML = `
    <div style="text-align:center; padding-bottom:16px; border-bottom:1px dashed var(--border-light); margin-bottom:16px;">
      <div style="display:flex; justify-content:center; align-items:center; margin-bottom:8px;">
        <img src="Asset/brand_header_logo.png" alt="ALPHABET CORPORATION" style="height:48px; width:auto; object-fit:contain;">
      </div>
      <p style="font-size:0.8rem; color:var(--text-sub); margin-bottom:4px;">679/1 - SEETA RAM NAGAR AHIRWAN, Kanpur, UP - 208004</p>
      <div style="font-size:0.8rem; color:var(--text-sub);">GSTIN: <strong>09DHOPM9732B1ZZ</strong> | PAN: <strong>DHOPM9732B</strong></div>
      <div style="font-weight:800; color:var(--accent-gold); margin-top:8px;">Official Order ID: ${order.orderId}</div>
    </div>

    <div style="font-size:0.88rem; margin-bottom:16px;">
      <p><strong>Customer:</strong> ${order.name}</p>
      <p><strong>Phone:</strong> ${order.phone} | <strong>Email:</strong> ${order.email}</p>
      <p><strong>Shipping Address:</strong> ${order.address}</p>
      <p><strong>Payment Mode:</strong> <span style="text-transform:uppercase; font-weight:700;">${order.payment}</span></p>
    </div>

    <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom:16px;">
      <thead>
        <tr style="background:var(--bg-body); text-align:left;">
          <th style="padding:8px;">Item</th>
          <th style="padding:8px;">Qty</th>
          <th style="padding:8px; text-align:right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${order.items.map(i => `
          <tr style="border-bottom:1px solid var(--border-light);">
            <td style="padding:8px;">${i.name}</td>
            <td style="padding:8px;">${i.qty}</td>
            <td style="padding:8px; text-align:right;">₹${i.price * i.qty}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div style="font-size:1.1rem; font-weight:800; text-align:right;">
      Grand Total: ₹${order.total.toLocaleString('en-IN')}
    </div>
  `;

  document.getElementById('receiptWhatsAppBtn').onclick = () => {
    const text = encodeURIComponent(`Order Confirmed! ALPHABET CORPORATION\nOrder ID: ${order.orderId}\nCustomer: ${order.name}\nPhone: ${order.phone}\nTotal Amount: ₹${order.total}`);
    window.open(`https://wa.me/919667501707?text=${text}`, '_blank');
  };

  modal.classList.add('active');
}

function closeReceipt() {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.remove('active');
}

// Event Listeners Setup
function setupEventListeners() {
  // Category Pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat');
      renderMainCollection();
    });
  });

  // Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderMainCollection();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderMainCollection();
    });
  }

  // Mobile Menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinksWrapper');
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Cart Drawer
  const cartBtn = document.getElementById('cartBtnHeader');
  const closeCartBtn = document.getElementById('closeCartDrawer');
  const cartOverlay = document.getElementById('cartDrawerOverlay');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  // Checkout Form
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Update Auth User UI
  updateUserUI();
  const authModal = document.getElementById('authModal');
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }
}

/* ==========================================================================
   Flipkart-Style Login & Registration Engine
   ========================================================================== */
let currentUser = JSON.parse(localStorage.getItem('alphabet_logged_user')) || null;
let isOtpMode = false;

function openAuthModal(tab = 'login') {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  switchAuthTab(tab);
  modal.classList.add('active');
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('active');
}

function switchAuthTab(tab) {
  const loginBanner = document.getElementById('authBannerLogin');
  const signupBanner = document.getElementById('authBannerSignup');
  const loginForm = document.getElementById('flipkartLoginForm');
  const signupForm = document.getElementById('flipkartSignupForm');

  if (tab === 'login') {
    if (loginBanner) loginBanner.classList.remove('hidden');
    if (signupBanner) signupBanner.classList.add('hidden');
    if (loginForm) loginForm.classList.remove('hidden');
    if (signupForm) signupForm.classList.add('hidden');
  } else {
    if (loginBanner) loginBanner.classList.add('hidden');
    if (signupBanner) signupBanner.classList.remove('hidden');
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.remove('hidden');
  }
}

function toggleOtpMode() {
  isOtpMode = !isOtpMode;
  const passGroup = document.getElementById('loginPasswordGroup');
  const submitBtn = document.getElementById('loginSubmitBtn');
  const toggleBtn = document.getElementById('otpToggleBtn');

  if (isOtpMode) {
    if (passGroup) passGroup.classList.add('hidden');
    if (submitBtn) submitBtn.innerText = 'Request OTP';
    if (toggleBtn) toggleBtn.innerText = 'Use Password Instead';
  } else {
    if (passGroup) passGroup.classList.remove('hidden');
    if (submitBtn) submitBtn.innerText = 'Login';
    if (toggleBtn) toggleBtn.innerText = 'Use OTP Instead';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const idVal = document.getElementById('loginIdInput').value.trim();
  if (!idVal) {
    alert('Please enter a valid Mobile Number or Email Address.');
    return;
  }

  if (isOtpMode) {
    const otp = prompt(`OTP sent to ${idVal}. Enter 4-digit OTP:`, '1234');
    if (otp) {
      const userName = idVal.includes('@') ? idVal.split('@')[0] : 'User (' + idVal.slice(-4) + ')';
      setUserLoginState({ name: userName, contact: idVal });
    }
  } else {
    const userName = idVal.includes('@') ? idVal.split('@')[0] : 'User (' + idVal.slice(-4) + ')';
    setUserLoginState({ name: userName, contact: idVal });
  }
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('signupNameInput').value.trim();
  const phone = document.getElementById('signupPhoneInput').value.trim();
  const email = document.getElementById('signupEmailInput').value.trim();

  if (!name || (!phone && !email)) {
    alert('Please fill in your Name and Mobile Number or Email.');
    return;
  }

  setUserLoginState({ name: name, phone: phone, email: email, contact: phone || email });
}

function setUserLoginState(userObj) {
  currentUser = userObj;
  localStorage.setItem('alphabet_logged_user', JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
  alert(`Welcome to ALPHABET CORPORATION, ${userObj.name}!`);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('alphabet_logged_user');
  updateUserUI();
  alert('You have logged out successfully.');
}

function updateUserUI() {
  const headerName = document.getElementById('headerUserName');
  const dropdownGuest = document.getElementById('dropdownHeaderGuest');
  const dropdownUser = document.getElementById('dropdownHeaderUser');
  const dropdownDisplayName = document.getElementById('dropdownUserDisplayName');
  const logoutItem = document.getElementById('logoutDropdownItem');

  if (currentUser) {
    if (headerName) headerName.innerText = currentUser.name.split(' ')[0];
    if (dropdownGuest) dropdownGuest.classList.add('hidden');
    if (dropdownUser) dropdownUser.classList.remove('hidden');
    if (dropdownDisplayName) dropdownDisplayName.innerText = currentUser.name;
    if (logoutItem) logoutItem.classList.remove('hidden');
  } else {
    if (headerName) headerName.innerText = 'Login';
    if (dropdownGuest) dropdownGuest.classList.remove('hidden');
    if (dropdownUser) dropdownUser.classList.add('hidden');
    if (logoutItem) logoutItem.classList.add('hidden');
  }
}

/* ==========================================================================
   Universal Image Lightbox Zoom & Pan Engine
   ========================================================================== */
let currentZoomScale = 1;
let currentPanX = 0;
let currentPanY = 0;
let isPanning = false;
let startPanX = 0;
let startPanY = 0;

function openImageLightbox(imgSrc, captionText = 'ALPHABET CORPORATION') {
  let modal = document.getElementById('imageLightboxModal');
  if (!modal) {
    createLightboxDOM();
    modal = document.getElementById('imageLightboxModal');
  }

  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');

  if (lbImg) {
    lbImg.src = imgSrc;
    resetLightboxZoom();
  }
  if (lbCaption) {
    lbCaption.innerText = captionText;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function zoomLightboxImage(delta) {
  currentZoomScale = Math.min(Math.max(0.5, currentZoomScale + delta), 4.5);
  updateLightboxTransform();
}

function resetLightboxZoom() {
  currentZoomScale = 1;
  currentPanX = 0;
  currentPanY = 0;
  updateLightboxTransform();
}

function updateLightboxTransform() {
  const lbImg = document.getElementById('lightboxImg');
  if (lbImg) {
    lbImg.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentZoomScale})`;
    lbImg.style.cursor = currentZoomScale > 1 ? 'grab' : 'zoom-in';
  }
}

function createLightboxDOM() {
  const div = document.createElement('div');
  div.id = 'imageLightboxModal';
  div.className = 'lightbox-overlay';
  div.innerHTML = `
    <div class="lightbox-toolbar">
      <button class="lb-tool-btn" onclick="zoomLightboxImage(0.3)" title="Zoom In (+)">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </button>
      <button class="lb-tool-btn" onclick="zoomLightboxImage(-0.3)" title="Zoom Out (-)">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </button>
      <button class="lb-tool-btn" onclick="resetLightboxZoom()" title="Reset Zoom">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
      </button>
      <button class="lb-tool-btn close-btn" onclick="closeImageLightbox()" title="Close (Esc)">✕</button>
    </div>
    <div class="lightbox-viewport" id="lightboxViewport">
      <img src="" id="lightboxImg" alt="Enlarged Image" class="lightbox-img">
    </div>
    <div class="lightbox-caption" id="lightboxCaption">ALPHABET Corporation</div>
  `;
  document.body.appendChild(div);

  const viewport = document.getElementById('lightboxViewport');
  const lbImg = document.getElementById('lightboxImg');

  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    zoomLightboxImage(delta);
  }, { passive: false });

  viewport.addEventListener('click', (e) => {
    if (e.target === viewport) closeImageLightbox();
  });

  lbImg.addEventListener('mousedown', (e) => {
    if (currentZoomScale <= 1) {
      zoomLightboxImage(0.5);
      return;
    }
    isPanning = true;
    startPanX = e.clientX - currentPanX;
    startPanY = e.clientY - currentPanY;
    lbImg.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    currentPanX = e.clientX - startPanX;
    currentPanY = e.clientY - startPanY;
    updateLightboxTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isPanning) {
      isPanning = false;
      lbImg.style.cursor = currentZoomScale > 1 ? 'grab' : 'zoom-in';
    }
  });

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1 && currentZoomScale > 1) {
      isPanning = true;
      startPanX = e.touches[0].clientX - currentPanX;
      startPanY = e.touches[0].clientY - currentPanY;
    }
  });

  viewport.addEventListener('touchmove', (e) => {
    if (isPanning && e.touches.length === 1) {
      currentPanX = e.touches[0].clientX - startPanX;
      currentPanY = e.touches[0].clientY - startPanY;
      updateLightboxTransform();
    }
  });

  viewport.addEventListener('touchend', () => {
    isPanning = false;
  });
}

function attachGlobalImageClickZoom() {
  document.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;

    if (img.classList.contains('brand-logo') || img.closest('.brand-logo-wrapper') || img.closest('.header-right-icons') || img.classList.contains('no-zoom')) return;

    const src = img.getAttribute('src');
    if (src) {
      const alt = img.getAttribute('alt') || 'ALPHABET Product Image';
      openImageLightbox(src, alt);
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeImageLightbox();
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachGlobalImageClickZoom);
} else {
  attachGlobalImageClickZoom();
}
