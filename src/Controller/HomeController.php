<?php
declare(strict_types=1);

namespace App\Controller;

class HomeController extends AppController
{
    public function index()
    {
        $this->set('name', 'arbi');
    }

    public function demo()
    {
        $this->set('demo', 'hello demo');
    }
}
