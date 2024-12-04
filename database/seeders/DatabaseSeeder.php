<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Abdul Kaderr',
            'email' => 'kader@example.com',
            'password' => '12345678',
            'role' => 'student'
        ]);

        User::factory()->create([
            'name' => 'Teacher',
            'email' => 'teacher@example.com',
            'password' => '12345678',
            'role' => 'teacher'
        ]);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => 'password',
            'role' => 'admin'
        ]);
    }
}
