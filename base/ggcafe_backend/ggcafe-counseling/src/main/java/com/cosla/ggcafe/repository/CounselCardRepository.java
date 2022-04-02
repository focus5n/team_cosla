package com.cosla.ggcafe.repository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import com.cosla.ggcafe.model.CounselCard;
import com.cosla.ggcafe.repository.mapping.AfterCounselMapping;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CounselCardRepository extends JpaRepository<CounselCard, Long>{
   AfterCounselMapping findByCounselee(String counselee);
}
