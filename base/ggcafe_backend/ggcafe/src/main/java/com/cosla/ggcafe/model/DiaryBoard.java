package com.cosla.ggcafe.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data

public class DiaryBoard {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String content;
    private String userId;
 }