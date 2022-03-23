package com.cosla.ggcafe.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.ImportResource;

// BeanConfig Class를 xml 대체하는 환경 파일로 설정
@Configuration
// xml 추적 && classpath는 resources에서 파일 검색
// @ImportResource("classpath:application.xml")
// Component 추적 && basePackages는 설정한 package만 검색
@ComponentScan(basePackages = { "com.cosla.ggacfe.config", "com.cosla.ggcafe.beans" })
public class BeanConfig {

}