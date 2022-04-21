package com.cosla.ggcafe.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Entity
@Data
public class CounselCard {
    @Id
    @GeneratedValue
    Long id;
    String counselor;
    int counselorId;
    String counselee;
    int counseleeId;
    String counselRecord;
    String counselData;
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    Date date;
}
