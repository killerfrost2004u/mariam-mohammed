/**
 * Mariam Mohamed — Portfolio Main JavaScript
 * Handles i18n (EN/AR), Live SERP Simulator, ROI Calculator, Case Modals, Lightbox, Counters, & 3D Tilt
 */

// ==========================================================================
// Translation Dictionary (Bilingual EN / AR)
// ==========================================================================

const I18N_DATA = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.results": "Results",
    "nav.tools": "Tools",
    "nav.cases": "Case Studies",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.certs": "Certifications",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "nav.status": "Available for Projects",

    // Hero
    "hero.location": "Mansoura, Egypt",
    "hero.cta_work_mini": "Work with Mariam ↗",
    "hero.eyebrow": "🚀 Grow Your Digital Presence",
    "hero.requested_header": "SEO Specialist | ASO Specialist | E-commerce SEO | Technical SEO | Organic Growth",
    "hero.name": "Mariam Mohamed",
    "hero.title": "Data-Driven SEO & ASO Specialist Driving Explosive Organic Growth",
    "hero.bio": "Specialized in search engine ranking algorithms, App Store Optimization (ASO), and e-commerce stores across Shopify, Salla, Zid, and WordPress. Equipped with a technical web development background to bridge search data, indexing, and technical site health.",
    "hero.cta_work": "Explore Case Studies",
    "hero.cta_contact": "Let's Grow Together",
    "hero.cta_whatsapp": "WhatsApp Chat",
    "hero.handwritten": "Let's Grow Together",
    "hero.spec_seo": "SEO & ASO Specialist",
    "hero.spec_aso": "App Store Optimization",
    "hero.spec_ecom": "E-commerce SEO (Shopify/Salla/Zid)",
    "hero.spec_tech": "Technical SEO & Web Architecture",
    "hero.badge_rankings": "Higher Rankings",
    "hero.badge_growth": "Organic Traffic Surge",

    // Laptop Visual Mockup
    "mockup.search_placeholder": "site:mariammohamed.dev/growth-case-studies",
    "mockup.kpi_impressions": "Impressions",
    "mockup.kpi_clicks": "Clicks",
    "mockup.kpi_ctr": "Avg. CTR",
    "mockup.kpi_pos": "Avg. Position",

    // Platforms Ribbon
    "ribbon.label": "Specialized Platforms & Tools",

    // Selected Results (CV data)
    "results.eyebrow": "Verified Evidence",
    "results.title": "Proven Search & Revenue Performance",
    "results.desc": "Real client data tracked via Google Search Console and Google Analytics 4 across high-stakes e-commerce, apps, and services.",
    "stat.salla_title": "Salla Store",
    "stat.salla_val": "63.6K",
    "stat.salla_desc": "Organic impressions, 2.2K clicks & $255.97 generated revenue (35.8% of total).",
    "stat.shopify_title": "Shopify Store",
    "stat.shopify_val": "869",
    "stat.shopify_desc": "Organic sessions with 67.63% engagement rate generating $198.99 in revenue.",
    "stat.ecom1_title": "E-Commerce Month 1",
    "stat.ecom1_val": "76.7%",
    "stat.ecom1_desc": "Of total reported store revenue generated via organic search in first 30 days.",
    "stat.ai_title": "AI Search Growth",
    "stat.ai_val": "+70%",
    "stat.ai_desc": "Surge in AI search impressions (437 → 745) and 4.31K total search impressions.",
    "stat.aso_title": "App Store & Google Play",
    "stat.aso_val": "6.1",
    "stat.aso_desc": "Average ranking position for app landing page driving direct mobile downloads.",

    // Interactive Tools
    "tools.eyebrow": "Interactive Sandbox",
    "tools.title": "Experience the SEO Advantage",
    "tools.desc": "Test how your business appears in search results or estimate your potential organic revenue boost.",
    "tab.serp": "Live SERP & ASO Simulator",
    "tab.roi": "Organic ROI Calculator",

    // Simulator
    "sim.presets_label": "Choose a Scenario Preset:",
    "sim.preset_shopify": "Shopify Fashion Store",
    "sim.preset_salla": "Salla Natural Oils Store",
    "sim.preset_app": "Mobile App (Play & App Store)",
    "sim.preset_invest": "Investment & AI Search Portal",
    "sim.title_label": "Page Title Tag (<title>)",
    "sim.url_label": "Target URL / Breadcrumbs",
    "sim.desc_label": "Meta Description",
    "sim.device_desktop": "Desktop",
    "sim.device_mobile": "Mobile",

    // Calculator
    "calc.traffic_label": "Current Monthly Organic Visitors:",
    "calc.aov_label": "Average Order Value ($):",
    "calc.growth_label": "Target Organic Traffic Growth:",
    "calc.cr_label": "Store Conversion Rate (%):",
    "calc.roi_badge": "Projected Growth Potential",
    "calc.roi_new_rev": "Projected Additional Annual Revenue",
    "calc.new_visitors": "Additional Monthly Visitors",
    "calc.new_orders": "Estimated New Monthly Orders",
    "calc.cta": "Claim Your Custom Growth Plan on WhatsApp",

    // Cases
    "cases.eyebrow": "Case Studies",
    "cases.title": "Documented Impact & Case Proofs",
    "cases.desc": "Every metric is verifiable with raw Search Console and GA4 analytics exports.",
    "filter.all": "All Cases",
    "filter.ecom": "E-commerce SEO",
    "filter.aso": "ASO & App Pages",
    "filter.ai": "AI & Web Search",
    "cases.view_details": "View Full Proof & Strategy",

    // Experience
    "exp.eyebrow": "Career Journey",
    "exp.title": "Professional Experience",
    "exp.desc": "Proven track record executing end-to-end SEO, ASO, and analytics tracking.",
    "exp.aait_role": "SEO Specialist",
    "exp.aait_company": "Awamer Alshabaka (AAIT)",
    "exp.aait_date": "July 2026 – Present",
    "exp.aait_b1": "Develop and execute data-driven SEO strategies for service-based and product-based websites.",
    "exp.aait_b2": "Lead App Store Optimization (ASO) for mobile applications across Google Play Store and Apple App Store.",
    "exp.aait_b3": "Optimize high-converting app landing pages to boost organic indexing and maximize app download conversions.",
    "exp.aait_b4": "Execute in-depth keyword architecture, search intent clustering, and competitor gap analysis.",
    "exp.aait_b5": "Monitor search trends, index status, and user behavior data to iterate on optimization opportunities.",

    "exp.azraq_role": "SEO & E-commerce Specialist (Full-time)",
    "exp.azraq_company": "Azraq",
    "exp.azraq_date": "9 Months",
    "exp.azraq_b1": "Managed on-page and technical SEO strategies across multiple platforms: Shopify, WordPress, Salla, and Zid.",
    "exp.azraq_b2": "Conducted competitor benchmarking and keyword opportunity research to dominate high-intent buying queries.",
    "exp.azraq_b3": "Implemented advanced conversion tracking, enhanced ecommerce events, and custom triggers via Google Tag Manager.",
    "exp.azraq_b4": "Delivered technical audits resolving crawl errors, canonical duplicates, schema issues, and speed bottlenecks.",

    // Skills
    "skills.eyebrow": "Capabilities",
    "skills.title": "Technical SEO & Tool Stack",
    "skills.desc": "A rare blend of search algorithm knowledge, conversion tracking, and front-end development capabilities.",
    "cluster.seo": "Search Engine Optimization (SEO)",
    "cluster.aso": "App Store Optimization (ASO)",
    "cluster.platforms": "E-Commerce & CMS Platforms",
    "cluster.tech": "Technical & Web Development",

    // Certifications & Education
    "certs.eyebrow": "Credentials",
    "certs.title": "Certifications & Education",
    "certs.desc": "Certified by world-leading SEO platforms and holding an academic degree in Management Information Systems.",
    "cert1.title": "SEO Essentials with Semrush",
    "cert1.issuer": "Semrush Academy",
    "cert1.validity": "Valid through 21 April 2027",
    "cert2.title": "Semrush SEO Crash Course with Brian Dean",
    "cert2.issuer": "Semrush Academy",
    "cert2.validity": "Brian Dean / Semrush Verified",
    "edu.title": "Bachelor's Degree in Management Information Systems (MIS)",
    "edu.sub": "Higher Institute for Computers and Management Information Systems",
    "edu.grade": "Grade: Excellent with Distinction (ممتاز)",

    // FAQ
    "faq.eyebrow": "Common Questions",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How quickly can we expect to see results from SEO?",
    "faq.a1": "While full domain authority builds over 3-6 months, targeted optimizations for existing websites can show measurable ranking and impression jumps in as little as 2-4 weeks—as shown in our Month 1 E-commerce case study where organic search generated 76.7% of store revenue within 30 days.",
    "faq.q2": "What platforms do you work with for e-commerce SEO?",
    "faq.a2": "I specialize in the leading Arab and global platforms: Salla (سلة), Zid (زد), Shopify, WooCommerce, and custom WordPress setups. Each platform has specific canonical, metadata, and schema nuances that I tune for maximum indexing speed.",
    "faq.q3": "How does App Store Optimization (ASO) complement SEO?",
    "faq.a3": "SEO captures high-intent web searchers on Google and guides them to an optimized app landing page, while ASO optimizes your app's title, subtitle, keywords field, screenshots, and conversion rate directly on Google Play and Apple App Store for compound organic downloads.",
    "faq.q4": "How does your technical development background help my SEO?",
    "faq.a4": "Unlike purely content-focused SEOs, my knowledge of HTML, CSS, JavaScript, and Flutter allows me to inspect DOM rendering, diagnose Core Web Vitals, fix JavaScript indexing barriers, and write custom Schema markup directly.",

    // Contact
    "contact.eyebrow": "Let's Connect",
    "contact.handwritten": "Let's Grow Together",
    "contact.title": "Ready to scale your organic search revenue?",
    "contact.desc": "Whether you are running an e-commerce brand on Salla or Shopify, launching a mobile app, or scaling a service business, let's build an organic engine that prints sustainable results.",
    "contact.location": "Mansoura, Egypt",
    "contact.cv_btn": "Download Official CV (PDF)",
    "form.name": "Your Name / Company",
    "form.email": "Email Address",
    "form.phone": "WhatsApp / Phone Number",
    "form.platform": "Store / Platform / App Type",
    "form.msg": "Project Details & Goals",
    "form.submit": "Send Message via WhatsApp",
    "form.copy_email": "Copy Email Address",
    "toast.copied": "Email copied to clipboard!",
    "footer.rights": "Mariam Mohamed. All rights reserved. Specialized in SEO, ASO & Organic Growth."
  },

  ar: {
    // Nav
    "nav.about": "نبذة",
    "nav.results": "النتائج",
    "nav.tools": "الأدوات",
    "nav.cases": "دراسات الحالة",
    "nav.experience": "الخبرات",
    "nav.skills": "المهارات",
    "nav.certs": "الشهادات",
    "nav.contact": "تواصل معي",
    "nav.cta": "لنبدأ العمل",
    "nav.status": "متاحة للمشاريع الجديدة",

    // Hero
    "hero.location": "المنصورة، مصر",
    "hero.cta_work_mini": "ابدأ التعاون مع مريم ↗",
    "hero.eyebrow": "🚀 طوّر حضورك الرقمي",
    "hero.requested_header": "SEO Specialist | ASO Specialist | E-commerce SEO | Technical SEO | Organic Growth",
    "hero.name": "مريم محمد",
    "hero.title": "أخصائية سيو ونمو عضوي | تصدّر نتائج البحث ومتاجر التطبيقات",
    "hero.bio": "متخصصة في خوارزميات محركات البحث، وتحسين متاجر التطبيقات (ASO)، ومتاجر التجارة الإلكترونية عبر شوبيفاي، سلة، زد، وووردبريس. مدعومة بخلفية تقنية في تطوير الويب والبرمجة لفهم دقيق للبيانات، وسرعة الفهرسة، والصحة التقنية للمواقع.",
    "hero.cta_work": "استكشف دراسات الحالة",
    "hero.cta_contact": "معاً نحو نمو مستمر",
    "hero.cta_whatsapp": "محادثة واتساب سريعة",
    "hero.handwritten": "معاً نحو نمو مستمر",
    "hero.spec_seo": "أخصائية سيو ونمو عضوي",
    "hero.spec_aso": "تحسين متاجر التطبيقات (ASO)",
    "hero.spec_ecom": "سيو المتاجر (شوبيفاي / سلة / زد)",
    "hero.spec_tech": "السيو التقني وهندسة الويب",
    "hero.badge_rankings": "ترتيب متقدم في جوجل",
    "hero.badge_growth": "قفزة في الزيارات العضوية",

    // Laptop Visual Mockup
    "mockup.search_placeholder": "site:mariammohamed.dev/growth-case-studies",
    "mockup.kpi_impressions": "مرات الظهور",
    "mockup.kpi_clicks": "النقرات",
    "mockup.kpi_ctr": "متوسط CTR",
    "mockup.kpi_pos": "متوسط الترتيب",

    // Platforms Ribbon
    "ribbon.label": "أبرز المنصات والأدوات المعتمدة",

    // Selected Results (CV data)
    "results.eyebrow": "أدلة موثقة بالأرقام",
    "results.title": "نتائج حقيقية في الزيارات والإيرادات",
    "results.desc": "بيانات دقيقة مسجلة من واقع Google Search Console وGoogle Analytics 4 لمشاريع تجارة إلكترونية، تطبيقات جوال، ومواقع خدمية.",
    "stat.salla_title": "متجر سلة",
    "stat.salla_val": "63.6K",
    "stat.salla_desc": "ظهور عضوي، و2.2K نقرة، ومبيعات بقيمة $255.97 تشكل 35.8% من إجمالي الإيرادات.",
    "stat.shopify_title": "متجر شوبيفاي",
    "stat.shopify_val": "869",
    "stat.shopify_desc": "جلسة بحث عضوي بمعدل تفاعل 67.63% وحققت $198.99 من الإيرادات المسجلة.",
    "stat.ecom1_title": "متجر إلكتروني (الشهر الأول)",
    "stat.ecom1_val": "76.7%",
    "stat.ecom1_desc": "من إجمالي مبيعات المتجر تحققت بفضل السيو العضوي خلال أول 30 يوماً فقط.",
    "stat.ai_title": "نمو البحث بالذكاء الاصطناعي",
    "stat.ai_val": "+70%",
    "stat.ai_desc": "زيادة في ظهور البحث بالذكاء الاصطناعي (من 437 إلى 745) وإجمالي 4.31K ظهور.",
    "stat.aso_title": "صفحة هبوط التطبيق (Play & App Store)",
    "stat.aso_val": "6.1",
    "stat.aso_desc": "متوسط ترتيب لصفحة التطبيق على جوجل خلال 28 يوماً لدفع تحميلات الجوال.",

    // Interactive Tools
    "tools.eyebrow": "مختبر تفاعلي حي",
    "tools.title": "جرّب قوة السيو بالأدلة الحية",
    "tools.desc": "شاهد كيف تظهر نتيجتك في محرك البحث، أو احسب العائد المالي المتوقع لمتجرك من الزيارات العضوية.",
    "tab.serp": "محاكي نتائج بحث جوجل وASO",
    "tab.roi": "حاسبة العائد الاستثماري (ROI)",

    // Simulator
    "sim.presets_label": "اختر نموذجاً جاهزاً للتجربة:",
    "sim.preset_shopify": "متجر أزياء شوبيفاي",
    "sim.preset_salla": "متجر زيوت طبيعية على سلة",
    "sim.preset_app": "تطبيق جوال (Play & App Store)",
    "sim.preset_invest": "موقع خدمات استثمارية وذكاء اصطناعي",
    "sim.title_label": "عنوان الصفحة (<title>)",
    "sim.url_label": "رابط الصفحة والمسار (URL)",
    "sim.desc_label": "الوصف التعريفي (Meta Description)",
    "sim.device_desktop": "كمبيوتر",
    "sim.device_mobile": "جوال",

    // Calculator
    "calc.traffic_label": "الزيارات العضوية الشهرية الحالية:",
    "calc.aov_label": "متوسط قيمة الطلب الواحد ($):",
    "calc.growth_label": "نسبة النمو العضوي المستهدفة:",
    "calc.cr_label": "معدل تحويل المتجر (%):",
    "calc.roi_badge": "فرصة النمو المالي المتوقعة",
    "calc.roi_new_rev": "الإيرادات السنوية الإضافية المتوقعة",
    "calc.new_visitors": "زيارات شهرية إضافية",
    "calc.new_orders": "طلبات شراء جديدة شهرياً",
    "calc.cta": "ناقش خطة نمو متجرك عبر واتساب الآن",

    // Cases
    "cases.eyebrow": "دراسات الحالة",
    "cases.title": "أثر ملموس مدعوم بتقارير رسمية",
    "cases.desc": "كل رقم هنا موثق بلقطات أصلية وبيانات حقيقية من منصات التحليلات.",
    "filter.all": "جميع المشاريع",
    "filter.ecom": "سيو المتاجر",
    "filter.aso": "التطبيقات وASO",
    "filter.ai": "الذكاء الاصطناعي والويب",
    "cases.view_details": "عرض التقرير الكامل والأدلة",

    // Experience
    "exp.eyebrow": "المسيرة المهنية",
    "exp.title": "الخبرات العملية",
    "exp.desc": "سجل مهني حافل بتنفيذ حملات سيو، تحسين ASO، وإعداد نظم تتبع دقيقة للتحويلات.",
    "exp.aait_role": "أخصائية سيو (SEO Specialist)",
    "exp.aait_company": "أوامر الشبكة (Awamer Alshabaka - AAIT)",
    "exp.aait_date": "يوليو 2026 – حتى الآن",
    "exp.aait_b1": "تطوير وتنفيذ استراتيجيات السيو الشاملة للمواقع الخدمية والتجارية وتتبع نمو الكلمات التنافسية.",
    "exp.aait_b2": "قيادة تحسين متاجر التطبيقات (ASO) على Google Play وApple App Store لزيادة التحميلات العضوية.",
    "exp.aait_b3": "تحسين صفحات هبوط التطبيقات لجذب المستخدمين المؤهلين من جوجل مباشرة وتحويلهم لمستخدمين.",
    "exp.aait_b4": "إجراء بحوث دقيقة للكلمات المفتاحية وتحليل ثغرات المنافسين لتصدر الفرص الذهبية.",
    "exp.aait_b5": "تحليل مؤشرات الأداء والبيانات لتحديد فرص التحسين المستمرة ومواكبة تحديثات جوجل.",

    "exp.azraq_role": "أخصائية سيو وتجارة إلكترونية (دوام كامل)",
    "exp.azraq_company": "أزرق (Azraq)",
    "exp.azraq_date": "9 أشهر",
    "exp.azraq_b1": "إدارة وتحسين المتاجر الإلكترونية على منصات: شوبيفاي، ووردبريس، سلة، وزد لتحسين الظهور البيعي.",
    "exp.azraq_b2": "تنفيذ استراتيجيات السيو الداخلي (On-page) وتحسين الأوصاف وبنية المنتجات للكلمات الشرائية.",
    "exp.azraq_b3": "إعداد وتتبع أحداث التحويل (Conversion Tracking) عبر Google Tag Manager وGoogle Analytics 4.",
    "exp.azraq_b4": "حل المشكلات التقنية للفهرسة والروابط المكسورة وتحسين تجربة المستخدم وسرعة المتجر.",

    // Skills
    "skills.eyebrow": "القدرات الفنية",
    "skills.title": "منظومة السيو والأدوات التقنية",
    "skills.desc": "مزيج يجمع بين فهم خوارزميات البحث، أدوات التحليل المتقدمة، وأساسيات التطوير البرمجي.",
    "cluster.seo": "تحسين محركات البحث (SEO)",
    "cluster.aso": "تحسين متاجر التطبيقات (ASO)",
    "cluster.platforms": "منصات التجارة والمحتوى",
    "cluster.tech": "التطوير والتقنيات البرمجية",

    // Certifications & Education
    "certs.eyebrow": "الاعتمادات العلمية",
    "certs.title": "الشهادات الأكاديمية والمهنية",
    "certs.desc": "شهادات معتمدة دولياً من منصات رائدة، إلى جانب بكالوريوس نظم المعلومات الإدارية بتقدير ممتاز.",
    "cert1.title": "أساسيات السيو مع سيمرش (Semrush Essentials)",
    "cert1.issuer": "أكاديمية سيمرش (Semrush Academy)",
    "cert1.validity": "سارية حتى 21 أبريل 2027",
    "cert2.title": "الدورة المكثفة في السيو مع برايان دين (Brian Dean)",
    "cert2.issuer": "أكاديمية سيمرش (Semrush Academy)",
    "cert2.validity": "معتمدة من الخبير العالمي برايان دين",
    "edu.title": "بكالوريوس في نظم المعلومات الإدارية (MIS)",
    "edu.sub": "المعهد العالي للحاسبات ونظم المعلومات الإدارية",
    "edu.grade": "التقدير: ممتاز مع مرتبة الشرف (Distinction)",

    // FAQ
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "إجابات على أكثر ما يسأل عنه العملاء",
    "faq.q1": "كم من الوقت نحتاج لملاحظة نتائج السيو؟",
    "faq.a1": "بناء السلطة الشاملة للموقع يحتاج من 3 إلى 6 أشهر، لكن التحسينات المدروسة للمتاجر الحالية تبدأ بإظهار قفزات واضحة في الظهور والنقرات خلال 2 إلى 4 أسابيع، تماماً كما حدث في دراسة حالة متجرنا حيث حقق السيو 76.7% من المبيعات في أول 30 يوماً.",
    "faq.q2": "ما هي منصات المتاجر التي تعملين عليها؟",
    "faq.a2": "أعمل باحترافية على منصات التجارة الإلكترونية الأكثر انتشاراً: سلة، زد، شوبيفاي، وووردبريس (WooCommerce). لكل منصة إعدادات خاصة للميتاداتا وبنية الروابط وبيانات المنتجات (Schema) أتقن ضبطها لسرعة الأرشفة.",
    "faq.q3": "كيف يدعم السيو تحسين متاجر التطبيقات (ASO)؟",
    "faq.a3": "السيو يجلب مستخدمين يبحثون عن حلول محددة على جوجل ويوجههم لصفحة هبوط محسنة، بينما يضمن ASO ظهور التطبيق في قمة متجري Google Play وApp Store، فيتكامل المصدران لمضاعفة التحميلات بأقل تكلفة.",
    "faq.q4": "ما ميزة وجود خلفية برمجية وتقنية لدى أخصائي السيو؟",
    "faq.a4": "الخلفية البرمجية في HTML وCSS وJavaScript وFlutter تمكنني من كشف عوائق الزحف والأرشفة في كود الموقع مباشرة، وحل مشكلات سرعة التحميل (Core Web Vitals)، وإضافة أكواد Schema المعقدة بدون انتظار مطور خارجي.",

    // Contact
    "contact.eyebrow": "تواصل معي",
    "contact.handwritten": "معاً نحو نمو مستمر",
    "contact.title": "هل أنت مستعد لمضاعفة مبيعاتك العضوية؟",
    "contact.desc": "سواء كنت تدير متجراً على سلة أو شوبيفاي، أو تطلق تطبيق جوال جديد، أو تبحث عن تصدر الكلمات الخدمية، فلنبدأ معاً استراتيجية تصنع لك نمواً مستداماً.",
    "contact.location": "المنصورة، مصر",
    "contact.cv_btn": "تحميل السيرة الذاتية الرسمية (PDF)",
    "form.name": "الاسم / اسم النشاط التجاري",
    "form.email": "البريد الإلكتروني",
    "form.phone": "رقم الواتساب / الهاتف",
    "form.platform": "منصة المتجر أو نوع التطبيق",
    "form.msg": "تفاصيل المشروع والأهداف المستهدفة",
    "form.submit": "إرسال التفاصيل عبر واتساب",
    "form.copy_email": "نسخ البريد الإلكتروني",
    "toast.copied": "تم نسخ البريد الإلكتروني بنجاح!",
    "footer.rights": "مريم محمد. جميع الحقوق محفوظة. متخصصة في خدمات السيو و ASO والنمو العضوي."
  }
};

