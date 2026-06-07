<!DOCTYPE html>
<html>
  <head>
    @routes
    @viteReactRefresh
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    @vite(['resources/js/app.jsx'])
    @inertiaHead
    <script type="text/javascript"
    src="https://app.sandbox.midtrans.com/snap/snap.js"
    data-client-key="Mid-client-uF7r10PAvon_Enx_"></script>
  </head>
  <body>
    @inertia
  </body>
</html>