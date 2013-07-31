'use strict';

// Backend mockup

var appTest = angular.module("appTest", ['app', 'ngMockE2E']);
appTest.run(function ($httpBackend) {
	var baseApiUrl = "https://api-qa.bountysource.com/"
	
	$httpBackend.whenGET(/pages\/.*/).passThrough();
	
	$httpBackend.whenJSONP(baseApiUrl+"user/login?_method=POST&callback=JSON_CALLBACK&email=mr_manly%40gmail.com&per_page=250")
		.respond({"data":{"error":"Password not correct.","email_is_registered":true},"meta":{"status":404,"success":false,"pagination":null}});


	//login procedure

	$httpBackend.whenJSONP(baseApiUrl+"user/login?_method=POST&callback=JSON_CALLBACK&email=mr_manly%40gmail.com&password=MANLINESS123456&per_page=250")
		.respond({"data":{"id":19414,"slug":"19414-themanliest","display_name":"TheManliest","frontend_path":"#users/19414-themanliest","frontend_url":"https://www-qa.bountysource.com/#users/19414-themanliest","image_url":"https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_100,h_100/noaoqqwxegvmulwus0un.png","medium_image_url":"https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200/noaoqqwxegvmulwus0un.png","large_image_url":"https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_400,h_400/noaoqqwxegvmulwus0un.png","created_at":"2013-07-25T23:52:19Z","bio":null,"location":null,"company":null,"url":null,"public_email":null,"first_name":"Mister","last_name":"ManlyMan","email":"mr_manly@gmail.com","last_seen_at":"2013-07-30T22:41:58Z","updated_at":"2013-07-30T22:41:58Z","paypal_email":null,"exclude_from_newsletter":false,"access_token":"19414.1375312228.13fe9584471de82df35d767dc8275fa2a6e1535b"},"meta":{"status":200,"success":true,"pagination":null}});

	$httpBackend.whenJSONP(baseApiUrl+"user?_method=GET&access_token=19414.1375312228.13fe9584471de82df35d767dc8275fa2a6e1535b&callback=JSON_CALLBACK&per_page=250")
		.respond({"data":{"id":19414,"slug":"19414-themanliest","display_name":"TheManliest","frontend_path":"#users/19414-themanliest","frontend_url":"https://www-qa.bountysource.com/#users/19414-themanliest","image_url":"https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_100,h_100/noaoqqwxegvmulwus0un.png","medium_image_url":"https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200/noaoqqwxegvmulwus0un.png","large_image_url":"https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_400,h_400/noaoqqwxegvmulwus0un.png","created_at":"2013-07-25T23:52:19Z","bio":null,"location":null,"company":null,"url":null,"public_email":null,"admin":false,"first_name":"Mister","last_name":"ManlyMan","email":"mr_manly@gmail.com","last_seen_at":"2013-07-31T00:48:15Z","updated_at":"2013-07-31T00:48:15Z","paypal_email":null,"exclude_from_newsletter":false,"address":null,"account":{"id":null,"type":"Account::Personal","balance":0},"github_account":null,"twitter_account":null,"facebook_account":null,"gittip_account":null},"meta":{"status":200,"success":true,"pagination":null}});

	$httpBackend.whenJSONP(baseApiUrl+"users/19414/activity?_method=GET&access_token=19414.1375312228.13fe9584471de82df35d767dc8275fa2a6e1535b&callback=JSON_CALLBACK&per_page=250")
		.respond({"data":[],"meta":{"status":200,"success":true,"pagination":null}});
});