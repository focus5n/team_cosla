package com.cosla.ggcafe.model;

import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Entity
@Data
public class CounselCard {
    @Id @GeneratedValue
    Long id;
    String counseler;
    int counselrId;
    String counselee;
    int counseleeId;
    String counselRecord;
    String counselData;
    Date date;
}
