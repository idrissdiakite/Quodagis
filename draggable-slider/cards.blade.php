{{--
  Title: Titre et cartes
  Description: Un titre et des cartes à droite ou en dessous
  Category: template-blocks
  Icon: align-pull-right
  Post-Type: page
  Keywords: title cards
--}}

@php
  $data = Block::cards($block['data']);
@endphp

<section class="b-cards @if($data['is_horizontal']){{'horizontal'}}@else{{ 'vertical' }}@endif">
  <div class="container-fluid">
    <div class="row">
      <div class="col-24 col-lg-8 offset-lg-2">
        <div class="b-cards__title colored-title">
          @include('elements/title', ['data' => $data['title'], 'ellipse' => 'ellipse'])
        </div>
      </div>
      @if($data['is_horizontal'])
    </div>
    <div class="b-cards__cards">
      <div class="row">
        @foreach ($data['cards'] as $card)
          <div class="col-24 col-lg-10 @if($loop->index % 2 === 0){{ 'offset-lg-2' }}@else{{ 'offset-lg-0' }}@endif mb-5">
              @include('components/cards/card', ['data' => $card, 'is_horizontal' => $data['is_horizontal']])
          </div>
        @endforeach
      </div>
    </div>
      @else
      <div class="col-24 col-lg-10 offset-lg-2">
        <div class="b-cards__cards">
          @foreach ($data['cards'] as $card)
            @include('components/cards/card', ['data' => $card])
          @endforeach
        </div>
      </div>
    </div>
    @endif
  </div>
</section>
