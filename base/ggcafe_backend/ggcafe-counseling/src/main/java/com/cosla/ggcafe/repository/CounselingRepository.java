package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.Counseling;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CounselingRepository extends JpaRepository<Counseling, Long> {
    CounselingRepository findByCounselee(String counselee);
}
