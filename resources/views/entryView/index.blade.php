<!doctype html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->   
     
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    @if (Auth::check())
        <script>
           window.Laravel = {!!json_encode([
               'isLoggedin' => true,
               'user' => Auth::user()
           ])!!}
        </script>
    @else
        <script>
            window.Laravel = {!!json_encode([
                'isLoggedin' => false
            ])!!}
        </script>
    @endif
    <div id="app"></div>

    {{-- 아래는 ACL을 위해 추가. resources/js/app.js 에서 정의사용한다.09/04/2020 --}}
    {{-- 추후에 위에 이미 정의된 window.Laravel 과 합칠 예정 --}}
    @auth
    <script>
        window.user = @json(auth()->user())  
    </script>    
    @endauth

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
