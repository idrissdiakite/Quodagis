{{--
  Title: Couverture simple
  Description: Couverture avec titre centré et image en fond
  Category: template-blocks
  Icon: cover-image
  Post-Type: page
  Keywords: couverture cover title titre image background
--}}

@php
  $data = Block::coverSimple($block['data']);
@endphp

<section class="b-cover-simple">
  <div class="b-cover-simple-shapes u-opacity">
    <div class="b-cover-simple__shape purple u-opacity"></div>
    <div class="b-cover-simple__shape red u-opacity"></div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-24 col-lg-10 offset-lg-7">
        <h1 class="b-cover-simple__title">{!! $data['title'] !!}</h1>
      </div>
      <div class="b-cover-simple__image">
        @include('elements/image', ['data' => $data['image']])
      </div>
    </div>
  </div>
</section>

