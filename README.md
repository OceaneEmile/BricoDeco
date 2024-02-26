Bric'O Déc'O project front

# React App Installation Guide

Welcome to Bric'O Déc'O! This guide will help you set up and run the project on your local machine.

## Installation

-1. Clone the repository:

git clone your-repo-url 

-2.Navigate to the project directory:

cd your-project-directory

-3.Install dependencies with yarn (or npm):

yarn
or
npm install

-4.Start the development server if you want change anything:

yarn dev
or
npm run dev
change url for link API and link database

-5.Build the project

yarn build
or
npm run build

## Deploy on Server

-1. Connect on server 
ssh student@yourName-server.eddi.cloud

-2.Navigate on Repository

cd /var/www/

-3 Clone or copy Dist repository of Project

git clone
or 
scp dist student@YOUR_NAME-server.eddi.cloud:/var/www/html

-4 Configure Apache

cd /etc/apache2/sites-available
sudo nano 002-myProject.conf

<VirtualHost *:8080>
 DocumentRoot /var/www/yourRepositoryDist
 </VirtualHost>

 sudo a2ensite 001-myProject.conf
 sudo systemctl reload apache2

-5.Go on your project

http://YOUR_NAME-server.eddi.cloud:8080/
