package com.cosla.ggcafe.service;

import com.cosla.ggcafe.exception.ResourceNotFoundException;
import com.cosla.ggcafe.model.Match;
import com.cosla.ggcafe.repository.MatchRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class MatchService {

  @Autowired
  private MatchRepository matchRepository;

  // create match rest api
  public Match createMatch(@RequestBody Match match) {
    return matchRepository.save(match);
  }

  // get match by id
  public Match getMatchById(@PathVariable Long id) {
    Match match = matchRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Match not exist with id: " + id));

    return match;
  }

}
