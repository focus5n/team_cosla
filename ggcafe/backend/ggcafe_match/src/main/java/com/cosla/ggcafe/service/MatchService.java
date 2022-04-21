package com.cosla.ggcafe.service;

import com.cosla.ggcafe.exception.ResourceNotFoundException;
import com.cosla.ggcafe.model.Match;
import com.cosla.ggcafe.repository.MatchRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
  public ResponseEntity<Match> getMatchById(@PathVariable Long matchId) {
    Match match = matchRepository.findById(matchId)
        .orElseThrow(() -> new ResourceNotFoundException("Match not exist with id: " + matchId));

    return ResponseEntity.ok(match);
  }

}
