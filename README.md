
# Tokoku Inertia

Easy way to track sales, orders, and items
for F&B or event merch booths.


## Prerequisites
Must have this installed:
- Composer
- PHP
- npm
- MySQL
## Installation

### Clone this repository
```bash
  git clone https://github.com/hanz-fr/tokoku-inertia.git
```

### Install tokoku-inertia with composer and npm

```bash
  cd tokoku-inertia

  composer install

  npm install
```

### Generate App Key and Migrate Database (MySQL)
Turn on your favorite web server. Create **.env** file and copy paste contents from **env.example.** Adjust the DB Connection with your own credentials. Manually create database/schema in RDBMS (DB_DATABASE value must match).

Generate the app key
```bash
php artisan key:generate
```
Migrate the database 
```bash
php artisan migrate
```

### Run the project

```bash
php artisan serve

npm run dev
```