// ==========================================================================
// Verified Case Studies Data (Loaded with Extracted Assets)
// ==========================================================================

const CASE_STUDIES = [
  {
    id: "shopify",
    category: "ecom",
    platform: "Shopify",
    title_en: "Shopify E-commerce SEO Growth",
    title_ar: "سيو متجر شوبيفاي وزيادة المبيعات",
    desc_en: "Organic search optimization and buyer-intent keyword targeting for a Shopify e-commerce brand.",
    desc_ar: "تحسين البحث العضوي واستهداف الكلمات الشرائية لمتجر تجارة إلكترونية على منصة شوبيفاي.",
    industry_en: "E-commerce & Retail",
    industry_ar: "تجارة إلكترونية وتجزئة",
    period_en: "Documented Milestone",
    period_ar: "فترة قياسية مسجلة",
    img: "assets/proofs/case-shopify.webp",
    metrics: [
      { label_en: "Organic Sessions", label_ar: "جلسات عضوية", val: "869" },
      { label_en: "Engagement Rate", label_ar: "معدل التفاعل", val: "67.63%" },
      { label_en: "Organic Revenue", label_ar: "إيرادات السيو", val: "$198.99" },
      { label_en: "Revenue Share", label_ar: "نسبة الإيراد", val: "26.23%" },
      { label_en: "Impressions", label_ar: "مرات الظهور", val: "47.3K" },
      { label_en: "Clicks", label_ar: "النقرات", val: "1.73K" }
    ],
    strategy_en: [
      "Targeted high-intent transactional search queries for product collections.",
      "Optimized Shopify meta tags, product titles, and JSON-LD product schema.",
      "Fixed pagination indexing issues and collection filter crawl bloat.",
      "Tracked revenue attribution and checkout events via Google Tag Manager & GA4."
    ],
    strategy_ar: [
      "استهداف الكلمات المفتاحية الشرائية ذات نية الشراء العالية للمنتجات والأقسام.",
      "تحسين الميتاداتا وعناوين المنتجات على شوبيفاي وتطبيق Schema Products المتقدمة.",
      "معالجة مشاكل فهرسة الصفحات وفلاتر الأقسام لتوفير ميزانية الزحف.",
      "تتبع عوائد السيو ومسار الشراء داخل المتجر عبر Google Tag Manager وGA4."
    ]
  },
  {
    id: "salla",
    category: "ecom",
    platform: "Salla (سلة)",
    title_en: "Salla Store: 63.6K Impressions & Dominant Rankings",
    title_ar: "متجر سلة: 63.6K ظهور وتصدر كلمات العناية بالبشرة والشعر",
    desc_en: "Scaling organic visibility for a high-volume Salla store selling natural oils and body care.",
    desc_ar: "مضاعفة الظهور العضوي لمتجر على سلة متخصص في زيوت العناية الطبيعية والشعر.",
    industry_en: "Health & Beauty",
    industry_ar: "العناية والصحة والجمال",
    period_en: "Active Growth Campaign",
    period_ar: "حملة نمو نشطة",
    img: "assets/proofs/case-salla.webp",
    metrics: [
      { label_en: "Total Impressions", label_ar: "إجمالي الظهور", val: "63.6K" },
      { label_en: "Clicks", label_ar: "النقرات", val: "2.2K" },
      { label_en: "Avg. Position", label_ar: "متوسط الترتيب", val: "9.2" },
      { label_en: "Generated Revenue", label_ar: "مبيعات السيو", val: "$255.97" },
      { label_en: "Organic Sessions", label_ar: "جلسات السيو", val: "779" },
      { label_en: "Revenue Share", label_ar: "نسبة المبيعات", val: "35.86%" }
    ],
    strategy_en: [
      "Engineered comprehensive topical authority around natural beauty and hair care oils.",
      "Implemented tailored Salla platform SEO adjustments, SEO title rewrites, and alt tags.",
      "Captured answer box snippets and image search results across Saudi Arabia & GCC.",
      "Monitored key purchase events, add-to-cart clicks, and average CTR optimization."
    ],
    strategy_ar: [
      "بناء سلطة موضوعية (Topical Authority) شاملة حول زيوت العناية الطبيعية وتغذية الشعر.",
      "تطبيق تعديلات متخصصة لمتجر سلة، وإعادة كتابة عناوين السيو، وضبط نصوص الصور البديلة.",
      "تصدر نتائج البحث المميزة (Snippets) ونتائج بحث الصور في السعودية ودول الخليج.",
      "متابعة دقيقة لأحداث الإضافة للسلة ونمو نسبة النقر إلى الظهور (CTR)."
    ]
  },
  {
    id: "ecom-month1",
    category: "ecom",
    platform: "E-Commerce",
    title_en: "Fast-Track SEO: 76.7% Revenue Share in Month 1",
    title_ar: "سيو سريع: 76.7% من مبيعات المتجر في الشهر الأول",
    desc_en: "Rapid indexation and high-converting keyword rankings delivering immediate revenue for a new e-commerce store.",
    desc_ar: "أرشفة فورية وتصدر سريع لكلمات شرائية حققت عائداً مباشراً لمتجر جديد خلال أول 30 يوماً.",
    industry_en: "E-commerce Startup",
    industry_ar: "انطلاقة متجر تجارة إلكترونية",
    period_en: "First 30 Days Launch",
    period_ar: "أول 30 يوماً من الإطلاق",
    img: "assets/proofs/case-ecom-month1.png",
    metrics: [
      { label_en: "Revenue Share", label_ar: "نسبة مبيعات السيو", val: "76.73%" },
      { label_en: "Month 1 Revenue", label_ar: "مبيعات الشهر الأول", val: "SAR 564" },
      { label_en: "Engagement Rate", label_ar: "معدل التفاعل", val: "100%" },
      { label_en: "Search Impressions", label_ar: "مرات الظهور", val: "822" },
      { label_en: "Average Position", label_ar: "متوسط الترتيب", val: "18.3" }
    ],
    strategy_en: [
      "Focused on low-competition, high-conversion long-tail keyword clusters.",
      "Constructed lean technical setup ensuring immediate Google bot crawl and indexing.",
      "Crafted persuasive title tags and compelling meta descriptions maximizing initial CTR.",
      "Established baseline conversion tracking in GA4 to prove organic search attribution."
    ],
    strategy_ar: [
      "التركيز على الكلمات الطويلة (Long-tail keywords) منخفضة المنافسة وعالية التحويل.",
      "بنية تقنية خفيفة وسريعة ضمنت زحف روبوتات جوجل وأرشفة الصفحات فورياً.",
      "صياغة عناوين وأوصاف تحفيزية جذابة ضاعفت نسبة النقر ومعدل الشراء منذ اليوم الأول.",
      "تأسيس نظام تتبع كامل في GA4 أثبت أن السيو كان المصدر الأكبر لمبيعات المتجر."
    ]
  },
  {
    id: "app-landing",
    category: "aso",
    platform: "Google Play & App Store",
    title_en: "App Landing Page ASO: 6.1 Avg Ranking",
    title_ar: "سيو وASO لصفحة هبوط تطبيق: متوسط ترتيب 6.1",
    desc_en: "Optimizing an app landing page to rank on Google search and funnel qualified organic users to download on App Store & Google Play.",
    desc_ar: "تحسين صفحة هبوط التطبيق لتتصدر نتائج بحث جوجل وتوجه المستخدمين لتحميل التطبيق مباشرة من متاجر التطبيقات.",
    industry_en: "Mobile App & Tech",
    industry_ar: "تطبيقات الهواتف الذكية",
    period_en: "28 Days Performance",
    period_ar: "أداء 28 يوماً",
    img: "assets/proofs/case-app-landing.png",
    metrics: [
      { label_en: "Avg. Ranking Position", label_ar: "متوسط الترتيب", val: "6.1" },
      { label_en: "Impressions", label_ar: "مرات الظهور", val: "3.63K" },
      { label_en: "App Store Clicks", label_ar: "نقرات التحميل", val: "70" },
      { label_en: "Average CTR", label_ar: "متوسط CTR", val: "1.9%" }
    ],
    strategy_en: [
      "Engineered app landing page schema with SoftwareApplication & MobileApplication tags.",
      "Aligned web keywords with Google Play Store & Apple App Store search terms.",
      "Designed clear app download CTA funnels with deep links to mobile app stores.",
      "Monitored fast crawler indexation and mobile usability benchmarks."
    ],
    strategy_ar: [
      "تطبيق أكواد Schema المتخصصة للتطبيقات (SoftwareApplication وMobileApplication).",
      "مواءمة الكلمات المفتاحية في صفحة الويب مع مصطلحات البحث داخل متجري جوجل بلاي وآب ستور.",
      "تصميم مسار تحويل واضح مع روابط ذكية توجه الزوار مباشرة لصفحة التحميل المناسبة لنظام هواتفهم.",
      "متابعة سرعة الأرشفة ومعايير التوافق التام مع تجربة مستخدمي الهواتف الذكية."
    ]
  },
  {
    id: "invest-ai",
    category: "ai",
    platform: "Website / Web Portal",
    title_en: "Investment Services: +70% AI Search Visibility",
    title_ar: "موقع خدمات استثمارية: نمو 70% في ظهور الذكاء الاصطناعي",
    desc_en: "Growing organic authority and capturing new AI-driven search overviews and generative search results.",
    desc_ar: "بناء السلطة الرقمية وتصدر نتائج البحث المعتمدة على الذكاء الاصطناعي (AI Search / Overviews).",
    industry_en: "Financial & Investment Services",
    industry_ar: "خدمات مالية واستثمارية",
    period_en: "28 Days Comparison",
    period_ar: "مقارنة 28 يوماً",
    img: "assets/proofs/case-invest-ai.png",
    metrics: [
      { label_en: "AI Search Growth", label_ar: "نمو ظهور الذكاء الاصطناعي", val: "+70%" },
      { label_en: "AI Impressions", label_ar: "ظهور AI (السابق 437)", val: "745" },
      { label_en: "Total Impressions", label_ar: "إجمالي الظهور (السابق 2.66K)", val: "4.31K" },
      { label_en: "Click Growth", label_ar: "نمو النقرات", val: "50 Clicks" }
    ],
    strategy_en: [
      "Structured content for LLM / AI Search ingestion with clear entity definitions.",
      "Implemented comprehensive FAQ, financial schema, and author authority markers.",
      "Surged AI search impressions from 437 to 745 in 28 days (+70% boost).",
      "Grew total search impressions by over 62% from 2.66K to 4.31K."
    ],
    strategy_ar: [
      "تنظيم وهندسة المحتوى ليتوافق مع نماذج الذكاء الاصطناعي ومحركات البحث التوليدية.",
      "تطبيق Schema متقدمة للخدمات المالية والأسئلة الشائعة وتأكيد هوية وخبرة الموقع.",
      "قفزة في ظهور نتائج البحث بالذكاء الاصطناعي من 437 إلى 745 خلال 28 يوماً (+70%).",
      "زيادة إجمالي ظهور الموقع بنسبة تتجاوز 62% من 2.66K إلى 4.31K ظهور."
    ]
  }
];

