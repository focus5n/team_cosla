package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.MatchingExpert;
import com.cosla.ggcafe.service.MatchingExpertService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api")
public class MatchingExpertController {

  @Autowired
  private MatchingExpertService MatchingExpertService;

  @GetMapping("/matchingexpert")
  public List<MatchingExpert> getAllMatchingExpert() {

    return MatchingExpertService.getAllMatchingExpert();

  }

}
