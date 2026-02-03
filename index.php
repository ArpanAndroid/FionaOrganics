<?php
require_once 'includes/security.php'; // Load Security Headers
$pageTitle = 'Fiona Organics - Natural Superfoods';

// Product Data Array
$products = [
    [
        'name' => 'Moringa Powder',
        'icon' => '🌿',
        'tagline' => 'The Miracle Tree',
        'benefits' => 'Rich in Vitamins A, C, and E. Boosts immunity and energy levels.',
        'uses' => 'Sprinkle on salads, blend into smoothies, or brew as tea.',
        'health' => 'Excellent for joint health and lowering blood sugar.'
    ],
    [
        'name' => 'Beetroot Powder',
        'icon' => '🟣',
        'tagline' => 'Heart Health Hero',
        'benefits' => 'High in nitrates which help lower blood pressure and improve athletic performance.',
        'uses' => 'Add to juices, yogurt bowls, or use as a natural food coloring.',
        'health' => 'Promotes healthy blood flow and supports liver detoxification.'
    ],
    [
        'name' => 'Turmeric (Halidi) Powder',
        'icon' => '✨',
        'tagline' => 'The Golden Spice',
        'benefits' => 'Contains Curcumin, a powerful anti-inflammatory and antioxidant compound.',
        'uses' => 'Essential in curries, golden milk (lattes), and skincare masks.',
        'health' => 'Supports joint mobility, digestion, and skin health.'
    ]
];

// SEO: Generate Structured Data for Products
$schemaData = [
    "@context" => "https://schema.org",
    "@type" => "ItemList",
    "itemListElement" => []
];

foreach ($products as $index => $product) {
    $schemaData['itemListElement'][] = [
        "@type" => "ListItem",
        "position" => $index + 1,
        "item" => [
            "@type" => "Product",
            "name" => $product['name'],
            "description" => $product['benefits'],
            "image" => "https://fionaorganics.com/assets/images/logo.jpg",
            "brand" => [
                "@type" => "Brand",
                "name" => "Fiona Organics"
            ],
            "offers" => [
                "@type" => "Offer",
                "availability" => "https://schema.org/InStock",
                "price" => "0.00",
                "priceCurrency" => "INR"
            ]
        ]
    ];
}


include 'includes/header.php';
?>

