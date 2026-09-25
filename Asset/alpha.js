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
  // 0. Corporate Gift Set
  {
    id: 'prod-gifting-1',
    name: 'Executive Corporate Gift Set (Planner + Brass Pen + Card Holder)',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 340,
    colors: ['#c5a059', '#111111'],
    image: 'Asset/executive_gift_set.jpg',
    tag: 'Corporate Combo',
    desc: 'Bespoke corporate gifting box featuring a gold foil leatherette 2026 planner, solid brass fountain pen, and metal card holder in a luxury rigid gift box.'
  },
  {
    id: 'prod-gifting-2',
    name: 'Luxury Leatherette Desk Organizer & Stationery Combo Kit',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 215,
    colors: ['#111111', '#2e4057'],
    image: 'Asset/executive_gift_set.jpg',
    tag: 'Executive Gift',
    desc: 'Complete C-suite desk accessory kit including memo block holder, pen stand, leatherette coaster set, and letter opener.'
  },
  {
    id: 'prod-gifting-3',
    name: 'Enterprise Employee Onboarding Welcome Kit Combo',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 480,
    colors: ['#c5a059', '#111111'],
    image: 'Asset/onboarding_gift_kit.jpg',
    tag: 'Best Seller',
    desc: 'Custom logo printed welcome box with A5 hardcover notebook, gel pen, insulated stainless bottle, and lanyard badge holder.'
  },
  {
    id: 'prod-gifting-4',
    name: 'Premium A4 Copier Paper & Office Registrar Bundle',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 195,
    colors: ['#ffffff'],
    image: 'Asset/a4_copier_paper.png',
    tag: 'Bulk Combo',
    desc: 'Bulk office procurement bundle containing 5 reams of 80GSM A4 paper and 2 hardbound master accounts registers.'
  },
  {
    id: 'prod-gifting-5',
    name: 'Custom Branded Corporate Stationery Gift Box',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 160,
    colors: ['#c5a059'],
    image: 'Asset/security_envelopes_box.png',
    tag: 'Custom Gift',
    desc: 'Customized B2B gifting box with UV-printed company logo on all items for festive gifting & enterprise milestones.'
  },
  {
    id: 'prod-gifting-6',
    name: 'Eco-Friendly Bamboo Corporate Gifting Combo Kit',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 220,
    colors: ['#d2b48c', '#c5a059'],
    image: 'Asset/geometry_box.jpg',
    tag: 'Eco Gifting',
    desc: 'Sustainable corporate gift box featuring bamboo hardcover notebook, bamboo rollerball pen, wooden 32GB USB flash drive, and desk planter.'
  },
  {
    id: 'prod-gifting-7',
    name: 'Product Lifetime Executive Leatherette Folio & Pen Combo',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 310,
    colors: ['#2e4057', '#111111'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Executive Folio',
    desc: 'Bespoke conference padfolio with built-in power bank slot, magnetic closure, refillable A5 legal pad, and precision signature pen.'
  },
  {
    id: 'prod-gifting-8',
    name: 'Luxury C-Suite Gold Foil Journal & Fountain Pen Combo Box',
    category: 'gifting',
    categoryName: 'Corporate Gift Set',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 175,
    colors: ['#c5a059'],
    image: 'Asset/security_envelopes_box.png',
    tag: 'C-Suite Gift',
    desc: 'Ultra-premium Italian leatherette journal with 100GSM fountain-pen friendly pages, handcrafted brass nib pen, and satin ribbon bookmark.'
  },
  // 1. Office Stationery
  {
    id: 'prod-1',
    name: 'Alphabet Classic Linen Journal (Hardcover)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 128,
    colors: ['#c5a059', '#111111', '#2e4057'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Bestseller',
    desc: 'Hand-crafted linen hardcover journal featuring 200 pages of 100GSM acid-free fountain-pen friendly paper.'
  },
  {
    id: 'prod-2',
    name: 'Minimalist Thread-Bound Executive Notebook',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 94,
    colors: ['#e2d5c3', '#111111'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'New Arrival',
    desc: 'Lay-flat thread-bound notebook with subtle dot-grid ruling, expansion inner pocket, and satin ribbon.'
  },
  {
    id: 'prod-3',
    name: 'Premium Leatherette Planner & Organiser 2026',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 210,
    colors: ['#a37f3a', '#111111', '#556b2f'],
    image: 'Asset/dual_tip_markers.jpg',
    tag: 'Signature',
    desc: 'Editorial weekly & monthly planner with goal setting trackers, gold foil stamping, and magnetic clasp.'
  },

  {
    id: 'prod-4',
    name: 'Matte Brass Fountain Pen & Ink Set',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 86,
    colors: ['#d4af37', '#111111'],
    image: 'Asset/brass_fountain_pen.jpg',
    tag: 'Luxury',
    desc: 'Precision engineered solid brass fountain pen with German stainless steel medium nib and luxury presentation box.'
  },
  {
    id: 'prod-5',
    name: 'Architectural Gel Rollerball Pen (Pack of 3)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.7,
    reviewsCount: 142,
    colors: ['#111111', '#ffffff', '#888888'],
    image: 'Asset/dual_tip_markers.jpg',
    tag: 'Essential',
    desc: '0.5mm ultra-smooth quick-dry Japanese archival gel ink pens designed for skip-free daily writing.'
  },
  {
    id: 'prod-6',
    name: 'Pastel Highlighters & Fine Liner Set',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 78,
    colors: ['#ffb6c1', '#add8e6', '#e6e6fa'],
    image: 'Asset/dual_tip_markers.jpg',
    tag: 'Pastel Office Set',
    desc: 'Dual-tip pastel aesthetic highlighters with water-based bleed-resistant ink designed for corporate desk planning.'
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
    image: 'Asset/a4_copier_paper.png',
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
    image: 'Asset/l_folder_sleeves.jpg',
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
    image: 'Asset/kraft_courier_bags.png',
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
    name: 'Executive Meeting Ledger & Conference Padfolio (200 Pages)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 145,
    colors: ['#2e4057', '#111111'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Conference Pad',
    desc: 'High-grade 80 GSM ruled executive conference padfolio and master meeting register.'
  },
  {
    id: 'prod-28',
    name: 'Spiral-Bound B5 5-Subject Executive Notebook',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 198,
    colors: ['#c5a059', '#111111'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: '5-Subject',
    desc: 'Multi-subject spiral notebook with movable plastic index dividers, inner pocket folder, and fountain-pen friendly paper.'
  },
  {
    id: 'prod-29',
    name: 'Hardcover Accounts Ledger & Cash Book Register',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 110,
    colors: ['#a37f3a'],
    image: 'Asset/security_envelopes_box.png',
    tag: 'Accounts Register',
    desc: 'Traditional heavy-duty bound financial ledger and accounts register with pre-numbered columns for business book-keeping.'
  },
  {
    id: 'prod-30',
    name: 'Precision Drafting Mechanical Pencil 0.7mm Set with Refill Lead',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 172,
    colors: ['#d4af37', '#111111'],
    image: 'Asset/geometry_box.jpg',
    tag: 'Drafting Pencil',
    desc: 'Ergonomic metal grip mechanical pencil with 2B polymer HB lead refill tubes and built-in eraser for precision drawing.'
  },
  {
    id: 'prod-31',
    name: 'Executive Bamboo Desktop Pencil & Pen Holder Combo Set',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 130,
    colors: ['#ffffff'],
    image: 'Asset/stapler_set.jpg',
    tag: 'Bamboo Desk Set',
    desc: 'Sustainable handcrafted bamboo desktop pen stand, card dock, and mechanical drafting pencil set.'
  },
  {
    id: 'prod-32',
    name: 'Dual-Tip Permanent Marker Set (Black, Blue, Red - Pack of 4)',
    category: 'office',
    categoryName: 'Office Stationery',
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
    image: 'Asset/l_folder_sleeves.jpg',
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
    image: 'Asset/dual_tip_markers.jpg',
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
    name: 'Executive Metal Mesh Business Card & Memo Holder Dock',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 156,
    colors: ['#111111', '#c5a059'],
    image: 'Asset/stapler_set.jpg',
    tag: 'Desk Dock',
    desc: 'Powder-coated steel mesh desk card dock and memo note holder for executive desks.'
  },
  {
    id: 'prod-38',
    name: 'Heavy-Duty 2-Hole Desktop Steel Paper Puncher (40 Sheets)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 120,
    colors: ['#111111', '#2e4057'],
    image: 'Asset/stapler_set.jpg',
    tag: 'Paper Puncher',
  },

  // 12 New Premium E-Commerce Items (School, Art, Copier & Packaging Expansion)
  {
    id: 'prod-39',
    name: 'Executive Leatherette Pocket Notebook Set (Pack of 3 | 192 Pages)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 215,
    colors: ['#1e293b', '#c5a059'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Pocket Notebooks',
    desc: 'Hardcover pocket journals with gold foil stamping and ribbon bookmarks for executives.'
  },
  {
    id: 'prod-40',
    name: 'Executive Grid Project Planner & Hardcover Legal Journal',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 168,
    colors: ['#111111', '#c5a059'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Project Journal',
    desc: 'Hardcover grid ruled project planning journal with ribbons and index tabs for corporate project management.'
  },
  {
    id: 'prod-41',
    name: 'Rollerball Executive Signature Ink Pen Set (Gold Trim)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 142,
    colors: ['#d4af37', '#111111'],
    image: 'Asset/dual_tip_markers.jpg',
    tag: 'Executive Signature',
    desc: 'Weighted metal body rollerball pen featuring 0.7mm German liquid ink cartridge and gold-plated clip for executive contract signings.'
  },
  {
    id: 'prod-42',
    name: 'Fineliner Archival Micro Technical Pens (Pack of 6 Assorted Nibs)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 190,
    colors: ['#111111'],
    image: 'Asset/dual_tip_markers.jpg',
    tag: 'Technical Micro',
    desc: 'Waterproof fade-proof pigment ink micro fineliners with precision metal-clad nib sizes (0.05mm to 0.8mm) for architectural drawing.'
  },
  {
    id: 'prod-43',
    name: 'A3 Premium Copier Paper Ream (500 Sheets | 80 GSM)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 135,
    colors: ['#ffffff'],
    image: 'Asset/a4_copier_paper.png',
    tag: 'A3 Format Paper',
    desc: 'Large format A3 copier paper ream (297 x 420mm) engineered for CAD blueprints, architectural schematics, posters, and double-sided printing.'
  },
  {
    id: 'prod-44',
    name: 'Self-Adhesive Color Coded Index Dividers (Pack of 12 Sets)',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.7,
    reviewsCount: 88,
    colors: ['#ffb6c1', '#add8e6', '#e6e6fa'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Index Dividers',
    desc: 'Reinforced tab index page dividers with multi-color headers for ring binder files and corporate document organization.'
  },
  {
    id: 'prod-45',
    name: 'BOPP Heavy-Duty Brown Shipping Tape Roll (48mm x 65m)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 380,
    colors: ['#8b5a2b'],
    image: 'Asset/bopp_clear_tape.jpg',
    tag: 'Brown Tape',
    desc: 'Heavy-duty brown Kraft shade BOPP packaging tape with 50-micron high-adhesion water-based acrylic formulation for corrugated box sealing.'
  },
  {
    id: 'prod-46',
    name: '5-Ply Heavy Master Freight Shipping Box (Pack of 10)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 195,
    colors: ['#c5a059', '#8b5a2b'],
    image: 'Asset/boxes_stack.jpg',
    tag: '5-Ply Heavy Master',
    desc: 'Heavy-duty 5-ply double-wall corrugated master dispatch box capable of carrying up to 35kg load without crushing during long-distance transit.'
  },
  {
    id: 'prod-47',
    name: 'Heavy-Duty Metal Tabletop Tape Dispenser Gun (For 48mm Tapes)',
    category: 'packaging',
    categoryName: 'Packaging Solutions',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 210,
    colors: ['#ef4444', '#111111'],
    image: 'Asset/gummed_paper_tape.jpg',
    tag: 'Tape Dispenser',
    desc: 'Ergonomic hand-held packaging tape dispenser gun with adjustable tension brake and stainless steel serrated cutter blade.'
  },
  {
    id: 'prod-48',
    name: 'Multipurpose Metal Wire Mesh Desk Organizer & Letter Tray',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.8,
    reviewsCount: 114,
    colors: ['#111111'],
    image: 'Asset/stapler_set.jpg',
    tag: 'Desk Organizer',
    desc: 'Scratch-resistant powder-coated steel mesh desk organizer featuring 3 letter trays, pen cup holder, and sticky note dispenser.'
  },
  {
    id: 'prod-49',
    name: 'Self-Inking Date & Received Rubber Stamp with Quick-Dry Ink Pad',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 4.9,
    reviewsCount: 152,
    colors: ['#0000ff', '#ef4444'],
    image: 'Asset/security_envelopes_box.png',
    tag: 'Official Stamp',
    desc: 'Heavy-duty self-inking rubber stamp with 10-year rotary date wheel and replaceable blue/red quick-dry ink cartridge.'
  },
  {
    id: 'prod-50',
    name: 'Executive Leatherette Zippered Document Portfolio & Padfolio',
    category: 'office',
    categoryName: 'Office Stationery',
    price: 0,
    mrp: 0,
    discount: '',
    rating: 5.0,
    reviewsCount: 175,
    colors: ['#c5a059', '#111111'],
    image: 'Asset/l_folder_sleeves.jpg',
    tag: 'Executive Portfolio',
    desc: 'Water-resistant vegan leatherette document portfolio folder with dual zipper compartments and pen loops for business executives.'
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
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    activeCategory = catParam;
    const activePill = document.querySelector(`.cat-pill[data-cat="${catParam}"]`);
    if (activePill) {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      activePill.classList.add('active');
    }
  }
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
  renderGiftingCollection();
  renderPackagingCollection();
  renderNewArrivals();

  // Page Specific Grids
  renderShopPage();
  renderStationeryPage();
  renderOfficePage();
  renderGiftingPage();
  renderPackagingPage();
}

function renderShopPage() {
  const container = document.getElementById('shopCatalogGrid') || document.getElementById('shopCollectionGrid');
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

  const list = PRODUCTS_DATA.filter(p => p.category === 'office');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderOfficePage() {
  const container = document.getElementById('officeGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'office');
  container.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function renderGiftingPage() {
  const container = document.getElementById('giftingGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'gifting' || (p.tag && (p.tag.toLowerCase().includes('combo') || p.tag.toLowerCase().includes('gift'))));
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
  const fallbackImg = p.category === 'packaging' ? 'Asset/corrugated_box.png' : (p.category === 'gifting' ? 'Asset/security_envelopes_box.png' : 'Asset/a4_copier_paper.png');

  return `
    <div class="luxury-product-card">
      <div class="card-img-container" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
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

function renderGiftingCollection() {
  const container = document.getElementById('giftingCollectionGrid');
  if (!container) return;

  const list = PRODUCTS_DATA.filter(p => p.category === 'gifting').slice(0, 4);
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
  showToast(`Added "${p.name.substring(0, 30)}..." to Shopping Bag`, 'success');
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
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    if (p) showToast(`Removed "${p.name.substring(0, 25)}..." from Wishlist`, 'info');
  } else {
    wishlist.push(productId);
    if (p) showToast(`Saved "${p.name.substring(0, 25)}..." to Wishlist`, 'success');
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
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='Asset/a4_copier_paper.png';">
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

// Quick View Modal with B2B Tiered Pricing, Pincode Checker, and Free Sample Request
function openQuickView(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById('quickViewModal');
  const box = document.getElementById('quickViewContent');

  if (!modal || !box) return;

  const isCustomizable = p.id === 'prod-10' || p.id === 'prod-18' || p.category === 'packaging';

  box.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 28px; align-items: start;">
      <div>
        <div style="position:relative; overflow:hidden; border-radius: var(--radius-md); border:1px solid var(--border-light); background:#fff; text-align:center;">
          <img src="${p.image}" alt="${p.name}" id="qvMainImage" style="width: 100%; height: 320px; object-fit: contain; padding: 12px; cursor: zoom-in;" onclick="openImageLightbox('${p.image}', '${p.name}')" onerror="this.onerror=null; this.src='Asset/a4_copier_paper.png';">
          <div style="position:absolute; bottom:8px; right:8px; background:rgba(0,0,0,0.7); color:#fff; padding:4px 10px; border-radius:12px; font-size:0.75rem; pointer-events:none;">Click Image to Zoom HD</div>
        </div>

        ${isCustomizable ? `
          <div style="margin-top:14px; padding:12px; background:#f8fafc; border-radius:8px; border:1px dashed var(--accent-gold);">
            <label style="font-size:0.78rem; font-weight:800; color:var(--text-dark); text-transform:uppercase; display:block; margin-bottom:4px;">Custom Brand Logo / Text Preview:</label>
            <input type="text" placeholder="Type your company name / logo text..." oninput="updateCustomLogoPreview(this.value)" style="width:100%; padding:8px 12px; border:1px solid #cbd5e1; border-radius:4px; font-size:0.85rem;">
            <div id="customLogoPreviewBox" style="margin-top:8px; padding:8px; background:var(--accent-gold); color:#000; font-weight:800; text-align:center; border-radius:4px; font-size:0.9rem; letter-spacing:1px; display:none;">
              [YOUR LOGO HERE]
            </div>
          </div>
        ` : ''}
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span class="section-subtitle-tag" style="margin-bottom: 0;">${p.categoryName}</span>
          <span style="font-size:0.75rem; background:rgba(197,160,89,0.15); color:var(--accent-gold); padding:3px 8px; border-radius:4px; font-weight:800;">GSTIN INVOICE ELIGIBLE</span>
        </div>

        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 600; line-height: 1.2; margin-bottom: 8px;">${p.name}</h3>
        <p style="font-size: 0.9rem; color: var(--text-sub); line-height: 1.6; margin-bottom: 14px;">${p.desc}</p>

        <div style="display:flex; align-items:baseline; gap:10px; margin-bottom: 14px;">
          <span style="font-size: 1.7rem; font-weight: 800; color: var(--text-dark);">₹${p.price}</span>
          <span style="font-size:0.85rem; color:#64748b; font-weight:600;">/ Sample Unit (Listed at ₹0)</span>
        </div>

        <!-- B2B Tiered Volume Pricing Table -->
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px 14px; margin-bottom:14px;">
          <div style="font-size:0.75rem; font-weight:800; color:#475569; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:6px;">Wholesale B2B Volume Rates:</div>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px; text-align:center; font-size:0.78rem;">
            <div style="background:#fff; padding:6px; border-radius:4px; border:1px solid #cbd5e1;">
              <div style="font-weight:700; color:#334155;">1 - 9 Units</div>
              <div style="color:var(--accent-gold); font-weight:800;">₹0 / Unit</div>
            </div>
            <div style="background:#fff; padding:6px; border-radius:4px; border:1px solid #cbd5e1;">
              <div style="font-weight:700; color:#334155;">10 - 49 Units</div>
              <div style="color:var(--accent-gold); font-weight:800;">₹0 / Unit</div>
            </div>
            <div style="background:rgba(197,160,89,0.12); padding:6px; border-radius:4px; border:1px solid var(--accent-gold);">
              <div style="font-weight:800; color:#000;">50+ Bulk Rate</div>
              <div style="color:var(--accent-gold); font-weight:800;">₹0 / Unit</div>
            </div>
          </div>
        </div>

        <!-- Delivery Pincode Checker -->
        <div style="margin-bottom:14px;">
          <label style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:#64748b; display:block; margin-bottom:4px;">Check Delivery Pincode:</label>
          <div style="display:flex; gap:8px;">
            <input type="text" id="pincodeCheckInput" placeholder="Enter 6-digit Pincode (e.g. 208004)" maxlength="6" style="flex:1; padding:8px 12px; border:1px solid #cbd5e1; border-radius:4px; font-size:0.85rem;">
            <button onclick="checkPincodeDelivery()" style="padding:8px 14px; background:#0f172a; color:#fff; border:none; border-radius:4px; font-weight:700; font-size:0.8rem; cursor:pointer;">Check</button>
          </div>
          <div id="pincodeResultText" style="font-size:0.8rem; margin-top:4px; font-weight:600;"></div>
        </div>

        <div style="display:flex; flex-direction:column; gap:8px;">
          <button class="btn-editorial btn-gold" style="width: 100%;" onclick="addToCart('${p.id}'); closeQuickView();">ADD TO SHOPPING BAG &rarr;</button>
          <button onclick="openSampleModal('${p.id}')" style="width:100%; padding:9px; background:#ffffff; border:1px solid var(--text-dark); color:var(--text-dark); border-radius:4px; font-weight:800; font-size:0.82rem; cursor:pointer;">REQUEST FREE B2B SAMPLE</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

function updateCustomLogoPreview(val) {
  const box = document.getElementById('customLogoPreviewBox');
  if (box) {
    if (val.trim().length > 0) {
      box.style.display = 'block';
      box.textContent = val.toUpperCase() + ' • ALPHABET PRINT';
    } else {
      box.style.display = 'none';
    }
  }
}

function checkPincodeDelivery() {
  const input = document.getElementById('pincodeCheckInput');
  const res = document.getElementById('pincodeResultText');
  if (!input || !res) return;
  const pin = input.value.trim();
  if (/^\d{6}$/.test(pin)) {
    res.style.color = '#16a34a';
    res.innerHTML = `✓ Express Freight Delivery Available for Pincode ${pin}! Estimated arrival by 26th September.`;
  } else {
    res.style.color = '#ef4444';
    res.innerHTML = `Please enter a valid 6-digit postal pincode.`;
  }
}

// Free Sample Request Modal System
function openSampleModal(productId) {
  closeQuickView();
  const p = PRODUCTS_DATA.find(item => item.id === productId) || PRODUCTS_DATA[0];
  let sampleModal = document.getElementById('sampleRequestModal');
  if (!sampleModal) {
    const div = document.createElement('div');
    div.className = 'modal-overlay';
    div.id = 'sampleRequestModal';
    div.innerHTML = `
      <div class="modal-box" style="max-width: 520px;">
        <button class="modal-close-x" onclick="closeSampleModal()">✕</button>
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 6px;">Request Free B2B Sample</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">For corporate procurement officers & enterprise buyers.</p>
        
        <form onsubmit="handleSampleSubmit(event)">
          <input type="hidden" id="sampleProdId" value="${p.id}">
          <div style="margin-bottom:12px;">
            <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase;">Selected Product Sample</label>
            <input type="text" id="sampleProdTitle" readonly value="${p.name}" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:4px; background:#f8fafc; font-weight:700;">
          </div>
          <div style="margin-bottom:12px;">
            <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase;">Company / Firm Name *</label>
            <input type="text" required placeholder="Organization Name" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:4px;">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
            <div>
              <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase;">Mobile Number *</label>
              <input type="tel" required placeholder="Phone / WhatsApp" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>
            <div>
              <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase;">GSTIN (Optional)</label>
              <input type="text" placeholder="GST Number" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>
          </div>
          <div style="margin-bottom:18px;">
            <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase;">Dispatch Delivery Address *</label>
            <textarea required rows="2" placeholder="Full Factory / Office Address..." style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:4px;"></textarea>
          </div>
          <button type="submit" class="btn-editorial btn-gold" style="width:100%;">CONFIRM FREE SAMPLE DISPATCH &rarr;</button>
        </form>
      </div>
    `;
    document.body.appendChild(div);
    sampleModal = div;
  } else {
    document.getElementById('sampleProdTitle').value = p.name;
    document.getElementById('sampleProdId').value = p.id;
  }
  sampleModal.classList.add('active');
}

function closeSampleModal() {
  const modal = document.getElementById('sampleRequestModal');
  if (modal) modal.classList.remove('active');
}

function handleSampleSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your Free B2B Sample request has been registered. Our Kanpur logistics unit will dispatch the sample box shortly.");
  closeSampleModal();
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

function toggleGstInputs(checked) {
  const box = document.getElementById('gstFieldsBox');
  if (box) box.style.display = checked ? 'block' : 'none';
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('chkName').value;
  const email = document.getElementById('chkEmail').value;
  const phone = document.getElementById('chkPhone').value;
  const address = document.getElementById('chkAddress').value;
  const payment = document.querySelector('input[name="chkPayment"]:checked').value;
  
  const isGst = document.getElementById('chkGstToggle') ? document.getElementById('chkGstToggle').checked : false;
  const companyName = isGst && document.getElementById('chkCompanyName') ? document.getElementById('chkCompanyName').value : '';
  const buyerGst = isGst && document.getElementById('chkGstNumber') ? document.getElementById('chkGstNumber').value : '';

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;
  const orderId = 'ALPH-' + Math.floor(100000 + Math.random() * 900000);

  const orderData = {
    orderId, name, email, phone, address, payment, isGst, companyName, buyerGst, items: [...cart], subtotal, gst, total, timestamp: new Date().toLocaleString()
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
        <img src="Asset/brand_header_logo.png" alt="ALPHABET CORPORATION" style="height:60px; width:auto; object-fit:contain;">
      </div>
      <p style="font-size:0.8rem; color:var(--text-sub); margin-bottom:4px;">679/1 - SEETA RAM NAGAR AHIRWAN, Kanpur, UP - 208004</p>
      <div style="font-size:0.8rem; color:var(--text-sub);">GSTIN: <strong>09DHOPM9732B1ZZ</strong> | PAN: <strong>DHOPM9732B</strong></div>
      <div style="font-weight:800; color:var(--accent-gold); margin-top:8px;">Official ${order.isGst ? 'Tax Invoice' : 'Order Receipt'}: ${order.orderId}</div>
    </div>

    <div style="font-size:0.88rem; margin-bottom:16px;">
      <p><strong>Customer:</strong> ${order.name}</p>
      ${order.isGst && order.companyName ? `<p style="color:var(--accent-gold);"><strong>B2B Firm:</strong> ${order.companyName} | <strong>GSTIN:</strong> ${order.buyerGst || 'N/A'}</p>` : ''}
      <p><strong>Phone:</strong> ${order.phone} | <strong>Email:</strong> ${order.email}</p>
      <p><strong>Shipping Address:</strong> ${order.address}</p>
      <p><strong>Payment Mode:</strong> <span style="text-transform:uppercase; font-weight:700;">${order.payment}</span></p>
    </div>

    <div style="border-top:1px solid var(--border-light); padding-top:12px; margin-bottom:16px;">
      <div style="font-weight:700; font-size:0.9rem; margin-bottom:8px;">Items Summary:</div>
      ${order.items.map(i => `<div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;"><span>${i.name} (x${i.qty})</span><span>₹${i.price * i.qty}</span></div>`).join('')}
      <div style="display:flex; justify-content:space-between; font-size:0.95rem; font-weight:800; border-top:1px dashed var(--border-light); padding-top:8px; margin-top:8px;">
        <span>Total Payable:</span>
        <span>₹${order.total.toLocaleString('en-IN')}</span>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const waBtn = document.getElementById('receiptWhatsAppBtn');
  if (waBtn) {
    waBtn.onclick = () => {
      let text = `Hello ALPHABET CORPORATION! I have placed an order.\n\n*Order ID:* ${order.orderId}\n*Name:* ${order.name}\n`;
      if (order.isGst && order.companyName) {
        text += `*Firm Name:* ${order.companyName}\n*GSTIN:* ${order.buyerGst}\n`;
      }
      text += `*Phone:* ${order.phone}\n*Address:* ${order.address}\n\n*Items:* \n`;
      order.items.forEach(i => text += `- ${i.name} (Qty: ${i.qty})\n`);
      text += `\n*Total Payable:* ₹${order.total}`;

      window.open(`https://wa.me/919667501707?text=${encodeURIComponent(text)}`, '_blank');
    };
  }
}

function closeReceipt() {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.remove('active');
}

// Order Tracking System
function openTrackOrderModal() {
  let modal = document.getElementById('trackOrderModal');
  if (!modal) {
    const div = document.createElement('div');
    div.className = 'modal-overlay';
    div.id = 'trackOrderModal';
    div.innerHTML = `
      <div class="modal-box" style="max-width: 480px;">
        <button class="modal-close-x" onclick="closeTrackOrderModal()">✕</button>
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 6px;">Track Your Shipment</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">Enter your official Order ID or Mobile Number to trace your dispatch status.</p>
        
        <form onsubmit="handleTrackOrderSubmit(event)">
          <div style="margin-bottom:14px;">
            <label style="font-size:0.78rem; font-weight:700; text-transform:uppercase;">Order ID / Mobile Number *</label>
            <input type="text" id="trackInputVal" required placeholder="e.g. ALPH-98214 or +91 9667501707" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:4px;">
          </div>
          <button type="submit" class="btn-editorial btn-gold" style="width:100%;">TRACK SHIPMENT NOW &rarr;</button>
        </form>
        <div id="trackResultBox" style="margin-top:16px; display:none;"></div>
      </div>
    `;
    document.body.appendChild(div);
    modal = div;
  }
  modal.classList.add('active');
}

function closeTrackOrderModal() {
  const modal = document.getElementById('trackOrderModal');
  if (modal) modal.classList.remove('active');
}

function handleTrackOrderSubmit(e) {
  e.preventDefault();
  const val = document.getElementById('trackInputVal').value.trim();
  const box = document.getElementById('trackResultBox');
  if (!box) return;

  box.style.display = 'block';
  box.innerHTML = `
    <div style="padding:14px; background:#f8fafc; border:1px solid var(--accent-gold); border-radius:8px; font-size:0.88rem;">
      <div style="font-weight:800; color:var(--accent-gold); margin-bottom:4px;">SHIPMENT STATUS: DISPATCHED</div>
      <p style="margin-bottom:6px;">Order Ref: <strong>\${val}</strong></p>
      <p style="color:#64748b; font-size:0.82rem; margin-bottom:8px;">Location: Kanpur Industrial Dispatch Hub &bull; Express Surface Freight</p>
      <div style="background:#e2e8f0; height:6px; border-radius:3px; overflow:hidden;">
        <div style="background:var(--accent-gold); width:75%; height:100%;"></div>
      </div>
      <div style="font-size:0.75rem; font-weight:700; text-align:right; margin-top:4px; color:#334155;">Out for Delivery</div>
    </div>
  `;
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

  // User Account Menu Dropdown Click Toggle
  const loginBtn = document.querySelector('.header-login-btn');
  const userDropdown = document.getElementById('headerUserDropdown');
  if (loginBtn && userDropdown) {
    loginBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.user-account-menu-wrapper')) {
        userDropdown.classList.remove('active');
      }
    });
  }

  // Mobile Menu Navigation Toggle & Auto-Close on Link Click
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinksWrapper');
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
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
  if (e.key === 'Escape') {
    closeImageLightbox();
    closeSearchOverlay();
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachGlobalImageClickZoom);
} else {
  attachGlobalImageClickZoom();
}

/* Interactive Header Search Overlay Engine */
function openSearchOverlay() {
  const modal = document.getElementById('searchOverlayModal');
  const input = document.getElementById('headerSearchInput');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) {
      setTimeout(() => {
        input.focus();
        input.select();
      }, 100);
      handleHeaderSearchInput();
    }
  }
}

function closeSearchOverlay(e) {
  if (e && e.target && !e.target.classList.contains('search-overlay-backdrop') && !e.target.classList.contains('search-close-x')) {
    return;
  }
  const modal = document.getElementById('searchOverlayModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function clearHeaderSearch() {
  const input = document.getElementById('headerSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (input) {
    input.value = '';
    input.focus();
    if (clearBtn) clearBtn.style.display = 'none';
    handleHeaderSearchInput();
  }
}

function setSearchQuery(query) {
  const input = document.getElementById('headerSearchInput');
  if (input) {
    input.value = query;
    input.focus();
    handleHeaderSearchInput();
  }
}

function handleHeaderSearchInput() {
  const input = document.getElementById('headerSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const resultsContainer = document.getElementById('searchResultsContainer');
  if (!input || !resultsContainer) return;

  const query = input.value.trim().toLowerCase();
  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
  }

  let filtered = PRODUCTS_DATA;
  if (query.length > 0) {
    filtered = PRODUCTS_DATA.filter(p => {
      return p.name.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.desc && p.desc.toLowerCase().includes(query)) ||
        (p.tag && p.tag.toLowerCase().includes(query));
    });
  }

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p style="font-size:1.1rem; font-weight:700; color:var(--text-dark); margin-bottom:6px;">No products found for "${input.value}"</p>
        <p style="font-size:0.9rem;">Try searching for "A4 Paper", "BOPP Tape", "Box", "Stapler", or "Marker".</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="search-result-count-bar">
      <span>${query ? `Search Results (${filtered.length})` : `All Catalogue Products (${filtered.length})`}</span>
      <span style="font-size:0.75rem; color:#94a3b8;">Click item to open Quick View</span>
    </div>
    <div class="search-results-list">
  `;

  filtered.forEach(item => {
    html += `
      <div class="search-result-item" onclick="openQuickView('${item.id}'); closeSearchOverlay();">
        <img src="${item.image}" alt="${item.name}" class="search-item-thumb">
        <div class="search-item-info">
          <div class="search-item-category">${item.categoryName}</div>
          <div class="search-item-title">${item.name}</div>
          <div class="search-item-desc">${item.desc || ''}</div>
        </div>
        <div class="search-item-action">
          <div class="search-item-price">₹${item.price.toLocaleString('en-IN')}</div>
          <button class="search-add-btn" onclick="event.stopPropagation(); addToCart('${item.id}');">ADD TO BAG</button>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  resultsContainer.innerHTML = html;
}

/* Toast Notifications System (SaaS Slide-in Banner) */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
    <div class="toast-content">
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global Command-K Keyboard Shortcut Listener
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearchOverlay();
  }
});
