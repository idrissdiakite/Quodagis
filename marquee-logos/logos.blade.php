{{--
Title: Logos
Description: Blocs de logos
Category: template-blocks
Icon: images-alt
Post-Type: page
Keywords: logo partners customers partenaires clients
--}}

@php
  $data = Block::logos($block['data']);
@endphp

<section class="b-logos @if($data['content']){{'mb-5'}}@endif">
  <div class="container-fluid">
    @if(isset($data['title']['title']))
    <div class="b-logos__titles">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          @include('elements/title', ['data' => $data['title'], 'ellipse' => 'ellipse'])
        </div>
        @if(isset($data['content']))
        <div class="col-lg-10 offset-lg-2">{!! wpautop($data['content']) !!}</div>
        @endif
      </div>
    </div>
    @endif
    <div class="row">
      <div class="col-lg-22 offset-lg-1">
        <div class="b-logos__wrapper u-nsb">
          <div class="b-logos__list">
            @foreach ($data['logos'] as $logo)
              @if ($logo['link'])
                <a class="b-logos__logo" href="{{ $logo['link'] }}" target="_blank" rel="noopener">
                  @include('elements/image', ['data' => $logo['image']])
                </a>
              @else
                <div class="b-logos__logo">
                  @include('elements/image', ['data' => $logo['image']])
                </div>
              @endif
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
