<?php
    // Head HTML
    $title = 'Lol trainer';
    
    $styles = ['setup', 'menu', 'settings', 'index'];
    $scripts = ['board'];
    
    include 'includes/head.php'; 
?>
<body>
    <?php 
        include 'includes/menu.php'; // Menu burger déroulant 
        include 'includes/settings.php'; // Settings
        include 'includes/credits.php'; // Credits
    ?>

    <div class="board"></div>
</body>
</html>