// ==========================================================================
// Simulator Presets
// ==========================================================================

const SIMULATOR_PRESETS = {
  shopify: {
    title: "Luxury Modest Fashion & Abayas | Fast Worldwide Shipping | Mariam Mohamed SEO",
    url: "https://www.modestluxury.com › collections › abayas",
    desc: "Discover exclusive luxury abayas and evening modest dresses tailored with premium silk. Enjoy free express shipping and easy returns. Ranked #1 for buyer queries.",
    rating: "4.9",
    reviews: "1,248"
  },
  salla: {
    title: "متجر الزيوت الطبيعية للعناية بالشعر والبشرة | توصيل سريع للسعودية والخليج",
    url: "https://salla.sa/natural-oils › products › hair-growth",
    desc: "تسوق أفضل الزيوت الطبيعية الأصلية 100% لتكثيف وتغذية الشعر وعلاج التقصف. نتائج مضمونة وعروض حصرية مع شحن سريع لكافة مناطق المملكة والخليج.",
    rating: "4.8",
    reviews: "892"
  },
  app: {
    title: "Daily Fitness & Workout Tracker App | Download on Google Play & App Store",
    url: "https://fitpulse.app › download-mobile-app",
    desc: "Transform your fitness with AI personal coaching and custom workout plans. Over 500,000 active athletes. Download free now on Apple App Store & Google Play.",
    rating: "4.9",
    reviews: "3,640"
  },
  invest: {
    title: "Smart Global Investment Strategies & Wealth Advisory | Certified Experts",
    url: "https://investpeak.com › global-wealth-management",
    desc: "Maximize wealth growth with data-backed asset allocation, AI market insights, and tailored portfolios for institutions and high-net-worth individuals.",
    rating: "5.0",
    reviews: "410"
  }
};

