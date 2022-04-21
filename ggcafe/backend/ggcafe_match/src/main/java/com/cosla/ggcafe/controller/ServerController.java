package com.cosla.ggcafe.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ServerController {

  @RequestMapping("/")
  public String home() {
    return "home";
  }

}
