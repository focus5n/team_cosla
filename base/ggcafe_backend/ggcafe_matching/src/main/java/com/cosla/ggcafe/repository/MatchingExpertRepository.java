package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.MatchingExpert;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchingExpertRepository extends JpaRepository<MatchingExpert, Long> {

}
