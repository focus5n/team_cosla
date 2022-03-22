package com.cosla.ggcafe.service;

import java.util.List;

import com.cosla.ggcafe.model.Expert;
import com.cosla.ggcafe.repository.ExpertRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchingExpertService {

  @Autowired
  private ExpertRepository MatchingExpertRepository;

  // java.util.List
  public List<Expert> getAllMatchingExpert() {
    return MatchingExpertRepository.findAll();
  }

}
