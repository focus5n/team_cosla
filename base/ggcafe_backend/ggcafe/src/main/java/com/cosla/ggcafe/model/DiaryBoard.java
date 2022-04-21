package com.cosla.ggcafe.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data

public class DiaryBoard {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    
    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "password")
    private String password;

    @Column(name = "like")
    private int like;

    @Column(name = "author")
    private String author;

    @Column(name = "author_id")
    private long authorld;
 }