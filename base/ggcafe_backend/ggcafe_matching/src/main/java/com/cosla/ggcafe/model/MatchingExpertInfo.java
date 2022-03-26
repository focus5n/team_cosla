package com.cosla.ggcafe.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;

@Data
@Table(name = "MatchingExpert")
@DynamicInsert
@DynamicUpdate
@Entity
public class MatchingExpertInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  // 회원정보
  private String email;
  private String password;

  // 경력정보
  private String url;
  private String career;
  private String education;

  // 자기소개
  private String name;
  private String urlToImage;
  private String summary;
  private String description;
  private String effectOfCounselling;
  private String howToCounselling;

}