<!-- Structured Data Output -->
<script type="application/ld+json">
    <?php echo json_encode($schemaData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>

<main>
    <!-- Hero Section -->
    <section class="hero" style="background: linear-gradient(180deg, var(--bg-color) 0%, rgba(255,255,255,0.6) 100%); padding: 120px 0 80px;">
        <div class="container hero-content reveal">
            <h1 style="font-size: 4rem; margin-bottom: 1.5rem;">
                Revitalize Your Life with <br>
                <span class="text-gradient" style="background: linear-gradient(135deg, #1a4d2e, #4f6f52); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Nature's Finest Superfoods</span>
            </h1>
            
            <div style="max-width: 800px; margin: 0 auto 3rem;">
                <p style="font-size: 1.4rem; color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.8;">
                    <strong>Fiona Organics</strong> brings you the purest, farm-fresh powders. 
                    We believe in the healing power of plants. Our products are carefully sourced, 
                    sun-dried, and stone-ground to preserve 100% of their natural nutrients.
                </p>
                <p style="font-size: 1.1rem; color: #666;">
                    Whether you are boosting your immunity with Moringa, detoxing with Beetroot, 
                    or fighting inflammation with Halidi — we guarantee <strong>Zero Preservatives, Zero Additives, and 100% Love.</strong>
                </p>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 4rem;">
                <a href="#products" class="btn btn-primary" style="padding: 15px 40px; font-size: 1.1rem;">Explore Products</a>
                <a href="#benefits" class="btn" style="background: white; border: 2px solid var(--accent-color); color: var(--accent-color); padding: 15px 40px; font-size: 1.1rem;">Why Organic?</a>
            </div>

            <!-- Key Features Icons -->
            <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; opacity: 0.8;">
                <div style="text-align: center;">
                    <span style="font-size: 2rem;">🌿</span><br><span style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">100% Organic</span>
                </div>
                <div style="text-align: center;">
                    <span style="font-size: 2rem;">🚜</span><br><span style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">Farm Fresh</span>
                </div>
                <div style="text-align: center;">
                    <span style="font-size: 2rem;">🔬</span><br><span style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">Lab Tested</span>
                </div>
                <div style="text-align: center;">
                    <span style="font-size: 2rem;">💚</span><br><span style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">Vegan Friendly</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="features">
        <div class="container">
            <h2 class="section-title reveal">Our Organic Superfoods</h2>
            
            <div class="features-grid">
                <?php foreach ($products as $product): ?>
                    <div class="feature-card reveal" style="text-align: left;">
                        <div class="feature-icon" style="font-size: 3rem; margin-bottom: 0.5rem;"><?php echo $product['icon']; ?></div>
                        <h3 style="font-size: 1.8rem; margin-bottom: 0.2rem;"><?php echo htmlspecialchars($product['name']); ?></h3>
                        <p style="color: var(--accent-color); font-weight: 600; font-size: 0.9rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px;">
                            <?php echo htmlspecialchars($product['tagline']); ?>
                        </p>
                        
                        <div style="margin-bottom: 1rem;">
                            <strong>💚 Benefits:</strong><br>
                            <span style="color: var(--text-secondary);"><?php echo htmlspecialchars($product['benefits']); ?></span>
                        </div>
                        
                        <div style="margin-bottom: 1rem;">
                            <strong>🥣 How to Use:</strong><br>
                            <span style="color: var(--text-secondary);"><?php echo htmlspecialchars($product['uses']); ?></span>
                        </div>

                         <div>
                            <strong>🏥 Good For Health:</strong><br>
                            <span style="color: var(--text-secondary);"><?php echo htmlspecialchars($product['health']); ?></span>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Why Organic Section -->
    <section id="benefits" class="reveal" style="padding: 100px 0; background-color: #Eeffe5;">
        <div class="container">
            <h2 class="section-title">Why Choose Organic?</h2>
            <div style="max-width: 800px; margin: 0 auto; text-align: left;">
                
                <div style="display: flex; gap: 20px; marginBottom: 30px; align-items: flex-start;">
                    <div style="font-size: 2rem; background: #fff; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 50%;">🚫</div>
                    <div>
                        <h3 style="margin-bottom: 0.5rem; color: var(--accent-color);">100% Chemical Free</h3>
                        <p style="color: var(--text-secondary); line-height: 1.7;">
                            Conventional farming uses synthetic pesticides and fertilizers. 
                            <strong>Fiona Organics</strong> products are grown naturally, ensuring that no harmful toxins enter your body. 
                            We strictly say NO to GMOs and artificial additives.
                        </p>
                    </div>
                </div>

                <div style="display: flex; gap: 20px; margin: 40px 0; align-items: flex-start;">
                    <div style="font-size: 2rem; background: #fff; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 50%;">⚡</div>
                    <div>
                        <h3 style="margin-bottom: 0.5rem; color: var(--accent-color);">Brimming with Nutrients</h3>
                        <p style="color: var(--text-secondary); line-height: 1.7;">
                            Studies show that organic crops contain significantly higher levels of antioxidants and essential vitamins. 
                            Our stone-grinding process ensures that these delicate nutrients (like Vitamin C in Moringa) are preserved, not destroyed by heat.
                        </p>
                    </div>
                </div>

                <div style="display: flex; gap: 20px; marginBottom: 30px; align-items: flex-start;">
                    <div style="font-size: 2rem; background: #fff; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 50%;">🌍</div>
                    <div>
                        <h3 style="margin-bottom: 0.5rem; color: var(--accent-color);">Better for the Planet</h3>
                        <p style="color: var(--text-secondary); line-height: 1.7;">
                            Organic farming supports healthy soil and pollinator biodiversity. 
                            By choosing Fiona Organics, you aren't just choosing health for yourself; you are supporting sustainable agriculture that protects Mother Earth.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Health Banner -->
    <section class="cta reveal">
        <div class="container">
            <div class="cta-box" style="background: #e8f5e9; border: 1px solid #c8e6c9;">
                <h2 style="color: #1b5e20;">Why Choose Fiona Organics?</h2>
                <p style="margin-bottom: 2rem; color: #388e3c;">100% Pure & Preservative Free. Sourced directly from nature.</p>
                <!-- Clickable Coming Soon Button -->
                <button class="btn btn-primary">Coming Soon - Connect With Us</button>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="reveal" style="padding: 100px 0; background-color: #f9fbf2;">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; text-align: center; max-width: 1000px; margin: 0 auto;">
                
                <!-- Address -->
                <div style="flex: 1; min-width: 280px; padding: 20px;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">📍</div>
                    <h3 style="margin-bottom: 0.5rem; color: var(--accent-color);">Visit Us</h3>
                    <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">
                        Habra, North Habra,<br>
                        North 24 Parganas,<br>
                        West Bengal, India
                    </p>
                </div>

                <!-- Phone -->
                <div style="flex: 1; min-width: 280px; padding: 20px;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">📞</div>
                    <h3 style="margin-bottom: 0.5rem; color: var(--accent-color);">Call Us</h3>
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">
                        <a href="tel:+918900686683" style="text-decoration: none; border-bottom: 1px solid currentColor;">+91 8900686683</a>
                    </p>
                </div>

                <!-- Email -->
                <div style="flex: 1; min-width: 280px; padding: 20px;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">✉️</div>
                    <h3 style="margin-bottom: 0.5rem; color: var(--accent-color);">Email Us</h3>
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">
                        <a href="mailto:fionaorganics@gmail.com" style="text-decoration: none; border-bottom: 1px solid currentColor;">fionaorganics@gmail.com</a>
                    </p>
                </div>

            </div>
        </div>
    </section>
    <!-- Interest Popup Modal -->
    <div id="interestModal" class="modal-overlay" style="display: none;">
        <div class="modal-content" style="max-width: 640px; padding: 1rem; height: 80vh; overflow-y: auto;">
            <span class="close-modal" style="z-index: 10; font-size: 2.5rem;">&times;</span>
            
            <!-- Google Form Embed Placeholder -->
            <!-- 🚨 INSTRUCTION: Replace the 'src' link below with your actual Google Form Embed Link -->
            <!-- Go to Google Form -> Send -> <> (Embed) -> Copy Link -->
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSddbS9-f9k4yM3l8kK_8b_example_id/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                style="min-height: 500px; border: none;">
                Loading Google Form...
            </iframe>
            
            <div style="text-align: center; margin-top: 10px; color: #666; font-size: 0.9rem;">
                (Please update the Google Form Link in <code>index.php</code>)
            </div>
        </div>
    </div>

</main>

<?php include 'includes/footer.php'; ?>
