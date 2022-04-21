package com.cosla.ggcafe.repository;

import java.util.List;

import com.cosla.ggcafe.model.Counseling;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CounselingRepository extends JpaRepository<Counseling, Long> {
    List<Counseling> findByCounseleeId(Integer counseleeId);
}