// ==========================================================================
// State Management (Pure Light Mode)
// ==========================================================================

let currentLang = 'en';
let activeCaseFilter = 'all';

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLightMode();
  initLanguage();
  renderCaseStudies();
  initScrollEffects();
  initSimulator();
  initRoiCalculator();
  initModals();
  initTiltEffect();
  initCounters();
  initFaqAccordion();
  initTypewriter();
  initHeroParallax();
  initScrollAnimations();
});

function initLightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.removeItem('mm-theme');
  localStorage.removeItem('portfolio_theme');
}

// ==========================================================================
// Active Typewriter Animation (Laptop Mockup)
// ==========================================================================

function initTypewriter() {
  const queryEl = document.getElementById('hero-search-query');
  if (!queryEl) return;

  const queries = [
    "Shopify e-commerce organic growth...",
    "Salla store SEO +63.6K impressions...",
    "Mobile app ASO keywords rank #1...",
    "Technical SEO & site speed 99...",
    "High-intent commercial keywords..."
  ];

  let queryIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeStep() {
    const currentQuery = queries[queryIndex];
    if (isDeleting) {
      charIndex--;
      queryEl.textContent = currentQuery.substring(0, charIndex);
    } else {
      charIndex++;
      queryEl.textContent = currentQuery.substring(0, charIndex);
    }

    let delay = isDeleting ? 35 : 75;

    if (!isDeleting && charIndex === currentQuery.length) {
      delay = 2200; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      queryIndex = (queryIndex + 1) % queries.length;
      delay = 400; // pause before typing next
    }

    setTimeout(typeStep, delay);
  }

  typeStep();
}

