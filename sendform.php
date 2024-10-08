<?php
// BeautyLunchParnas@yandex.ru

if (!empty($_POST)) {
	if (isset($_POST['phone'])){
		$mail_str = "Заявка от ". $_POST['name'] .  PHP_EOL . "Телефон: +7"  . $_POST['phone'] . PHP_EOL . 'Услуга: ' . $_POST['service'] . PHP_EOL . PHP_EOL;
		mail("BeautyLunchParnas@yandex.ru", "Заказ на сайте Beauty lunch", $mail_str, 'From: info@beauty-lunch.ru');
	};
};