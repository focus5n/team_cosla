package com.cosla.ggcafe.repository.mapping;

import java.util.Date;

import com.cosla.ggcafe.model.CounselCard;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AfterCounselMapping{
    String getCounseler();
    String getCounselData();
    Date getDate();
    
}
