<?php
    // Head HTML
    $title = 'Lol trainer';
    
    $styles = ['setup', 'menu', 'settings', 'credits', 'index'];
    $scripts = [];
    
    include 'includes/head.php'; 
?>
<body>
    <?php 
        include 'includes/menu.html'; // Dropdown burger menu
        include 'includes/settings.html'; // Settings
        include 'includes/credits.html'; // Credits
    ?>

    <div class="board"></div>

    <script src="scripts/index.js"></script>
</body>
</html>