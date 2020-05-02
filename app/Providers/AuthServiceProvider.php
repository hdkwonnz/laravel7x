<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('isAdmin', function ($user) { ////for ACL 09/04/2020
            return $user->role === 'admin';
        });
        Gate::define('isAuthor', function ($user) { ////for ACL 09/04/2020
            return $user->role === 'author';
        });
        Gate::define('isUser', function ($user) { ////for ACL 09/04/2020
            return $user->role === 'user';
        });
    }
}
