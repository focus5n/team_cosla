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
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "Expert")
public class Expert {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  // 접속정보
  private String email;
  private String password;

  // 회원정보
  private String name;
  private String urlToImage;

  // 경력정보
  private String career;
  private String education;

  // 간단소개
  private String summary;

  // 상세정보
  private String description;
  private String effectOfCounselling;
  private String howToCounselling;

}