// ==========================================================================
// 3D Spatial Hero Parallax Physics
// ==========================================================================

function initHeroParallax() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const stage = document.querySelector('.hero-visual-stage');
  const laptop = document.getElementById('hero-laptop-card');
  const badgeTop = document.querySelector('.badge-top-right');
  const badgeBottom = document.querySelector('.badge-bottom-left');
  if (!stage || !laptop) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (y / (rect.height / 2)) * -9;
    const rotY = (x / (rect.width / 2)) * 11;

    laptop.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    if (badgeTop) {
      badgeTop.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.03)`;
    }
    if (badgeBottom) {
      badgeBottom.style.transform = `translate(${x * -0.06}px, ${y * -0.06}px) scale(1.03)`;
    }
  });

  stage.addEventListener('mouseleave', () => {
    laptop.style.transform = '';
    laptop.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    if (badgeTop) badgeTop.style.transform = '';
    if (badgeBottom) badgeBottom.style.transform = '';
    setTimeout(() => { laptop.style.transition = ''; }, 600);
  });
}

// ==========================================================================
// Scroll Reveal Animations
// ==========================================================================

function initScrollAnimations() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const revealTargets = document.querySelectorAll('.bento-card, .case-card, .timeline-item, .specialty-card, .tool-sandbox-col');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => {
    el.classList.add('reveal-item');
    observer.observe(el);
  });
}

// ==========================================================================
// Language & i18n
// ==========================================================================

function initLanguage() {
  const savedLang = localStorage.getItem('mm-lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
    currentLang = savedLang;
  } else {
    currentLang = 'en';
  }
  applyLanguage(currentLang);

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  }

  const drawerLangBtn = document.getElementById('drawer-lang-btn');
  if (drawerLangBtn) {
    drawerLangBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mm-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update button labels
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'العربية' : 'EN';
  const drawerLangBtn = document.getElementById('drawer-lang-btn');
  if (drawerLangBtn) drawerLangBtn.textContent = lang === 'en' ? 'العربية' : 'EN';

  // Replace text for all elements with data-i18n
  const dict = I18N_DATA[lang] || I18N_DATA.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Re-render dynamic case studies
  renderCaseStudies();

  // Update live simulator placeholders and text
  updateSimulatorLang();
}

// ==========================================================================
// Case Studies Rendering & Filtering
// ==========================================================================

function renderCaseStudies() {
  const container = document.getElementById('cases-cards-container');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const filtered = activeCaseFilter === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === activeCaseFilter);

  container.innerHTML = filtered.map(c => {
    const title = isAr ? c.title_ar : c.title_en;
    const desc = isAr ? c.desc_ar : c.desc_en;
    const m1 = c.metrics[0];
    const m2 = c.metrics[2] || c.metrics[1];

    return `
      <article class="case-card tilt-card" data-case-id="${c.id}">
        <div class="case-card-thumb-wrap" onclick="openCaseModal('${c.id}')">
          <img src="${c.img}" alt="${title}" class="case-card-thumb" loading="lazy">
          <span class="case-badge-pill">${c.platform}</span>
          <div class="case-zoom-overlay">
            <div class="zoom-icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </div>
          </div>
        </div>
        <div class="case-card-body">
          <h3 class="case-card-title">${title}</h3>
          <p class="case-card-desc">${desc}</p>
          <div class="case-metrics-badges">
            <div class="case-metric-small">
              <span class="case-metric-val">${m1.val}</span>
              <span class="case-metric-name">${isAr ? m1.label_ar : m1.label_en}</span>
            </div>
            <div class="case-metric-small">
              <span class="case-metric-val">${m2.val}</span>
              <span class="case-metric-name">${isAr ? m2.label_ar : m2.label_en}</span>
            </div>
          </div>
          <button class="case-card-btn" onclick="openCaseModal('${c.id}')">
            <span>${isAr ? 'عرض التقرير الكامل والأدلة' : 'View Full Proof & Strategy'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Case filter buttons
document.addEventListener('click', (e) => {
  const filterBtn = e.target.closest('.case-filter-btn');
  if (filterBtn) {
    document.querySelectorAll('.case-filter-btn').forEach(b => b.classList.remove('active'));
    filterBtn.classList.add('active');
    activeCaseFilter = filterBtn.getAttribute('data-filter') || 'all';
    renderCaseStudies();
  }
});

// ==========================================================================
// Case Study Detail Modal & Fullscreen Lightbox
// ==========================================================================

function openCaseModal(caseId) {
  const c = CASE_STUDIES.find(item => item.id === caseId);
  if (!c) return;

  const isAr = currentLang === 'ar';
  const title = isAr ? c.title_ar : c.title_en;
  const desc = isAr ? c.desc_ar : c.desc_en;
  const industry = isAr ? c.industry_ar : c.industry_en;
  const period = isAr ? c.period_ar : c.period_en;
  const strategy = isAr ? c.strategy_ar : c.strategy_en;

  const metricsHTML = c.metrics.map(m => `
    <div style="background:var(--bg-secondary);padding:14px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);text-align:center;">
      <div style="font-size:1.4rem;font-weight:900;color:var(--primary);font-family:var(--font-mono);">${m.val}</div>
      <div style="font-size:0.76rem;color:var(--text-muted);font-weight:600;margin-top:4px;">${isAr ? m.label_ar : m.label_en}</div>
    </div>
  `).join('');

  const strategyHTML = strategy.map(item => `
    <li style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;font-size:0.92rem;color:var(--text-muted);">
      <svg style="color:var(--primary);flex-shrink:0;margin-top:3px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${item}</span>
    </li>
  `).join('');

  const modalBody = document.getElementById('modal-case-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
      <span class="eyebrow-badge" style="margin:0;">${c.platform}</span>
      <span style="font-size:0.8rem;color:var(--text-subtle);font-family:var(--font-mono);">${industry} • ${period}</span>
    </div>
    <h2 style="font-size:1.8rem;font-weight:900;color:var(--text-main);line-height:1.25;margin-bottom:12px;">${title}</h2>
    <p style="font-size:1rem;color:var(--text-muted);line-height:1.6;margin-bottom:24px;">${desc}</p>
    
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:12px;margin-bottom:28px;">
      ${metricsHTML}
    </div>

    <div style="margin-bottom:28px;">
      <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin-bottom:12px;">
        ${isAr ? 'الاستراتيجية والتنفيذ' : 'Optimization Approach & Execution'}
      </h3>
      <ul style="list-style:none;padding:0;">
        ${strategyHTML}
      </ul>
    </div>

    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);">
          ${isAr ? 'الدليل الموثق من التحليلات' : 'Verified Evidence (Google Analytics & Search Console)'}
        </h3>
        <button onclick="openLightbox('${c.img}', '${title.replace(/'/g, "\\'")}')" style="font-size:0.82rem;font-weight:700;color:var(--primary);display:inline-flex;align-items:center;gap:4px;">
          <span>${isAr ? 'تكبير الصورة' : 'Full Screen Zoom'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
      </div>
      <div class="modal-proof-img-wrap" style="cursor:zoom-in;" onclick="openLightbox('${c.img}', '${title.replace(/'/g, "\\'")}')">
        <img src="${c.img}" alt="${title}" class="modal-proof-img">
      </div>
      <p style="font-size:0.78rem;color:var(--text-subtle);text-align:center;font-family:var(--font-mono);">
        ${isAr ? 'مصدر البيانات: Google Search Console وGoogle Analytics 4' : 'Verified Source: Google Search Console & Google Analytics 4 Reports'}
      </p>
    </div>
  `;

  const modal = document.getElementById('case-modal');
  if (modal) {
    if (typeof modal.showModal === 'function') {
      try {
        if (!modal.open) modal.showModal();
      } catch (e) {
        modal.classList.add('open');
      }
    } else {
      modal.classList.add('open');
    }
  }
}

function closeCaseModal() {
  const modal = document.getElementById('case-modal');
  if (modal) {
    if (typeof modal.close === 'function') {
      try {
        if (modal.open) modal.close();
      } catch (e) {
        modal.classList.remove('open');
      }
    } else {
      modal.classList.remove('open');
    }
  }
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById('fullscreen-lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-cap');
  if (lightbox && img) {
    img.src = src;
    img.alt = caption || '';
    if (cap) cap.textContent = caption || '';
    if (typeof lightbox.showModal === 'function') {
      try {
        if (!lightbox.open) lightbox.showModal();
      } catch (e) {
        lightbox.classList.add('open');
      }
    } else {
      lightbox.classList.add('open');
    }
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('fullscreen-lightbox');
  if (lightbox) {
    if (typeof lightbox.close === 'function') {
      try {
        if (lightbox.open) lightbox.close();
      } catch (e) {
        lightbox.classList.remove('open');
      }
    } else {
      lightbox.classList.remove('open');
    }
  }
}

function initModals() {
  const closeBtn = document.getElementById('case-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeCaseModal);

  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);

  // Modern Web Guidance: Fallback for browsers without native <dialog closedby="any">
  if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => { 
        pressedOutside = outside(e, dialog); 
      });
      dialog.addEventListener('pointerup', (e) => { 
        if (pressedOutside && outside(e, dialog)) {
          if (dialog.id === 'fullscreen-lightbox') closeLightbox();
          else if (dialog.id === 'case-modal') closeCaseModal();
          else if (typeof dialog.close === 'function') dialog.close();
        } 
      });
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeCaseModal();
      closeMobileDrawer();
    }
  });
}

// ==========================================================================
// Live SERP & ASO Simulator
// ==========================================================================

function initSimulator() {
  const titleInput = document.getElementById('sim-input-title');
  const urlInput = document.getElementById('sim-input-url');
  const descInput = document.getElementById('sim-input-desc');

  if (!titleInput || !urlInput || !descInput) return;

  // Load initial preset
  applySimPreset('shopify');

  // Input listeners
  titleInput.addEventListener('input', updateSimPreview);
  urlInput.addEventListener('input', updateSimPreview);
  descInput.addEventListener('input', updateSimPreview);

  // Preset buttons
  document.querySelectorAll('.preset-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetKey = btn.getAttribute('data-preset');
      applySimPreset(presetKey);
    });
  });

  // Device toggle buttons
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const device = btn.getAttribute('data-device');
      const box = document.getElementById('serp-preview-card');
      if (box) {
        if (device === 'mobile') {
          box.style.maxWidth = '390px';
          box.style.margin = '0 auto';
        } else {
          box.style.maxWidth = '100%';
        }
      }
    });
  });

  // Tools tabs (SERP vs ROI)
  document.querySelectorAll('.tool-tab-btn').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.tool-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tool-tab-pane').forEach(p => p.classList.remove('active'));
      tabBtn.classList.add('active');
      const targetPane = document.getElementById(tabBtn.getAttribute('data-tab'));
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

function applySimPreset(key) {
  const p = SIMULATOR_PRESETS[key] || SIMULATOR_PRESETS.shopify;
  const titleInput = document.getElementById('sim-input-title');
  const urlInput = document.getElementById('sim-input-url');
  const descInput = document.getElementById('sim-input-desc');

  if (titleInput) titleInput.value = p.title;
  if (urlInput) urlInput.value = p.url;
  if (descInput) descInput.value = p.desc;

  updateSimPreview();
}

function updateSimPreview() {
  const titleInput = document.getElementById('sim-input-title');
  const urlInput = document.getElementById('sim-input-url');
  const descInput = document.getElementById('sim-input-desc');

  const prevTitle = document.getElementById('preview-serp-title');
  const prevUrl = document.getElementById('preview-serp-url');
  const prevDesc = document.getElementById('preview-serp-desc');
  const titleLen = document.getElementById('sim-title-len');
  const descLen = document.getElementById('sim-desc-len');

  const titleVal = titleInput ? titleInput.value.trim() : '';
  const urlVal = urlInput ? urlInput.value.trim() : '';
  const descVal = descInput ? descInput.value.trim() : '';

  if (prevTitle) prevTitle.textContent = titleVal || 'Enter your SEO page title...';
  if (prevUrl) prevUrl.textContent = urlVal || 'https://yourwebsite.com › page';
  if (prevDesc) prevDesc.textContent = descVal || 'Enter your meta description to see how it renders in Google search results...';

  if (titleLen) {
    titleLen.textContent = `${titleVal.length} / 60 chars`;
    titleLen.style.color = titleVal.length > 60 ? '#B91C1C' : 'var(--primary)';
  }
  if (descLen) {
    descLen.textContent = `${descVal.length} / 160 chars`;
    descLen.style.color = descVal.length > 160 ? '#B91C1C' : 'var(--primary)';
  }
}

function updateSimulatorLang() {
  const isAr = currentLang === 'ar';
  if (isAr) {
    applySimPreset('salla');
  } else {
    applySimPreset('shopify');
  }
}

// ==========================================================================
// Organic ROI & Growth Calculator
// ==========================================================================

function initRoiCalculator() {
  const trafficSlider = document.getElementById('calc-slider-traffic');
  const aovSlider = document.getElementById('calc-slider-aov');
  const growthSlider = document.getElementById('calc-slider-growth');
  const crSlider = document.getElementById('calc-slider-cr');

  if (!trafficSlider || !aovSlider || !growthSlider || !crSlider) return;

  const updateCalc = () => {
    const traffic = parseFloat(trafficSlider.value) || 0;
    const aov = parseFloat(aovSlider.value) || 0;
    const growthPercent = parseFloat(growthSlider.value) || 0;
    const cr = (parseFloat(crSlider.value) || 1.8) / 100;

    // Display values
    document.getElementById('disp-traffic').textContent = traffic.toLocaleString();
    document.getElementById('disp-aov').textContent = `$${aov.toFixed(0)}`;
    document.getElementById('disp-growth').textContent = `+${growthPercent}%`;
    document.getElementById('disp-cr').textContent = `${(cr * 100).toFixed(1)}%`;

    // Formulas
    const additionalVisitors = traffic * (growthPercent / 100);
    const additionalOrdersMonthly = additionalVisitors * cr;
    const additionalRevenueMonthly = additionalOrdersMonthly * aov;
    const additionalRevenueAnnual = additionalRevenueMonthly * 12;

    document.getElementById('roi-annual-rev').textContent = `+$${Math.round(additionalRevenueAnnual).toLocaleString()}`;
    document.getElementById('roi-additional-visitors').textContent = `+${Math.round(additionalVisitors).toLocaleString()}`;
    document.getElementById('roi-additional-orders').textContent = `+${Math.round(additionalOrdersMonthly).toLocaleString()}`;
  };

  trafficSlider.addEventListener('input', updateCalc);
  aovSlider.addEventListener('input', updateCalc);
  growthSlider.addEventListener('input', updateCalc);
  crSlider.addEventListener('input', updateCalc);

  updateCalc();
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================

function initFaqAccordion() {
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ==========================================================================
// Number Counter Animation
// ==========================================================================

function initCounters() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.counter-trigger').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const targetText = el.getAttribute('data-target') || el.textContent;
  const numMatch = targetText.match(/([0-9.]+)/);
  if (!numMatch) return;

  const targetNum = parseFloat(numMatch[1]);
  const prefix = targetText.split(numMatch[1])[0] || '';
  const suffix = targetText.split(numMatch[1])[1] || '';
  const isFloat = numMatch[1].includes('.');
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = targetNum * easeOut;

    el.textContent = `${prefix}${isFloat ? current.toFixed(1) : Math.round(current)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetText;
    }
  }

  requestAnimationFrame(update);
}

