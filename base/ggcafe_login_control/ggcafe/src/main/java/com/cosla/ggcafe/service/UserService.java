package com.cosla.ggcafe.service;

import com.cosla.ggcafe.model.KakaoProfile;
import com.cosla.ggcafe.model.User;
import com.cosla.ggcafe.model.UserModel;
import com.cosla.ggcafe.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void getAccessToken(String code) {

        //POST방식으로 key-value 데이터를 요청(카카오쪽으로)
        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스

        //HttpHeader 오브젝트 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        //HttpBody 오브젝트 생성
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type","authorization_code");
        params.add("client_id","db7f399f1838c8f409b9611791d7f87a");
        params.add("redirect_uri","http://localhost:8080/auth/kakao/callback");
        params.add("code", code);
        params.add("client_secret", "uRI2TMi5X0vi7a2fTNLoRpWTWAJu1g9l");

        //HttpHeader와 HttpBody를 하나의 오브젝트에 담기
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest =
                new HttpEntity<>(params, headers);

        //실제로 요청하기
        //Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
        ResponseEntity<String> response = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );


        //Gson Library, JSON SIMPLE LIBRARY, OBJECT MAPPER(Check)
        ObjectMapper objectMapper = new ObjectMapper();
        UserModel oauthToken =null;
        //Model과 다르게 되있으면 그리고 getter setter가 없으면 오류가 날 것이다.
        try {
            oauthToken = objectMapper.readValue(response.getBody(), UserModel.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        System.out.println(response);

    }

    public void getProfile(UserModel oauthToken, UserRepository userRepository){
        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스

        //HttpHeader 오브젝트 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer "+ oauthToken.getAccess_token());
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest =
                new HttpEntity<>(headers);

        //실제로 요청하기
        //Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
        ResponseEntity<String> response = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoProfileRequest,
                String.class
        );
        
        ObjectMapper objectMapper = new ObjectMapper();
        KakaoProfile profile  =null;
        //Model과 다르게 되있으면 그리고 getter setter가 없으면 오류가 날 것이다.
        try {
            profile = objectMapper.readValue(response.getBody(), KakaoProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        //username, password, email
        User user = new User();
        user.setName(profile.getProperties().getNickname());
        user.setEmail(profile.getKakao_account().getEmail());
        user.setGender(1);
        user.setAge_range(25);
        user.setBirth(9999);

        userRepository.save(user);

    }
}