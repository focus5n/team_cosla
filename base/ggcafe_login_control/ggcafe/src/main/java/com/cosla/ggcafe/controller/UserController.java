package com.cosla.ggcafe.controller;

import com.cosla.ggcafe.model.OAuthToken;
import com.cosla.ggcafe.repository.UserRepository;
import com.cosla.ggcafe.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/auth/kakao/callback") //redirect_uri : /auth/kakao/callback
    @ResponseBody
    public KakaoProfile kakaoCallback(String code) {
        UserService userService = new UserService();
        OAuthToken oAuthToken = new OAuthToken();
        oAuthToken = userService.getAccessToken(code);
        
        return userService.getProfile(oAuthToken, userRepository);
    
        //https://kauth.kakao.com/oauth/authorize?client_id=db7f399f1838c8f409b9611791d7f87a&redirect_uri=http://localhost:8080/auth/kakao/callback&response_type=code
    }
    
}
