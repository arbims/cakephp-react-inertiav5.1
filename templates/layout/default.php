<!DOCTYPE html>
<html lang="fr">

<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?= $this->Html->meta('icon') ?>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.yellow.min.css">
    <?= $this->Vite->assets('js/main.jsx', \Cake\Core\Configure::read('IS_DEV'), 'react') ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
</head>

<body>
    <div id="root">
        <?= $this->Inertia->make($page, 'app', ''); ?>
    </div>
</body>

</html>