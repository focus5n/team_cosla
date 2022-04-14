package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.DiaryBoard;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryBoardRepository extends JpaRepository<DiaryBoard, Long> {
    
}
