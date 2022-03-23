package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.MatchingExpertInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchingExpertInfoRepository extends JpaRepository<MatchingExpertInfo, Long> {

}
