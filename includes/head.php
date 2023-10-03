<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title><?= $title ?></title>

    <?php foreach($styles as $style): ?>
        <link rel="stylesheet" href="styles/<?= $style ?>.css">
    <?php endforeach;?>
</head>