<?php

namespace M2Max\KantLandingPage;

use M2Max\CSSManager\IKant;

/**
 * Created by PhpStorm.
 * User: MaximeMaillet
 * Date: 18/02/2017
 * Time: 12:23
 */
class KantLandingPage extends IKant
{
    public function __construct() {
    }

    public static function Kanter()
    {
        // TODO: Implement Kanter() method.
    }

    public static function generate($data)
    {
        // TODO: Implement generate() method.
    }

    public function css()
    {
        return [__DIR__.'/css/bootstrap.min.css', __DIR__ . '/css/index.css'];
    }

    public function js()
    {
        return [__DIR__.'/js/jquery-3.1.1.min.js', __DIR__.'/js/bootstrap.min.js', __DIR__.'/js/main.js'];
    }

    public function media ()
    {
        return [__DIR__.'/media'];
    }
}