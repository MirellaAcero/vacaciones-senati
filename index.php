<!DOCTYPE html>
<html lang="en">
  <head>
    <title>:: SENATI ::</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/yui-reset.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="css/senati-vt.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/senati-vt.js"></script>
  </head>
  <body>

  <?php if (isset($_GET['page']) && $_GET['page'] == 'confirmation'): ?>
    <?php require_once('block-confirmation.php'); ?>
  <?php else: ?>
    <?php require_once('block-header.php'); ?>
    <?php require_once('block-banner.php'); ?>
    <?php require_once('block-cursos.php'); ?>
    <?php require_once('block-sedes.php'); ?>
    <?php require_once('block-information.php'); ?>
    <?php require_once('block-faq.php'); ?>
    <?php require_once('block-footer.php'); ?>
  <?php endif; ?>

  </body>
</html>