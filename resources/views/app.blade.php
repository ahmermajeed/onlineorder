<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>Index</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <script type="application/javascript">let  baseurl = '{{ url('/') }}';</script>
 </head>
    <body>
         <div id='app'>
             <router-view></router-view>
         </div>
        <script src="{{ asset('js/app.js') }}"></script>
     </body>

</html>
