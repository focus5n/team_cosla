package com.cosla.ggcafe.controller;

import java.util.HashMap;
import java.util.Map;

import com.cosla.ggcafe.model.KakaoProfile;
import com.cosla.ggcafe.model.OAuthToken;
import com.cosla.ggcafe.model.User;
import com.cosla.ggcafe.repository.UserRepository;
import com.cosla.ggcafe.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/login")
    @ResponseBody
    public OAuthToken kakaoLogin(@RequestParam("code") String code) {
        UserService userService = new UserService();
        OAuthToken oAuthToken = new OAuthToken();
        oAuthToken = userService.getAccessToken(code);
        // userService.getProfile(oAuthToken, userRepository);
        return oAuthToken;
    }

    @GetMapping("/accountinfo")
    @ResponseBody
    public KakaoProfile accountInfo(@RequestParam("at") String at) {
        UserService userService = new UserService();
        OAuthToken oAuthToken = new OAuthToken();
        oAuthToken.setAccess_token(at);
        return userService.getProfile(oAuthToken, userRepository);
    }

    //회원가입
    @PostMapping("/signup")
    @ResponseBody
    public User signUp(@ModelAttribute User user) {
        System.out.println(user);
        userRepository.save(user);
        return user;
    }

    //로그인
    @PostMapping("/signin")
    @ResponseBody
    public User signInPost(@ModelAttribute User user) {
        User user2 = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        Map<String, Object> map = new HashMap<>();
        if (user2 != null) {
          map.put("code", 200);
          map.put("msg", "success");
        } else {
          map.put("code", 201);
          map.put("msg", "fail");
        }
        return user2;
    }

    @GetMapping("/accountinfo/update/{id}")
    @ResponseBody
    public String accountUpdate(@RequestParam("at") String at) {
        
        return "";
    }
}