<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="keywords" content="" />
	<meta name="author" content="" />
	<meta name="robots" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="og:image" content="social-image.png" />
	<meta name="format-detection" content="telephone=no">
	<title>New Learning Era</title>
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <link href="assetsTeacher/vendor/jqvmap/css/jqvmap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="assetsTeacher/vendor/chartist/css/chartist.min.css">
    <link href="assetsTeacher/vendor/jqvmap/css/jqvmap.min.css" rel="stylesheet">
    <link href="assetsTeacher/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
	<link href="assetsTeacher/vendor/owl-carousel/owl.carousel.css" rel="stylesheet">
	<link href="assetsTeacher/css/style.css" rel="stylesheet">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/teacher.jsx',  'resources/js/Layouts/Teacher/AppTeacher.jsx'])
    </head>
<body>

    <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>

    <div id="main-wrapper">
        <div id="layout"></div>
        <div class="content-body">
			<div class="container-fluid">
				@yield('content')
            </div>
        </div>
    </div>

    <script src="assetsTeacher/vendor/global/global.min.js"></script>
	<script src="assetsTeacher/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
	<script src="assetsTeacher/vendor/chart.js/Chart.bundle.min.js"></script>
	<script src="assetsTeacher/vendor/owl-carousel/owl.carousel.js"></script>
    <script src="assetsTeacher/vendor/peity/jquery.peity.min.js"></script>
	<script src="assetsTeacher/vendor/jquery-nice-select/js/jquery.nice-select.min.js"></script>
	<script src="assetsTeacher/vendor/apexchart/apexchart.js"></script>
	<script src="assetsTeacher/js/dashboard/dashboard-1.js"></script>
	<script src="assetsTeacher/js/custom.min.js"></script>
	<script src="assetsTeacher/js/dlabnav-init.js"></script>
	<script src="assetsTeacher/js/demo.js"></script>
</body>
</html>


