<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Block extends Controller {
  public static function ourServices($data) {
    $services = [];

    for ($i = 0; $i < $data['services']; $i++) {
      $services[] = [
        'title' => $data['services_' . $i . '_title'],
        'content' => $data['services_' . $i . '_content'],
        'link' => isset($data['services_' . $i . '_link']) && !empty($data['services_' . $i . '_link']) ? $data['services_' . $i . '_link'] : NULL,
      ];
    }

    return [
      'title' => $data['title'],
      'services' => $services,
      'image' => Element::image($data['image'], '30vw'),
    ];
  }
}
