package com.cosla.ggcafe.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

  // 서버 메인 페이지
  @RequestMapping("/")
  public String home() {

    return "welcomeUser";
  }

}
