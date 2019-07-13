<?php

$recepient = "daisyenglish@yandex.ru";
$sitename = "Daisy English";

$name = trim($_POST["Name"]);
$phone = trim($_POST["Phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepientg");