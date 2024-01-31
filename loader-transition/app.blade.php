<!doctype html>
<html @php language_attributes() @endphp>
  @include('partials.head')

  <body class="{{ App::formSubmit() }}">
    <div class="app">
      <div class="e-cursor"></div>
      @php do_action('get_header') @endphp

      @include('partials.header')

      <div class="content" data-taxi role="document">
        @yield('content')
      </div>

      <div class="panel">
        @include('elements/image', ['data' => $GLOBALS['options']['header']['h_logo']])
        <span></span>
      </div>

      @include('partials.footer')

      @php wp_footer() @endphp
    </div>
  </body>
</html>
