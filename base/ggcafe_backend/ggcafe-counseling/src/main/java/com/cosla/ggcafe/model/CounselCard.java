package com.cosla.ggcafe.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
