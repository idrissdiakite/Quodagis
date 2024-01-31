<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Component extends Controller {
  public static function cardsSlider($data) {
    $cards = [];

    for ($i = 0; $i < $data['cards']; $i++) {
      $cards[] = [
        'content' => $data['cards_' . $i . '_content'],
        'link' => isset($data['cards_' . $i . '_link']) && !empty($data['cards_' . $i . '_link']) ? $data['cards_' . $i . '_link'] : NULL,
      ];
    }

    return [
      'title' => Element::title($data),
      'content' => isset($data['content']) && !empty($data['content']) ? $data['content'] : NULL,
      'cards' => $cards
    ];
  }
}
