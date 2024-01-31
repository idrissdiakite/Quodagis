{{--
  Title: Slider et contenu
  Description: Slider de cartes + contenu et classique et image
  Category: template-blocks
  Icon: tide
  Post-Type: page
  Keywords: title cards slider image
--}}

@php
  $data = Block::sliderContent($block['data']);
@endphp

<section class="b-slider-content">
  <div class="b-slider-content-shapes u-opacity">
    <div class="b-slider-content__shape purple"></div>
    <div class="b-slider-content__shape red"></div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="b-slider-content__slider slider-content" data-slider="opacity">
        @include('components/cards-slider', ['data' => $data['cards-slider']])
      </div>
    </div>
    <div class="row">
      <div class="col-24 col-lg-4 offset-lg-9">
        <div class="b-slider-content__circle" data-parallax="-0.5">{{ display_svg('cover-home-circle') }}</div>
      </div>
    <div class="row">
      <div class="col-24 col-lg-10 offset-lg-2">
        <div class="b-slider-content__cc">
          @include('components/classic-content', ['data' => $data['classic-content']])
        </div>
      </div>
      <div class="col-24 col-lg-10 offset-lg-2">
        <div class="b-slider-content__image">
          @include('elements/image', ['data' => $data['image']])
        </div>
      </div>
    </div>
  </div>
</section>