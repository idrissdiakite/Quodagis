<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Block extends Controller {
  public static function logos($data) {
    $logos = [];

    for ($i = 0; $i < $data['logos']; $i++) {
      $logos[] = [
        'link' => $data['logos_' . $i . '_link'],
        'image' => Element::image($data['logos_' . $i . '_image'], '15vw'),
      ];
    }

    return [
      'title' => Element::title($data),
      'content' => isset($data['content']) && !empty($data['content']) ? $data['content'] : NULL,
      'logos' => $logos,
    ];
  }
}
