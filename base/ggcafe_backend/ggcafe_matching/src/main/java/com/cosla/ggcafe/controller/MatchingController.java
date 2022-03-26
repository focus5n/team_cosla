package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.MatchingExpertInfo;
import com.cosla.ggcafe.service.MatchingExpertInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class MatchingController {

  @Autowired
  private MatchingExpertInfoService MatchingExpertInfoService;

  @GetMapping("/expert")
  public List<MatchingExpertInfo> getAllMatchingExpertInfo() {

    return MatchingExpertInfoService.getAllMatchingExpertInfo();

  }

}
