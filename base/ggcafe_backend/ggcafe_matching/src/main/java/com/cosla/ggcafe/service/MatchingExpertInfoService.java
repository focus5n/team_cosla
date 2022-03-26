package com.cosla.ggcafe.service;

import java.util.List;

import com.cosla.ggcafe.model.MatchingExpertInfo;
import com.cosla.ggcafe.repository.MatchingExpertInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchingExpertInfoService {

  @Autowired
  private MatchingExpertInfoRepository MatchingExpertInfoRepository;

  // java.util.List
  public List<MatchingExpertInfo> getAllMatchingExpertInfo() {

    return MatchingExpertInfoRepository.findAll();

  }

}
