package com.cosla.ggcafe.controller;

import java.util.List;
import java.util.Optional;

import com.cosla.ggcafe.model.Expert;
import com.cosla.ggcafe.repository.ExpertRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExpertController {

  @Autowired
  ExpertRepository expertRepository;

  // 전문가 목록 출력헐 때 사용
  @RequestMapping("/expert")
  public List<Expert> ExpertAll() {
    return expertRepository.findAll();
  }

  // 전문가 상세정보 출력할 때 사용

  @RequestMapping("/expert/{id}")
  public Optional<Expert> ExpertById(@PathVariable("id") long id) {
    return expertRepository.findById(id);
  }

  // 전문가 상세정보 출력할 때 사용
  // @RequestMapping("/expert/{id}")
  // public Expert ExpertById(@PathVariable("id") long id) {
  // System.out.println("input: " + id);

  // Expert expert = expertRepository.findById(id).orElse(null);
  // System.out.println("Export: " + expert.getName() + " / " +
  // expert.getSummary());
  // return expert;
  // }
}