// ==========================================================================
// Antigravity 3D Card Tilt Effect
// ==========================================================================

function initTiltEffect() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ==========================================================================
// Scroll Effects: Progress Bar, Navbar Sticky, & Back to Top
// ==========================================================================

function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const siteNav = document.getElementById('site-nav');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = `${scrollPercent}%`;

    if (siteNav) {
      if (scrollY > 40) {
        siteNav.classList.add('scrolled');
      } else {
        siteNav.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle-btn');
  const drawerClose = document.getElementById('drawer-close-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  if (menuToggle) menuToggle.addEventListener('click', openMobileDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeMobileDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });
}

function openMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// Contact Actions: Copy Email, WhatsApp Generator
// ==========================================================================

function copyEmailToClipboard(email = 'mariamdoghem1999@gmail.com') {
  navigator.clipboard.writeText(email).then(() => {
    showToast(currentLang === 'ar' ? 'تم نسخ البريد الإلكتروني بنجاح!' : 'Email copied to clipboard!');
  }).catch(() => {
    // fallback
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(currentLang === 'ar' ? 'تم نسخ البريد الإلكتروني بنجاح!' : 'Email copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;

  const msgSpan = document.getElementById('toast-msg');
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Contact form WhatsApp submission
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('form-name')?.value || '';
  const email = document.getElementById('form-email')?.value || '';
  const phone = document.getElementById('form-phone')?.value || '';
  const platform = document.getElementById('form-platform')?.value || '';
  const msg = document.getElementById('form-msg')?.value || '';

  const isAr = currentLang === 'ar';
  const greeting = isAr
    ? `مرحباً مريم، أنا ${name}، أرغب في مناقشة مشروع سيو ونمو عضوي:\n- المنصة: ${platform}\n- البريد: ${email}\n- الهاتف: ${phone}\n- التفاصيل: ${msg}`
    : `Hi Mariam, I'm ${name}, interested in an SEO & Organic Growth project:\n- Platform: ${platform}\n- Email: ${email}\n- Phone: ${phone}\n- Details: ${msg}`;

  const encoded = encodeURIComponent(greeting);
  window.open(`https://wa.me/201063202939?text=${encoded}`, '_blank');
}

// Calculator prefill WhatsApp
function handleRoiWhatsApp() {
  const traffic = document.getElementById('disp-traffic')?.textContent || '';
  const aov = document.getElementById('disp-aov')?.textContent || '';
  const growth = document.getElementById('disp-growth')?.textContent || '';
  const annualRev = document.getElementById('roi-annual-rev')?.textContent || '';

  const isAr = currentLang === 'ar';
  const text = isAr
    ? `مرحباً مريم، قمت بتجربة حاسبة العائد الاستثماري (ROI) في موقعك وأرغب في مناقشة تحقيق نمو بقيمة ${annualRev} سنوياً لمتجري (الزيارات الحالية: ${traffic}، متوسط الطلب: ${aov}، نمو مستهدف: ${growth}).`
    : `Hi Mariam, I tested the ROI Calculator on your portfolio and want to discuss scaling our store to achieve ${annualRev} additional annual revenue (Current Traffic: ${traffic}, AOV: ${aov}, Target Growth: ${growth}).`;

  window.open(`https://wa.me/201063202939?text=${encodeURIComponent(text)}`, '_blank');
}
