<?php 
    $title = "Lol trainer";
    $styles = ['setup', 'menu', 'settings', 'credits',  'index'];

    include 'includes/head.php';
?>
<body>
    <?php include 'includes/menu.html';?>
    <?php include 'includes/settings.html';?>
    <?php include 'includes/credits.html';?>

    <div class="board"></div>

    <script src="scripts/index.js"></script>
</body>
</html>