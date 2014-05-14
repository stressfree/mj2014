<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/
xhtml1/DTD/xhtml1-transitional.dtd">
<!--[if lt IE 7]><html class="ie ie6" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<
?php echo $this->language; ?>" lang="<?php echo $this->language; ?>"><![endif]-->
<!--[if IE 7]><html class="ie ie7" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<
?php echo $this->language; ?>" lang="<?php echo $this->language; ?>"><![endif]-->
<!--[if IE 8]><html class="ie ie8" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<
?php echo $this->language; ?>" lang="<?php echo $this->language; ?>"><![endif]-->
<!--[if IE 9]><html class="ie ie9" xmlns="http://www.w3.org/1999/xhtml" xml:lang="<
?php echo $this->language; ?>" lang="<?php echo $this->language; ?>"><![endif]-->
<!--[if gt IE 9]><!--><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<
?php echo $this->language; ?>" lang="<?php echo $this->language; ?>"><!--<![endif]-->
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <jdoc:include type="head" />
        <meta name="viewport" content="width=980, initial-scale=1">
        <link rel="shortcut icon" href="/templates/mj2014/images/favicon.ico" type="image/vnd.microsoft.icon">
        <link type="text/css" rel="stylesheet" href="/templates/mj2014/css/styles.css">
    </head>
    <body id="mjbody" <?php
        $menu = & JSite::getMenu();
        if ($menu->getActive() == $menu->getDefault()) {?>class="homepage"<?php } ?>>
        <div class="header">
            <div class="inner-wrapper">
                <jdoc:include type="modules" name="top" />
            </div>
        </div>
        <div class="body<?php if ($this->countModules('left')) { ?> with-sidebar<?php } ?>">
            <div class="inner-wrapper">
                <?php if ($this->countModules('left')): ?>
                <div class="sidebar">
                    <jdoc:include type="modules" name="left" />
                </div>
                <?php endif; ?>
                <div id="mjcontent" class="content">
                    <jdoc:include type="component" />
                </div>
            </div>
        </div>
        <div class="footer" >
            <div class="inner-wrapper">
                <jdoc:include type="modules" name="footer" />
            </div>
        </div>
        <script type="text/javascript" src="/templates/mj2014/js/script.js"></script>
    </body>
</html>