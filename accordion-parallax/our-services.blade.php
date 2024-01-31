{{--
Title: Nos services
Description: Titre texte et lien + image à droite
Category: template-blocks
Icon: menu-alt3
Post-Type: page
Keywords: title content
--}}

@php
  $data = Block::ourServices($block['data'])
@endphp

<section class="b-services">
  <div class="container-fluid">
    <div class="row">
      <div class="col-24 col-lg-9 offset-lg-3">
        <div class="b-services__left">
          <div class="b-services__suptitle">{{ $data['title']}}</div>
          <div class="b-services__bottom">
            @foreach ($data['services'] as $service)
            <div class="b-services__service">
              <h2 class="b-services__service-title">{{ $service['title']}}</h2>
              <div class="b-services__service-content">
                <div class="b-services__service-description">{{ $service['content']}}</div>
                @if (isset($service['link']))
                  <div class="b-services__service-link">@include('elements/button-secondary', ['data' => $service['link']])</div>
                @endif
              </div>
            </div>
            @endforeach
          </div>
        </div>
      </div>
      <div class="col-24 col-lg-7 offset-lg-2">
        <div class="b-services__right" data-parallax="-1">
          @include('elements/image', ['data' => $data['image']])
        </div>
    </div>
    </div>
  </div>
</section>
