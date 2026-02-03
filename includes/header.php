<?php
// Default page title if not set
if (!isset($pageTitle)) {
    $pageTitle = 'Fiona Organics - Pure & Natural';
}

// Navigation Items Array
$navItems = [
    'Home' => 'index.php',
    'Our Products' => '#products',
    'Health Benefits' => '#benefits',
    'Contact' => '#contact'
];

$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle); ?></title>
    <link rel="canonical" href="https://fionaorganics.com/<?php echo basename($_SERVER['PHP_SELF']); ?>" />
    <link rel="icon" type="image/jpeg" href="assets/images/logo.jpg">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Fiona Organics provides 100% pure, farm-fresh Moringa, Beetroot, and Turmeric powders. Chemical-free, nutrient-rich, and eco-friendly superfoods directly from nature.">
    <meta name="keywords" content="Fiona Organics, Moringa Powder, Beetroot Powder, Halidi Powder, Organic Superfoods, Natural Supplements, Chemical Free Food, Healthy Living">
    <meta name="author" content="Fiona Organics">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://fionaorganics.com/">
    <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
    <meta property="og:description" content="Revitalize your life with nature's finest. 100% Organic, pure Moringa and Superfood powders.">
    <meta property="og:image" content="assets/images/logo.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://fionaorganics.com/">
    <meta property="twitter:title" content="<?php echo htmlspecialchars($pageTitle); ?>">
    <meta property="twitter:description" content="Revitalize your life with nature's finest. 100% Organic, pure Moringa and Superfood powders.">
    <meta property="twitter:image" content="assets/images/logo.jpg">

    <!-- Styles -->
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        .logo-img { height: 60px; width: auto; }
    </style>

    <!-- Schema.org JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fiona Organics",
      "url": "https://fionaorganics.com",
      "logo": "https://fionaorganics.com/assets/images/logo.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8900686683",
        "contactType": "Sales",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://instagram.com/fionaorganics",
        "https://facebook.com/fionaorganics"
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="container">
            <a href="index.php">
                <img src="assets/images/logo.jpg" alt="Fiona Organics" class="logo-img">
            </a>
            
            <div class="menu-toggle">☰</div>

            <nav>
                <ul class="nav-links">
                    <?php foreach ($navItems as $name => $link): ?>
                        <li>
                            <a href="<?php echo $link; ?>" 
                               class="<?php echo ($currentPage == $link) ? 'active' : ''; ?>">
                                <?php echo htmlspecialchars($name); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </nav>
        </div>
    </header>
