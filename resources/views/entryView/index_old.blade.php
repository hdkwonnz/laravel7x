<html>
    <!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Laravel Airlock</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
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

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>
</html>
