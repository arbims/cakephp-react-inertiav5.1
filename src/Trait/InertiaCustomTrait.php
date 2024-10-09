<?php
declare(strict_types=1);

namespace App\Trait;

use Cake\Event\EventInterface;
use Inertia\Controller\InertiaResponseTrait;

trait InertiaCustomTrait
{
    use InertiaResponseTrait;

    /**
     * @inheritDoc
     */
    public function beforeRender(EventInterface $event)
    {

        if ($this->isErrorStatus() || $this->isFailureStatus()) {
            return null;
        }

        $this->setViewBuilderClass();

        $this->setFlashData();
        $this->setNewData();
        $this->setCsrfToken();
        //$this->setUser();
    }


        /**
     * Sets flash data, and deletes after setting it.
     *
     * @return void
     */
    protected function setNewData(): void
    {
        /** @var \Cake\Http\Session $session */
        $session = $this->getRequest()->getSession();
        $this->set('newData', function () use ($session) {
            if (!$session->check('Flash.flash.1')) {
                return [];
            }

            $flash['newData'] = $session->read('Flash.flash.1')['message'];
            return $flash;
        });
    }



    private function setUser(): void
    {
        $user = $this->Authentication->getIdentity();
        if ($user) {
            $this->set([
                'auth' => [
                    'user' => [
                        'username' => $user->get('username'),
                        'email' => $user->get('email'),
                        'role' => $user->get('role'),
                        'avatar' => $user->get('avatar')
                    ]
                ]
            ]);
        }

    }

}