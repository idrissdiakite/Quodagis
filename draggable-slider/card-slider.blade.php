<div class="c-cards-slider">
  <div class="container-fluid">
    <div class="row">
      <div class="col-24 col-lg-8 offset-lg-2">
        <div class="c-cards-slider__title colored-title">
          @include('elements/title', ['data' => $data['title'], 'ellipse' => 'ellipse'])
        </div>
      </div>
      @if(isset($data['content']))
      <div class="col-24 col-lg-10 offset-lg-2">
        <div class="c-cards-slider__content">{!! $data['content'] !!}</div>
      </div>
      @endif
    </div>
    <div class="c-cards-slider__cards" data-horizontal>
      <div class="c-cards-slider__cursor">{{ display_svg('hand') }}</div>
      <div class="row d-lg-flex align-items-lg-stretch flex-lg-nowrap u-nsb">
        @foreach ($data['cards'] as $card)
          <div class="col-24 col-lg-10 @if($loop->index === 0){{'offset-lg-2'}}@endif">
              @include('components/cards/card', ['data' => $card, 'is_horizontal' => TRUE])
          </div>
        @endforeach
      </div>
    </div>
  </div>
</div>
