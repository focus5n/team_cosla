package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.Expert;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpertRepository extends JpaRepository<Expert, Long> {

}
