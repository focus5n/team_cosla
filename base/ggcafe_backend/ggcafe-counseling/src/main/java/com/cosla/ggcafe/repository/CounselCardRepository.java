package com.cosla.ggcafe.repository;

import java.util.List;
import com.cosla.ggcafe.model.Counseling;
import com.cosla.ggcafe.model.CounselCard;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CounselCardRepository extends JpaRepository<CounselCard, Long>{
   List<CounselCard> findByCounseleeId(int counseleeId);
}
