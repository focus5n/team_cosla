package com.cosla.ggcafe.controller;

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
   
    //@Autowired
    
    @GetMapping("/auth/kakao/callback") //redirect_uri : /auth/kakao/callback
    @ResponseBody
    public String kakaoCallback(String code) {
        UserService userService = new UserService();
        userService.getAccessToken(code);
        return "코드는 = " + code;
    
    }
    
}
