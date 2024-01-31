<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Block extends Controller {
  public static function sliderContent($data) {
    return [
      'cards-slider' => Component::cardsSlider($data),
      'classic-content' => Component::classicContent($data),
      'image' => Element::image($data['image'], '50vw'),
    ];
  }
}
