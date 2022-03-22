package com.cosla.ggcafe.service;

import java.util.List;

import com.cosla.ggcafe.model.MatchingExpert;
import com.cosla.ggcafe.repository.MatchingExpertRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchingExpertService {

  @Autowired
  private MatchingExpertRepository MatchingExpertRepository;

  // java.util.List
  public List<MatchingExpert> getAllMatchingExpert() {
    return MatchingExpertRepository.findAll();
  }

}
