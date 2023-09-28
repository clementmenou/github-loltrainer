<?php
    // Head HTML
    $title = 'Lol trainer';
    
    $styles = ['setup', 'menu', 'settings', 'index'];
    $scripts = ['board', 'menu', 'settings'];
    
    include 'includes/head.php'; 
?>
<body>
    <?php 
        include 'includes/menu.html'; // Menu burger déroulant 
        include 'includes/settings.html'; // Settings
        include 'includes/credits.html'; // Credits
    ?>

    <div class="board"></div>
</body>
</html>