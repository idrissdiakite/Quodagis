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
    ... 
  </div>
</section>